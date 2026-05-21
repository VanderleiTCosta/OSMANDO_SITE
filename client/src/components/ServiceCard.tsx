import React, { useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  whatsappText?: string; 
  slug?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  slug,
}) => {
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

  return (
    <Link href={`/solucoes/${urlSlug}`}>
      {/* O elemento <a> engloba tudo, garantindo 100% de área clicável. A tag é válida no HTML5 para elementos em bloco. */}
      <a 
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl rounded-b-xl"
        aria-label={`Ver detalhes sobre a solução de ${title}`}
      >
        <article 
          className="group overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col h-full"
        >
          {/* Imagem com Lazy Loading Nativo, Aspect Ratio e aceleração de GPU (will-change-transform) */}
          <figure className="relative h-56 overflow-hidden bg-gray-100 m-0">
            <img
              src={image}
              alt={`Detalhes do serviço de ${title}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 will-change-transform"
              loading="lazy"
              width="400"
              height="224"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            <figcaption className="absolute bottom-4 left-4">
              <span className="bg-primary text-white text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
                Plantão 24h
              </span>
            </figcaption>
          </figure>

          <div className="p-6 flex flex-col flex-grow">
            <header>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>
            </header>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
              {description}
            </p>

            {/* CTA "Saiba Mais" Limpo e Animado */}
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-primary font-bold group-hover:text-primary-dark transition-colors">
              <span className="text-sm tracking-wide uppercase">Saiba mais</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default React.memo(ServiceCard);