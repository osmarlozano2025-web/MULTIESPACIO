
import React from 'react';

interface CoursesProps {
  openPopup: (title: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ openPopup }) => {
  const courses = [
    { title: 'Alineación de Chakras', type: 'Online', color: 'from-purple-400 to-indigo-500' },
    { title: 'Curso de Péndulo', type: 'Presencial', color: 'from-pink-400 to-rose-500' },
    { title: 'Tarot Evolutivo', type: 'Híbrido', color: 'from-teal-400 to-emerald-500' },
    { title: 'Sanación Energética', type: 'Online', color: 'from-blue-400 to-cyan-500' }
  ];

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">Formación Holística</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Conviértete en terapeuta o profundiza en tu propio camino con nuestras certificaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition-all flex flex-col">
              <div className={`h-40 bg-gradient-to-br ${c.color} flex items-center justify-center relative p-4`}>
                <span className="material-icons-outlined text-white text-6xl opacity-30">school</span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                  {c.type}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-display font-bold mb-4 dark:text-white leading-tight">{c.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Aprende técnicas milenarias para equilibrar energías y ayudar a otros en su proceso.
                </p>
                <button 
                  onClick={() => openPopup(c.title)}
                  className="w-full border-2 border-mystic-100 dark:border-slate-700 text-mystic-600 dark:text-white font-bold py-3 rounded-xl hover:bg-mystic-600 hover:text-white hover:border-mystic-600 transition-all"
                >
                  Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
