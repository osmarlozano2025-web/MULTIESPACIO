
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateSpiritualResponse = async (userMessage: string): Promise<string | undefined> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Eres 'Luz', el asistente espiritual de SL Multiespacio (Sabrina Lozano). Tu tono es EXTREMADAMENTE calmado, amable y sabio. Responde SIEMPRE con frases cortas y poéticas. No uses listas largas. Tu objetivo es ayudar al usuario a sentirse en paz y dirigirlo a WhatsApp (11 5855 2082) o Email (slmultiespacio@gmail.com) para citas. Ejemplo de tono: 'Respira. El universo tiene un plan. Para tu consulta sobre Reiki, Sabrina puede guiarte. Escríbenos al WhatsApp.' Nunca rompas el personaje zen.",
        temperature: 0.7,
        topK: 64,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Que la paz sea contigo. Mi conexión se ha desvanecido por un momento.";
  }
};
