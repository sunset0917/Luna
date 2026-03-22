# 🤖 Inti – Robot Social Terapéutico  
Repositorio de desarrollo y documentación de tesis

Este repositorio contiene el diseño, implementación y validación de **Inti**, un robot social orientado al acompañamiento emocional de pacientes pediátricos, con énfasis en interacción humano-robot mediante voz, expresiones visuales y movimientos simples.

---

## 📌 Estado general del proyecto

- ✔ Marco teórico, estado del arte y metodología
- ✔ Diseño conceptual del sistema
- ✔ LLM ejecutándose en Raspberry Pi (Ollama)
- ✔ Integración inicial de micrófono
- ⚠️ Pipeline de voz con latencia por optimizar
-  CAD funcional final y mecanismos
- ❌ Síntesis de voz definitiva
- ❌ Fabricación e integración física completa
- ❌ Validación experta

---

## 📂 TODO LIST – TESIS (Organizado por subsistemas)

---

## 🧠 1. Sistema de Control e Inteligencia Artificial

### LLM
- [x] Ejecutar modelo LLM local en Raspberry Pi mediante Ollama
- [ ] Optimizar latencia de respuesta del LLM
- [ ] Limitar longitud y complejidad de respuestas
- [ ] Definir memoria conversacional mínima
- [ ] Documentar arquitectura del agente conversacional

### Prompt System
- [X] Definir personalidad preliminar de Inti (no clínica)
- [ ] Definir respuestas empáticas y lenguaje adecuado para entorno pediátrico
- [X] Incorporar restricciones éticas (no diagnóstico, no terapia médica)
- [ ] Asociar emociones del robot con estilos de respuesta

---

## 🎙️ 2. Sistema de Voz

### Speech-to-Text (STT)
- [x] Integración básica de micrófono
- [ ] Evaluar calidad de transcripción
- [ ] Implementar medición de Word Error Rate (WER)
- [ ] Documentar procedimiento de cálculo del WER

### Text-to-Speech (TTS)
- [ ] Evaluar sintetizadores de voz compatibles con Raspberry Pi
- [ ] Seleccionar un sintetizador estable
- [ ] Definir si se emplea voz robótica o voz humana sintetizada
- [ ] Buscar y justificar con estudios el tipo de voz más adecuado en robótica social
- [ ] Implementar reproducción de voz funcional (aunque no definitiva)

---

## 📚 3. Justificación teórica – Voz en robótica social
- [ ] Revisión bibliográfica: voz robótica vs voz humana en HRI
- [ ] Identificar estudios que analicen:
  - aceptación
  - confianza
  - percepción emocional
- [ ] Justificar la elección de voz para Inti
- [ ] Documentar implicancias éticas y emocionales

---

## 👀 4. Interacción visual – Expresiones (Ojitos)

- [x] Cambio de expresión visual según estado del sistema (pantalla única)
- [ ] Definir emociones finales del robot
- [ ] Diseñar expresiones visuales simples por emoción
- [ ] Asociar emoción ↔ expresión visual ↔ respuesta verbal
- [ ] Documentar limitaciones por ausencia de MUX (pantalla única)

---

## ⚙️ 5. Sistema Mecánico y Expresividad Física

### Diseño mecánico
- [x] Carcasa base v1 diseñada
- [X] Diseño de carcasa v2 con integración real de componentes
- [X] Implementar mecanismo de brida con eje
- [X] Justificar el mecanismo seleccionado
- [X] Diseñar acoples y soportes mecánicos
- [X] Diseño de orejas y tapa listo
- [X] Diseño de acople para microfono
- [X] Base de servomotor apoyado en cuerpo
- [X] Patas
- [ ] Pendiente carcasas o ajustes para microcontrolares

### Movimientos expresivos
- [X] Definir qué elementos del robot son activos y cuáles pasivos
- [X] Analizar movimientos expresivos inspirados en llamas
- [ ] Definir significado comunicativo de:
  - movimiento de orejas
  - inclinación de cabeza
  - movimientos sutiles
- [ ] Justificar cuándo un movimiento debe ser activo o pasivo según la emoción
- [ ] Documentar relación emoción ↔ movimiento ↔ percepción

---

## 🔌 6. Sistema Electrónico

- [x] Raspberry Pi configurada
- [ ] Definir sistema de alimentación final
- [X] Integrar dispositivo de salida de audio (USB)
- [ ] Organizar cableado interno
- [ ] Estimar consumo energético del sistema

---

## 🏗️ 7. Fabricación e Integración (Capítulo 5)

- [X] Impresión 3D de carcasa (Pendientes algunas partes)
- [X] Ensamblaje de pantalla
- [ ] Integración de sistema de voz
- [ ] Ensamblaje general del prototipo
- [X] Pruebas funcionales básicas (Se han realizado algunas pruebas de movimiento)

---

## 🧪 8. Validación del sistema (Capítulo 6)

### Validación del LLM
- [ ] Buscar metodología de validación con preguntas extremas
- [ ] Diseñar set de preguntas:
  - fuera de dominio
  - emocionales
  - ambiguas
- [ ] Evaluar coherencia, seguridad y adecuación de respuestas

### Validación experta
- [ ] Reunión con personal del servicio de quemados
- [ ] Reunión con psicólogos
- [ ] Validar:
  - interacción verbal
  - expresiones visuales
  - movimientos
- [ ] Documentar feedback y ajustes

---

## 📄 9. Documentación de la tesis

- [X] Capítulo 4 – Diseño detallado. Pendiente: Sección electrónica
- [ ] Capítulo 5 – Fabricación e integración
- [ ] Capítulo 6 – Validación
- [ ] Discusión
- [ ] Conclusiones
- [ ] Trabajo futuro
- [ ] Limitaciones del prototipo

---

## 📌 Notas importantes
- Este prototipo corresponde a una **versión funcional de investigación**, no a un producto clínico.
- Varias decisiones se documentan como preliminares y sujetas a validación experta.
- Las limitaciones de hardware y tiempo se consideran parte del alcance del trabajo.

---
