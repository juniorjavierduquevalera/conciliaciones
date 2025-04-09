// Navbar.tsx
'use client';
import React, { useState } from 'react';
import {
  FaHome,
  FaCog,
  FaSignOutAlt,
  FaUserCog,
  FaUser,
  FaPenNib,
} from 'react-icons/fa';
import '../app/styles/navbar.css'; 

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
      <div className={`navbar ${isExpanded ? 'expanded' : ''}`}>
        <button
          className={`main-button ${activeButton === 'Inicio' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Inicio')}
        >
          <FaHome className="main-icon" />
          {isExpanded && <span className="main-label">Inicio</span>}
        </button>
        <button
          className={`main-button ${activeButton === 'Opciones' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Opciones')}
        >
          <FaCog className="main-icon" />
          {isExpanded && <span className="main-label">Opciones</span>}
        </button>
        <button
          className={`main-button ${activeButton === 'Salir' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Salir')}
        >
          <FaSignOutAlt className="main-icon" />
          {isExpanded && <span className="main-label">Salir</span>}
        </button>
      </div>

      {isExpanded && activeButton === 'Opciones' && (
        <div className="sub-options-container">
          <button className="sub-button">
            <FaUserCog className="sub-icon" />
            Configurar
          </button>
          <button className="sub-button">
            <FaUser className="sub-icon" />
            Perfil
          </button>
          <button className="sub-button">
            <FaPenNib className="sub-icon" />
            Apodo
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;