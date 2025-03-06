import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
import { LuMapPinHouse } from "react-icons/lu";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import Link from "next/link";
export default function NavBarVertical() {
  return (
    <nav className="bg-gray-800 h-screen w-12 place-content-center">
          <Link href="/">
            <abbr title="Inicio">
            <IoMdHome 
            className="text-white m-2 w-8 h-8 mt-16 mb-16"/>
            </abbr>
          </Link>
          <Link href="/pages//propietarios-comerciales">
              <abbr title="Propietarios comerciales">
                <BiBuildingHouse
                className="text-white m-2 w-8 h-8 mt-16 mb-16"
                />
              </abbr>
          </Link>
          <Link href="/pages/tasa-de-cambios">
          <abbr title="Tasa de cambios">
              <MdOutlineCurrencyExchange className="text-white m-2 w-8 h-8 mt-16 mb-16"/>
          </abbr>
          </Link>
          <Link href="/pages/comerciales">
          <abbr title="Comerciales">
              <LuMapPinHouse
              className="text-white m-2 mt- w-8 h-8 mt-16 mb-16"
              />
          </abbr>
          </Link>
    </nav>
  );
}
