"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaCog,
  FaSignOutAlt,
  FaUserCog,
  FaUser,
  FaPenNib,
} from "react-icons/fa";
import "../app/styles/navbar.css";
import CardList from "./ui/moleculas/cardList";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      setIsExpanded(false);
      setActiveButton(null);
    } else {
      setIsExpanded(true);
      setActiveButton(buttonName);
    }
  };

  return (
    <div className="container">
      <div className={`navbar ${isExpanded ? "expanded" : ""}`}>
        <button
          className={`main-button ${activeButton === "Inicio" ? "active" : ""}`}
          onClick={() => handleButtonClick("Inicio")}
        >
          <FaHome className="main-icon" />
          {isExpanded && <span className="main-label">Inicio</span>}
        </button>
        <button
          className={`main-button ${activeButton === "Tablas" ? "active" : ""}`}
          onClick={() => handleButtonClick("Tablas")}
        >
          <FaCog className="main-icon" />
          {isExpanded && <span className="main-label">Tablas</span>}
        </button>
        <button
          className={`main-button ${activeButton === "Salir" ? "active" : ""}`}
          onClick={() => handleButtonClick("Salir")}
        >
          <FaSignOutAlt className="main-icon" />
          {isExpanded && <span className="main-label">Salir</span>}
        </button>
      </div>

      {isExpanded && activeButton === "Tablas" && (
        <div className="sub-options-container">
          <CardList />
        </div>
      )}
    </div>
  );
};

export default Navbar;
