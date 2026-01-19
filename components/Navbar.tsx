
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  openPopup: (title: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ openPopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Cursos', path: '/cursos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-mystic-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="material-icons-outlined text-mystic-600 dark:text-mystic-400 text-3xl transition-transform group-hover:rotate-12">spa</span>
            <span className="font-display text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mystic-700 to-ethereal-pink dark:from-mystic-400 dark:to-ethereal-teal">
              SL Multiespacio
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-mystic-600 ${
                  isActive(link.path) ? 'text-mystic-700 font-bold border-b-2 border-mystic-600' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => openPopup('Reserva de Turno')}
              className="bg-mystic-600 hover:bg-mystic-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              <span className="material-icons-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-mystic-100 dark:border-slate-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-mystic-50 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                openPopup('Reserva de Turno');
              }}
              className="w-full text-center bg-mystic-600 text-white py-4 rounded-lg font-bold"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
