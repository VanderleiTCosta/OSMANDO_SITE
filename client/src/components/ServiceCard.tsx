import React, { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  whatsappText?: string;
  slug?: string;
  priority?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  slug,
  priority = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);

  // Detecta dispositivo touch para feedback adequado
  React.useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setTouchDevice(isTouch);
  }, []);

  // Gera URL amigável automaticamente para garantir um roteamento SEO-friendly
  const urlSlug = useMemo(() => {
    if (slug) return slug;
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }, [title, slug]);

  // Versão mobile do texto do badge
  const badgeText = useMemo(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return "24h";
    }
    return "Plantão 24h";
  }, []);

  return (
    <Link href={`/solucoes/${urlSlug}`}>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        whileHover={!touchDevice ? { y: -8 } : {}}
        whileTap={touchDevice ? { scale: 0.98 } : {}}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl focus-visible:ring-offset-2"
        aria-label={`Ver detalhes sobre a solução de ${title}`}
      >
        <article className="group overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300 ease-out flex flex-col h-full shadow-sm hover:shadow-xl">
          {/* Container da imagem com aspect ratio responsivo */}
          <figure className="relative bg-gray-100 m-0 overflow-hidden">
            {/* Aspect ratio container (mobile-first) */}
            <div className="relative pt-[56.25%] sm:pt-[60%] md:pt-[56.25%]">
              {/* Skeleton loader */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
              )}
              
              <img
                src={image}
                alt={`Serviço de desentupimento: ${title}`}
                className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 will-change-transform ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                decoding="async"
                width="400"
                height="225"
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Gradiente sobreposto (mais sutil em mobile) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 sm:opacity-80" />
              
              {/* Badge responsivo */}
              <figcaption className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[9px] sm:text-[10px] md:text-xs font-extrabold px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded uppercase tracking-wider shadow-sm">
                  <span className="animate-pulse w-1.5 h-1.5 bg-white rounded-full hidden sm:inline-block" />
                  <span className="sm:hidden">⚡</span>
                  <span>{badgeText}</span>
                </span>
              </figcaption>
            </div>
          </figure>

          <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
            <header>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
            </header>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
              {description}
            </p>

            {/* CTA "Saiba Mais" - Mobile First */}
            <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between text-primary font-bold group-hover:text-primary/80 transition-colors">
              <span className="text-[11px] sm:text-xs md:text-sm tracking-wide uppercase font-extrabold">
                Saiba mais
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>

          {/* Indicador de clique (mobile) */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </article>
      </motion.a>
    </Link>
  );
};

// Memoização para evitar re-renders desnecessários
export default React.memo(ServiceCard);