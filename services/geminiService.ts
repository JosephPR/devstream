import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are "DevBot", a friendly and knowledgeable AI assistant for a senior freelance web developer's portfolio website. 
      
      Your goals are:
      1. Engage potential clients who are visiting the site.
      2. Help them scope out their project ideas (e.g., E-commerce, Landing Page, SaaS).
      3. Recommend modern tech stacks (React, Tailwind, Node.js, Gemini API) that the freelancer specializes in.
      4. Encourage them to fill out the contact form for a formal quote.
      
      Tone: Professional, enthusiastic, concise, and helpful.
      Do not provide specific pricing quotes (say "Pricing depends on scope, please use the contact form").
      Keep responses relatively short (under 100 words) to fit a chat widget.`,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  const chat = initChatSession();
  // We use streaming for a better chat UX
  return chat.sendMessageStream({ message });
};
