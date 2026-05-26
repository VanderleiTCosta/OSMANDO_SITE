import React from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

export const WhatsAppFloatingButton: React.FC = React.memo(() => {
  // Número de telefone estruturado e mensagem padrão com URL Encoding para conversão imediata
  const whatsappUrl = "https://wa.me/5511937724242?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+com+a+PROTEC.";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-[999] pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Falar com especialista no WhatsApp - Atendimento Emergencial 24h"
        title="Falar no WhatsApp"
      >
        {/* Efeito de onda pulsante em background para gatilho visual de urgência */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 -z-10" />

        {/* Ícone vetorizado nativo da aplicação */}
        <WhatsAppIcon size={32} color="white" className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:rotate-12" />
      </a>
    </motion.div>
  );
});

WhatsAppFloatingButton.displayName = "WhatsAppFloatingButton";
export default WhatsAppFloatingButton;