
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-100 opacity-20 blur-3xl rounded-full"></div>
          
          <div className="lg:w-5/12 relative">
            <div className="organic-shape overflow-hidden border-8 border-mystic-50 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW2JJlmli-PFW3-r27l6i97t1zntjHm_ZZk_O0j8bpA5CeZ56wgVHd6hGASUfLlZfJ3UmRExbn2-nojmdBqi-8xj2vforJMY5rD14PmEvSG9-28BD3lflwwbAt3PXHBtmP-_xSmGqamvCjD2k7kO56oHeD8dXVp91psyv_Eb-YOwDkDHznSL0oJXOgOJBDOVPg39VuBAxGfDMCeubcARGKMT7tQU0XVzTZS3DL-GCDbT_i_yRDKq48yb2OHtWYDw9qHPVzjh1QteUw" 
                alt="Sabrina Lozano" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-ethereal-teal p-4 rounded-2xl shadow-xl text-white">
              <span className="material-icons-outlined text-3xl">spa</span>
            </div>
          </div>

          <div className="lg:w-7/12">
            <span className="text-mystic-600 font-bold uppercase tracking-widest text-sm mb-4 block">Conoce a tu guía</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8">Sabrina Lozano</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                "Mi misión es acompañarte en tu proceso de despertar y sanación. En SL Multiespacio, he creado un refugio para que puedas reconectar con tu esencia y encontrar las herramientas que necesitas para tu bienestar integral."
              </p>
              <p>
                Como terapeuta holística certificada, combino sabidurías ancestrales con técnicas modernas para lograr una transformación real y profunda en cada ser que llega a mi consulta.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-mystic-50 dark:bg-slate-900 p-4 rounded-2xl">
                <span className="material-icons-outlined text-mystic-600">verified</span>
                <span className="font-bold text-sm">Certificada</span>
              </div>
              <div className="flex items-center gap-4 bg-mystic-50 dark:bg-slate-900 p-4 rounded-2xl">
                <span className="material-icons-outlined text-mystic-600">history</span>
                <span className="font-bold text-sm">Experiencia</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="https://wa.me/5491158552082" className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors">
                <i className="fab fa-whatsapp"></i> 11 5855 2082
              </a>
              <a href="https://instagram.com" className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram"></i> @sl_multiespacio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
