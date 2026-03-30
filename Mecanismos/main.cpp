// 1. CONFIGURACIÓN: MODO PÚBLICO (NO AUTH)
#define ENABLE_NO_AUTH 
#define ENABLE_DATABASE

#include <Arduino.h>
#include <WiFi.h>
#include <FirebaseClient.h>
#include <WiFiClientSecure.h>
#include <ESP32Servo.h>

// --- WIFI Y FIREBASE ---
#define WIFI_SSID 
#define WIFI_PASSWORD 
#define DATABASE_URL 

// --- SERVO ---
static const int servoPin = 18;
Servo servo1;

int posicionActualServo = 105; // posición inicial (se vuelve tu centro dinámico)
int amplitud = 30;

// --- CONTROL DE EVENTOS ---
bool negarActivo = false; // evita repetir el gesto mientras el botón sigue en 1

// --- FIREBASE ---
WiFiClientSecure ssl_client;
using AsyncClient = AsyncClientClass;
AsyncClient aClient(ssl_client);

NoAuth no_auth; 
FirebaseApp app;
RealtimeDatabase Database;

unsigned long ultimaPeticion = 0;
const int intervalo = 500;

bool resetNegar = false;

// =========================
// MOVIMIENTO SUAVE
// =========================
void moverSuave(int fin) {
  fin = constrain(fin, 5, 175);

  int inicio = posicionActualServo;
  if (inicio == fin) return;

  Serial.printf("[Servo] %d -> %d\n", inicio, fin);

  if (inicio < fin) {
    for (int pos = inicio; pos <= fin; pos++) {
      servo1.write(pos);
      delay(15);
    }
  } else {
    for (int pos = inicio; pos >= fin; pos--) {
      servo1.write(pos);
      delay(15);
    }
  }

  posicionActualServo = fin;
}

// =========================
// GESTO: NEGAR (CORRECTO)
// =========================
void negarCabeza() {
  Serial.println("[Robot] Negar cabeza");

  int centro = posicionActualServo;

  // 1. Va a la derecha
  moverSuave(centro + amplitud);
  delay(150);

  // 2. Vuelve al centro
  moverSuave(centro);
  delay(150);

  // 3. Va a la izquierda
  moverSuave(centro - amplitud);
  delay(150);

  // 4. Vuelve al centro
  moverSuave(centro);
}

// =========================
// FIREBASE CALLBACK
// =========================
void processData(AsyncResult &aResult) {
  if (aResult.available()) {
    String path = aResult.path().c_str();
    int valor = aResult.payload().toInt();

    // SOLO NEGAR (controlado)
    if (path == "/movimiento/negar") {

      if (valor == 1 ) {
        negarCabeza();
        resetNegar = true;
      }


    }
  }
}

// =========================
// SETUP
// =========================
void setup() {
  Serial.begin(115200);

  ESP32PWM::allocateTimer(0);
  servo1.setPeriodHertz(50);

  servo1.attach(servoPin, 500, 2400);
  servo1.write(posicionActualServo);

  Serial.println("Servo listo (centro dinámico)");

  // WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(300);
    Serial.print(".");
  }
  Serial.println("\nWiFi OK");

  // Firebase
  ssl_client.setInsecure();
  initializeApp(aClient, app, getAuth(no_auth));
  app.getApp<RealtimeDatabase>(Database);
  Database.url(DATABASE_URL);

  Serial.println("Sistema listo.");
}

// =========================
// LOOP
// =========================
void loop() {
  app.loop();


  if (resetNegar) {
    Database.set(aClient, "/movimiento/negar", 0);
    resetNegar = false;
  }

  if (app.ready() && (millis() - ultimaPeticion > intervalo)) {
    ultimaPeticion = millis();

    Database.get(aClient, "/movimiento/negar", processData);
  }
}
