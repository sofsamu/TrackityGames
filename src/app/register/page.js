// pages/register.js (o app/register/page.js si usas App Directory)
export default function Register() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-blue-200 p-6">
        <div className="max-w-lg w-full p-8 bg-white bg-opacity-90 rounded-lg shadow-lg backdrop-blur-md">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Usuario</label>
              <input
                type="text"
                placeholder="Ingresa tu usuario"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    );
  }