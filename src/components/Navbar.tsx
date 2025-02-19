import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
        href=""
        className="text-white font-bold text-xl">
            Conciliaciones
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">
            Usuario
            </Link>
          </li>
          <li>
            <Link href="" className="text-gray-300 hover:text-white">Servicios</Link>
          </li>
          <li>
            <Link href="" className="text-gray-300 hover:text-white">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;