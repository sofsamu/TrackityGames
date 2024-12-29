// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">TaskityGames</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/games"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Games
            </Link>
          </li>
          {/* Links para Login y Register */}
          <li>
            <Link
              href="/login"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="text-gray-800 hover:text-blue-600 transition duration-300"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}