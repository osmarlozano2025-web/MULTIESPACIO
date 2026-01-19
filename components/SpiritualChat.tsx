
import React, { useState, useRef, useEffect } from 'react';
import { generateSpiritualResponse } from '../services/geminiService';

interface Message {
  text: string;
  isUser: boolean;
}

const SpiritualChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Namaste. ¿En qué puedo ayudarte hoy?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await generateSpiritualResponse(userMsg);
      setMessages(prev => [...prev, { text: response || "Paz en tu camino. No pude conectar ahora.", isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Mi energía está fluyendo de otra forma ahora. Intenta más tarde.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-mystic-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
      >
        <span className="material-icons-outlined text-3xl">{isOpen ? 'close' : 'chat'}</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-[500px] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-mystic-100 dark:border-slate-700">
          <div className="bg-mystic-600 p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-icons-outlined">spa</span>
            </div>
            <div>
              <h4 className="font-bold">Guía Espiritual</h4>
              <p className="text-xs opacity-80">En línea y en paz</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-mystic-50/30 dark:bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                  m.isUser 
                  ? 'bg-mystic-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-tl-none border border-mystic-100 dark:border-slate-600'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none animate-pulse text-gray-400 italic text-xs">
                  Sintiendo tu energía...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 border-t border-mystic-100 dark:border-slate-700 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu mensaje..."
              className="flex-grow bg-mystic-50 dark:bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-mystic-400 text-sm px-4 dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-mystic-600 text-white rounded-xl hover:bg-mystic-700 transition-colors"
            >
              <span className="material-icons-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpiritualChat;
