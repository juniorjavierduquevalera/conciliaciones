import React from 'react'
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className='justify-center place-content-center'>
        <Link
        className='p-4'
        href="#">
        Inicio
        </Link>

        <Link
        className='p-4'
        href="#">
        Login
        </Link>

        <Link
        className='p-4'
        href="#">
        invitados
        </Link>
    </nav>
  )
}
