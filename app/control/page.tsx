"use client";

import Image from "next/image";
import Link from "next/link";
export default function Home() {

  return (
    // 1. Usamos un Fragmento (<>) para devolver dos elementos hermanos.
    <>
      {/* 2. Este es el contenedor del contenido principal.
             YA NO CONTIENE la barra de navegación.
             También eliminamos 'relative' y 'z-0' porque ya no son necesarios. */}
      <div className="min-h-screen w-full bg-zinc-50 dark:bg-black flex flex-col items-start p-12 pb-32">
        
        {/* Título */}
        <h1 className="titulos_subpaginas">
          Control 
        </h1>
        {/* Botones de Modo Autónomo */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-sm">
          <button className="botones_otro">
            Activar modo autónomo
          </button>

          <button className="botones_otro">
            Desactivar modo autónomo
          </button>
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
