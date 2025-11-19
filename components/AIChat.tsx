import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Minimize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm DevBot. Looking to start a web project? Tell me about your ideas, and I can help you scope it out!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const streamResponse = await sendMessageToGemini(userText);
      
      // Add a placeholder message for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      let fullText = "";
      
      for await (const chunk of streamResponse) {
        const content = chunk as GenerateContentResponse;
        if (content.text) {
          fullText += content.text;
          // Update the last message with the accumulating text
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oops! I seem to be having trouble connecting to my brain. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'bg-white/10 text-white rotate-90 scale-0 opacity-0' : 'bg-air-force-blue text-white hover:bg-air-force-blue/80 hover:scale-110 scale-100 opacity-100'}`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none translate-y-10'}`}>
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-air-force-blue/10 flex items-center justify-center">
              <Bot className="h-5 w-5 text-air-force-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-sm">DevBot Assistant</h3>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
            <Minimize2 className="h-5 w-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-air-force-blue text-white rounded-br-none' 
                  : 'bg-white text-slate-700 rounded-bl-none border border-slate-200 shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-white text-slate-700 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm px-4 py-3 flex gap-1 items-center">
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
          <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2 border border-slate-200 focus-within:border-air-force-blue transition-colors">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about services..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder-slate-400"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="text-air-force-blue hover:text-air-force-blue/80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
