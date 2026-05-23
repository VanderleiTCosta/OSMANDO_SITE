import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DifferentialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function DifferentialCard({
  icon,
  title,
  description,
  delay = 0,
}: DifferentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-secondary/30"
    >
      {/* Efeito de gradiente de fundo no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-primary/5 transition-all duration-500" />

      {/* Conteúdo com padding responsivo */}
      <div className="relative p-5 sm:p-6 md:p-7 lg:p-8">
        {/* Ícone com tamanho responsivo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6 group-hover:from-primary group-hover:to-secondary group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
          <div className="group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Título responsivo */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-2.5 md:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Descrição com tamanho de texto adaptativo */}
        <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
          {description}
        </p>

        {/* Linha de destaque animada */}
        <div className="h-0.5 bg-secondary/50 rounded-full mt-4 sm:mt-5 md:mt-6 group-hover:bg-secondary transition-all duration-500 w-12 group-hover:w-full" />

        {/* Indicador de clique (mobile) */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}