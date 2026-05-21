import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DifferentialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function DifferentialCard({
  icon,
  title,
  description,
}: DifferentialCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-8 rounded-xl bg-white border border-border hover:border-secondary hover:shadow-xl transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>

      {/* Accent Line */}
      <div className="h-1 w-12 bg-secondary mt-6 group-hover:w-full transition-all duration-500 rounded-full" />
    </motion.div>
  );
}

