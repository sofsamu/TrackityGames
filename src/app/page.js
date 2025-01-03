// app/page.js
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 min-h-screen flex flex-col justify-center items-center text-center py-12 px-6">
      <main className="max-w-7xl mx-auto px-4">
        
        {/* Sección 1 */}
        <section className="flex items-center space-x-8 my-8 bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-gray-300 transition-all hover:bg-blue-50">
          <div className="flex-1">
            <h2 className="text-3xl text-gray-900 font-semibold mb-4">¿Qué es TaskityGames?</h2>
            <p className="text-gray-700">
              TaskityGames es el lugar ideal para gestionar tu colección de videojuegos de forma virtual.
              Mantén tu biblioteca actualizada, califica los títulos que has jugado y añade los próximos lanzamientos
              a tu lista de deseos. Comparte tu pasión por los videojuegos con tus amigos, sigue su actividad y descubre
              sus últimas sesiones de juego. The Nexus Games quiere ser el nexo que conecte a los jugadores, creando
              una comunidad donde todos puedan explorar, compartir y disfrutar su viaje gamer juntos. 🎮
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/img/Background-1.png"
              alt="Imagen de fondo 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Sección 2 */}
        <section className="flex items-center space-x-8 my-8 bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-gray-300 transition-all hover:bg-blue-50">
          <div className="flex-1">
            <img
              src="/img/Background-2.png"
              alt="Imagen de fondo 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl text-gray-900 font-semibold mb-4">El motivo de este proyecto</h2>
            <p className="text-gray-700">
              Este proyecto es el resultado final de mis estudios en desarrollo web, creado para gestionar mi colección de videojuegos.
              Al no encontrar una herramienta adecuada para esto, decidí desarrollar TaskityGames, una plataforma donde puedo organizar
              mis juegos, calificar los que he jugado y añadir los que quiero.

              Está realizado con React, Next.js y Tailwind CSS, y tiene como objetivo cubrir una necesidad personal, al tiempo que busca ofrecer
              una solución práctica y visualmente atractiva para otros jugadores.
            </p>
          </div>
        </section>

        {/* Sección 3 */}
        <section className="flex items-center space-x-8 my-8 bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-gray-300 transition-all hover:bg-blue-50">
          <div className="flex-1">
            <h2 className="text-3xl text-gray-900 font-semibold mb-4">Organización</h2>
            <p className="text-gray-700">
              La organización de la colección se basa en una estructura clara y fácil de navegar. Cada videojuego se clasifica con detalles
              como el título, género, estado (jugado, por jugar, en progreso) y plataforma. Además, se puede añadir una valoración personal
              y comentarios, lo que permite un seguimiento completo. La interfaz está diseñada para mostrar la colección de forma ordenada
              y accesible, facilitando la gestión y la visualización de los juegos en cualquier momento.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/img/Background-3.jpg"
              alt="Imagen de fondo 3"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

      </main>
    </div>
  );
}