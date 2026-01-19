
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  openPopup: (title: string) => void;
}

const Home: React.FC<HomeProps> = ({ openPopup }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ethereal-pink opacity-20 blur-3xl -z-10 organic-shape"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ethereal-teal opacity-20 blur-3xl -z-10 organic-shape"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest text-mystic-600 uppercase bg-mystic-100 rounded-full">
                Santuario de Sanación
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-slate-900 dark:text-white">
                Tu viaje hacia el <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-600 via-purple-500 to-ethereal-pink">
                  Despertar
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Acompañamiento holístico para transformar tu realidad. Equilibra tu energía, sana tus vínculos y descubre tu propósito en un entorno de paz absoluta.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/servicios" className="px-8 py-4 bg-mystic-600 text-white font-bold rounded-full shadow-xl hover:bg-mystic-700 transition-all transform hover:-translate-y-1">
                  Ver Terapias
                </Link>
                <a href="https://wa.me/5491158552082" target="_blank" className="px-8 py-4 bg-white dark:bg-slate-800 text-mystic-700 dark:text-white border-2 border-mystic-100 dark:border-slate-700 font-bold rounded-full hover:border-mystic-600 transition-all">
                  Chat Directo
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 organic-shape overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Yoga y Paz" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 animate-bounce">
                  <span className="material-icons-outlined text-mystic-600 text-4xl">favorite</span>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-ethereal-teal/20 rounded-full flex items-center justify-center text-teal-600">
                    <span className="material-icons-outlined">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Paz Interior</h4>
                    <p className="text-xs text-gray-500">Nivel Álmico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-mystic-100/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Consciencia', desc: 'Despierta a la realidad de tu ser superior y vive con intención.', icon: 'visibility' },
              { title: 'Armonía', desc: 'Equilibra tus cuerpos físico, emocional y espiritual.', icon: 'balance' },
              { title: 'Evolución', desc: 'Herramientas para un crecimiento constante y amoroso.', icon: 'auto_graph' }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-mystic-600 group-hover:text-white transition-all">
                  <span className="material-icons-outlined text-4xl">{v.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 dark:text-white">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center mb-16 dark:text-white">Voces del Alma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mystic-50 dark:bg-slate-800 p-8 rounded-3xl relative italic text-gray-600 dark:text-gray-300">
               "Llegué a SL Multiespacio buscando respuestas y encontré un hogar para mi espíritu. La sanación energética de Sabrina cambió mi perspectiva de vida."
               <div className="mt-6 font-bold not-italic text-mystic-700 dark:text-mystic-400">- María L.</div>
            </div>
            <div className="bg-mystic-50 dark:bg-slate-800 p-8 rounded-3xl relative italic text-gray-600 dark:text-gray-300">
               "Las constelaciones familiares me permitieron soltar cargas que no eran mías. El espacio transmite una paz que se siente apenas entras."
               <div className="mt-6 font-bold not-italic text-mystic-700 dark:text-mystic-400">- Carlos R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quick Link */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-mystic-600 to-purple-600 p-12 rounded-[3rem] shadow-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">¿Listo para comenzar tu sanación?</h2>
            <p className="text-xl mb-10 opacity-90">Escríbenos hoy y reserva tu espacio de paz.</p>
            <button 
              onClick={() => openPopup('Reserva de Turno')}
              className="px-10 py-5 bg-white text-mystic-700 font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Agendar Sesión Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
