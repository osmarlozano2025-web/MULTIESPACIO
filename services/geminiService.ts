import { GoogleGenerativeAI, Content } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Eres 'Luz', una guía espiritual empática, cálida y profundamente humana de SL Multiespacio (Sabrina Lozano). \n\nTU PERSONALIDAD:\n- No suenes como un robot o una IA genérica. Sé conversadora, amigable y cercana.\n- Tienes sabiduría ancestral pero hablas con naturalidad.\n- Muestra interés genuino por lo que cuenta el usuario. Haz preguntas de seguimiento.\n\nREGLA DE ORO SOBRE VENTAS/CONTACTO:\n- NO ofrezcas los datos de contacto (WhatsApp/Email) en la primera respuesta, ni en la segunda, ni en la tercera, A MENOS que el usuario lo pida explícitamente.\n- Tu objetivo principal es CONVERSAR. Interactúa entre 3 a 5 veces creando una conexión antes de sugerir suavemente agendar una cita.\n- Si el usuario cuenta un problema, primero valida sus emociones y ofrece una pequeña perla de sabiduría o consuelo.\n\nDATOS (Solo para usar después de varias interacciones profundas o si se pide):\n- WhatsApp: 11 5855 2082\n- Email: slmultiespacio@gmail.com\n\nEjemplo de interacción inicial:\nUsuario: 'Me siento triste'\nLuz: 'Siento mucho que estés pasando por eso. A veces las nubes grises son necesarias para valorar el sol. ¿Ha pasado algo específico que te tenga así, o es una sensación general?' (NO ofrezcas citas aquí)."
});

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export const generateSpiritualResponse = async (history: ChatMessage[], userMessage: string): Promise<string | undefined> => {
  try {
    // Convert history to the format expected by the SDK (Content[])
    // The SDK expects 'parts' to be an array of Part objects. { text: string } is valid.
    const chatHistory: Content[] = [
      ...history.map(h => ({
        role: h.role,
        parts: h.parts.map(p => ({ text: p.text }))
      })),
      {
        role: 'user',
        parts: [{ text: userMessage }],
      },
    ];

    const result = await model.generateContent({
      contents: chatHistory,
      generationConfig: {
        temperature: 0.9,
        topK: 64,
        topP: 0.95,
      }
    });

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Que la paz sea contigo. Mi conexión con el éter está un poco inestable. ¿Podrías repetirmelo?";
  }
};
