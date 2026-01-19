
import React from 'react';

interface InfoPopupProps {
  title: string;
  onClose: () => void;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ title, onClose }) => {
  const isContact = title.toLowerCase().includes('reserva') || title.toLowerCase().includes('turno') || title.toLowerCase().includes('info');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl relative border border-mystic-100 dark:border-slate-700">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          <span className="material-icons-outlined">close</span>
        </button>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-mystic-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span className="material-icons-outlined text-mystic-600 text-4xl">
              {isContact ? 'event_available' : 'spa'}
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">
            {title}
          </h3>
          
          {isContact ? (
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 dark:text-gray-300">Conéctate directamente con Sabrina para coordinar tu encuentro:</p>
              <a 
                href="https://wa.me/5491158552082" 
                target="_blank" 
                className="flex items-center justify-center gap-3 w-full bg-green-500 text-white font-bold py-4 rounded-2xl hover:bg-green-600 transition-all shadow-lg"
              >
                <i className="fab fa-whatsapp text-xl"></i> WhatsApp Directo
              </a>
              <a 
                href="mailto:slmultiespacio@gmail.com" 
                className="flex items-center justify-center gap-3 w-full bg-mystic-600 text-white font-bold py-4 rounded-2xl hover:bg-mystic-700 transition-all shadow-lg"
              >
                <i className="far fa-envelope text-xl"></i> Enviar Email
              </a>
            </div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Estamos preparando este contenido con mucha dedicación para brindarte la mejor experiencia. Vuelve pronto para descubrir todas las novedades.
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-2xl hover:opacity-90 transition-all shadow-xl"
              >
                Cerrar Círculo
              </button>
            </>
          )}
          
          <p className="text-xs text-gray-400 mt-4 italic">SL Multiespacio - Sanación & Bienestar</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
