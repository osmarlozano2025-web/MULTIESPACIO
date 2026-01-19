
import React from 'react';

interface ServicesProps {
  openPopup: (title: string) => void;
}

const Services: React.FC<ServicesProps> = ({ openPopup }) => {
  const services = [
    { 
      title: 'Constelaciones Familiares', 
      icon: 'family_restroom', 
      color: 'bg-pink-100 text-pink-600', 
      desc: 'Aborda bloqueos emocionales profundos mirando hacia tu sistema familiar. Ayuda a liberar patrones repetitivos y lealtades invisibles que frenan tu evolución.',
      benefits: ['Sanación de vínculos', 'Liberación de cargas', 'Claridad sistémica']
    },
    { 
      title: 'Tarot Evolutivo', 
      icon: 'auto_awesome', 
      color: 'bg-purple-100 text-purple-600', 
      desc: 'No es predictivo, sino una herramienta de autoconocimiento. Los arquetipos del tarot sirven como espejo para entender tu momento actual y tomar decisiones conscientes.',
      benefits: ['Guía personal', 'Manejo de crisis', 'Autoconocimiento']
    },
    { 
      title: 'Reiki Usui', 
      icon: 'self_improvement', 
      color: 'bg-teal-100 text-teal-600', 
      desc: 'Terapia milenaria de canalización de energía a través de las manos. Reduce el estrés, promueve la calma mental y acelera los procesos naturales de sanación del cuerpo.',
      benefits: ['Reducción de ansiedad', 'Paz mental', 'Vitalidad física']
    },
    { 
      title: 'Armonizaciones', 
      icon: 'waves', 
      color: 'bg-blue-100 text-blue-600', 
      desc: 'Limpieza energética de tu campo áurico o de espacios físicos. Ideal después de mudanzas, cierres de ciclos o periodos de mucha densidad emocional.',
      benefits: ['Entornos sanos', 'Limpieza áurica', 'Mejor descanso']
    },
    { 
      title: 'Registros Akáshicos', 
      icon: 'menu_book', 
      color: 'bg-indigo-100 text-indigo-600', 
      desc: 'Accede a la biblioteca vibracional de tu alma para entender el origen de ciertos desafíos en esta vida y recibir orientación de tus guías espirituales.',
      benefits: ['Respuestas profundas', 'Sanación álmica', 'Conexión espiritual']
    },
    { 
      title: 'Sanación Pránica', 
      icon: 'healing', 
      color: 'bg-red-100 text-red-600', 
      desc: 'Sistema de medicina energética que utiliza el "prana" para equilibrar y transformar los procesos energéticos del cuerpo sin contacto físico.',
      benefits: ['Balance energético', 'Recuperación rápida', 'Bienestar integral']
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Terapias del Alma</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Cada sesión es un espacio sagrado de escucha y sanación. No tratamos síntomas, sino seres integrales en busca de su propia luz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-xl border border-mystic-50 dark:border-slate-700 hover:shadow-2xl transition-all group flex flex-col">
              <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:rotate-6 transition-transform`}>
                <span className="material-icons-outlined text-4xl">{s.icon}</span>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-6 dark:text-white group-hover:text-mystic-600 transition-colors">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
                {s.desc}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {s.benefits.map((b, i) => (
                  <span key={i} className="px-3 py-1 bg-mystic-50 dark:bg-slate-900 text-mystic-600 dark:text-mystic-400 text-xs font-bold rounded-full">
                    {b}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => openPopup(`Información sobre ${s.title}`)}
                className="w-full bg-mystic-600 text-white font-bold py-4 rounded-2xl hover:bg-mystic-700 transition-all shadow-lg hover:scale-[1.02]"
              >
                Solicitar Turno
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
