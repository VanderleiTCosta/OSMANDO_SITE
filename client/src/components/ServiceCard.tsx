import WhatsAppIcon from "./ui/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  whatsappText: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  whatsappText,
}: ServiceCardProps) {
  const whatsappLink = `https://wa.me/5511948202927?text=${encodeURIComponent(whatsappText)}`;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl bg-white border border-border hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          width="400"
          height="224"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Serviço 24h
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        {/* CTA */}
        <a href={whatsappLink} className="mt-auto">
          <Button
            className="w-full bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-11"
            size="sm"
          >
            <WhatsAppIcon size={20} /> Orçamento no WhatsApp
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

