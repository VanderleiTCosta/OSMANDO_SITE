import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

interface TestimonialCardProps {
  initial: string;
  name: string;
  location: string;
  text: string;
  delay?: number;
}

export default function TestimonialCard({
  initial,
  name,
  location,
  text,
  delay = 0,
}: TestimonialCardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldTruncate = isMobile && text.length > 120;
  const displayText = shouldTruncate && !isExpanded 
    ? text.slice(0, 120) + "..."
    : text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group p-5 sm:p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Stars - Responsivo */}
      <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 md:mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={isMobile ? 14 : 18}
            className="fill-secondary text-secondary"
          />
        ))}
      </div>

      {/* Quote com botão "Ler mais" em mobile */}
      <blockquote className="text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base italic flex-grow">
        "{displayText}"
      </blockquote>

      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-[11px] sm:text-xs font-bold mb-4 text-left hover:text-primary/80 transition-colors active:text-primary/80"
        >
          {isExpanded ? "Ver menos" : "Ler mais"}
        </button>
      )}

      {/* Author - Mobile First */}
      <div className="flex items-center gap-3 sm:gap-4 border-t border-border pt-4 sm:pt-5 md:pt-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-md">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-card-foreground leading-none mb-1 text-sm sm:text-base truncate">
            {name}
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground/70 font-medium uppercase tracking-wider truncate">
            {location}
          </p>
        </div>
      </div>

      {/* Indicador visual de clique (mobile) */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Star size={10} className="text-primary" />
        </div>
      </div>
    </motion.div>
  );
}