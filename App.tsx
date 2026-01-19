
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpiritualChat from './components/SpiritualChat';
import InfoPopup from './components/InfoPopup';

const App: React.FC = () => {
  const [popupTitle, setPopupTitle] = useState<string | null>(null);

  const openPopup = (title: string) => {
    setPopupTitle(title);
  };

  const closePopup = () => {
    setPopupTitle(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Navbar openPopup={openPopup} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openPopup={openPopup} />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/servicios" element={<Services openPopup={openPopup} />} />
            <Route path="/cursos" element={<Courses openPopup={openPopup} />} />
          </Routes>
        </main>

        <Footer openPopup={openPopup} />
        
        <SpiritualChat />

        {popupTitle && (
          <InfoPopup title={popupTitle} onClose={closePopup} />
        )}
      </div>
    </Router>
  );
};

export default App;
