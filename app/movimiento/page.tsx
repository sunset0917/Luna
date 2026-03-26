"use client";

import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { db } from "../firebase/firebase.js";
import { ref, set } from "firebase/database";
export default function Home() {

  function ejecutarDerecha() {
    set(ref(db, "movimiento/derecha"), 1);
    set(ref(db, "movimiento/izquierda"), 0);
    set(ref(db, "movimiento/arriba"), 0);
    set(ref(db, "movimiento/abajo"), 0);
    set(ref(db, "movimiento/negar"), 0);
    set(ref(db, "movimiento/asentir"), 0);
  }

  function ejecutarIzquierda() {
    set(ref(db, "movimiento/izquierda"), 1);
    set(ref(db, "movimiento/derecha"), 0);
    set(ref(db, "movimiento/arriba"), 0);
    set(ref(db, "movimiento/abajo"), 0);
    set(ref(db, "movimiento/negar"), 0);
    set(ref(db, "movimiento/asentir"), 0);
  }

  function ejecutarArriba() {
    set(ref(db, "movimiento/arriba"), 1);
    set(ref(db, "movimiento/derecha"), 0);
    set(ref(db, "movimiento/izquierda"), 0);
    set(ref(db, "movimiento/abajo"), 0);
    set(ref(db, "movimiento/negar"), 0);
    set(ref(db, "movimiento/asentir"), 0);
  }

  function ejecutarAbajo() {
    set(ref(db, "movimiento/abajo"), 1);
    set(ref(db, "movimiento/derecha"), 0);
    set(ref(db, "movimiento/izquierda"), 0);
    set(ref(db, "movimiento/arriba"), 0);
    set(ref(db, "movimiento/negar"), 0);
    set(ref(db, "movimiento/asentir"), 0);
  }

  function asentir() {
    set(ref(db, "movimiento/abajo"), 0);
    set(ref(db, "movimiento/derecha"), 0);
    set(ref(db, "movimiento/izquierda"), 0);
    set(ref(db, "movimiento/arriba"), 0);
    set(ref(db, "movimiento/negar"), 0);
    set(ref(db, "movimiento/asentir"), 1);
  }

  function negar() {
    set(ref(db, "movimiento/abajo"), 0);
    set(ref(db, "movimiento/derecha"), 0);
    set(ref(db, "movimiento/izquierda"), 0);
    set(ref(db, "movimiento/arriba"), 0);
    set(ref(db, "movimiento/negar"), 1);
    set(ref(db, "movimiento/asentir"), 0);
  }


  return (
    // 1. Usamos un Fragmento (<>) para devolver dos elementos hermanos.
    <>
      {/* 2. Este es el contenedor del contenido principal.
             YA NO CONTIENE la barra de navegación.
             También eliminamos 'relative' y 'z-0' porque ya no son necesarios. */}
      <div className="min-h-screen w-full bg-zinc-50 dark:bg-black flex flex-col items-start p-12 pb-32">
        
        {/* Título */}
        <h1 className="titulos_subpaginas">
          Movimientos
        </h1>

                {/* Contenedor principal de movimientos */}
        <div className="w-full flex flex-col gap-12 mt-6">

        {/* === MOVER CABEZA === */}
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl font-semibold">Mover cabeza</h2>

            {/* Flechas */}
            <div className="flex flex-col items-center gap-2">

            {/* Flecha arriba */}
            <button 
            onClick={ejecutarArriba}
            className="p-3 rounded-full border dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
                <ArrowUp size={32} />
            </button>

            {/* Izquierda - Derecha */}
            <div className="flex gap-4">
                <button 
                onClick={ejecutarIzquierda}
                className="p-3 rounded-full border dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
                <ArrowLeft size={32} />

                </button>

                <button 
                onClick={ejecutarDerecha}
                className="p-3 rounded-full border dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
                <ArrowRight size={32} />
                </button>
            </div>

            {/* Flecha abajo */}
            <button 
            onClick={ejecutarAbajo}
            className="p-3 rounded-full border dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
                <ArrowDown size={32} />
            </button>
          </div>
            {/* === SECCIÓN 2: GESTOS RÁPIDOS (ASENTIR Y NEGAR) === */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl font-semibold">Gestos rápidos</h2>
            <div className="flex gap-10">
              
              {/* Bloque Asentir */}
              <div className="flex flex-col items-center gap-2">
                <button 
                  onClick={asentir}
                  className="px-8 py-4 rounded-xl border dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition font-medium">
                  <span className="font-medium mt-2">Asentir</span>
                </button>
              </div>

              {/* Bloque Negar */}
              <div className="flex flex-col items-center gap-2">
                <button 
                  onClick={negar}
                  className="px-8 py-4 rounded-xl border dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition font-medium">
                  <span className="font-medium mt-2">Negar</span>
                </button>
              </div>

          
            </div>




            </div>
       
          </div>

      

            
        </div>




        
      </div>

      {/* 3. La barra de navegación ahora es HERMANA del div de contenido. */}
      {/*    Ahora se posicionará correctamente con respecto a la ventana. */}
      <div className="w-full fixed bottom-0 left-0 p-4 bg-white dark:bg-black flex justify-around items-center z-50">
        <Link
          href="/control"
          className="botones_web"
        >
          Control de Dispositivo
        </Link>
        <Link
          href="/audios"
          className="botones_web"
        >
          Audios
        </Link>
        <Link
          href="/configuracion"
          className="botones_web"
        >
          Configuracion
        </Link>
        <Link
          href="/movimiento"
          className="botones_web"
        >
          Movimiento
        </Link>
      </div>
    </>
  );
}
