import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  initial: string;
  name: string;
  location: string;
  text: string;
}

export default function TestimonialCard({
  initial,
  name,
  location,
  text,
}: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="fill-secondary text-secondary" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground/80 mb-8 leading-relaxed italic flex-grow">
        "{text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-muted pt-6">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-inner">
          {initial}
        </div>
        <div>
          <p className="font-bold text-foreground leading-none mb-1">{name}</p>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}

