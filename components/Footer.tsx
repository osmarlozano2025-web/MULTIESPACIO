
import React from 'react';

interface FooterProps {
  openPopup: (title: string) => void;
}

const Footer: React.FC<FooterProps> = ({ openPopup }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-mystic-100 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons-outlined text-mystic-600 text-3xl">spa</span>
              <span className="font-display text-2xl font-bold text-mystic-700 dark:text-white">SL Multiespacio</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Un santuario para el alma, el cuerpo y la mente. Te acompañamos en tu camino de sanación y descubrimiento personal.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 dark:text-white">Enlaces</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li><a href="/" className="hover:text-mystic-600 transition-colors">Inicio</a></li>
              <li><a href="#/servicios" className="hover:text-mystic-600 transition-colors">Servicios</a></li>
              <li><a href="#/cursos" className="hover:text-mystic-600 transition-colors">Cursos</a></li>
              <li><a href="#/sobre-mi" className="hover:text-mystic-600 transition-colors">Sobre Mí</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 dark:text-white">Redes</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-mystic-50 dark:bg-slate-800 flex items-center justify-center text-mystic-600 hover:bg-mystic-600 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <button onClick={() => openPopup('Facebook Link')} className="w-10 h-10 rounded-full bg-mystic-50 dark:bg-slate-800 flex items-center justify-center text-mystic-600 hover:bg-mystic-600 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </button>
              <a href="https://wa.me/5491158552082" className="w-10 h-10 rounded-full bg-mystic-50 dark:bg-slate-800 flex items-center justify-center text-mystic-600 hover:bg-mystic-600 hover:text-white transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-mystic-50 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2023 SL Multiespacio. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => openPopup('Política de Privacidad')}>Privacidad</button>
            <button onClick={() => openPopup('Términos de Servicio')}>Términos</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
