import WhatsAppIcon from "./ui/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll suave para o CTA
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image com melhor performance mobile */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/hero-background-55Cmg5Y6Z87dK4wgmnzMev.webp')`,
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "65% center" : "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay otimizado para mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content - Mobile First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white space-y-4 sm:space-y-5 md:space-y-6 w-full"
            >
              {/* Badge - menor em mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-1.5 bg-primary/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase"
              >
                <span className="animate-pulse">⚡</span>
                <span className="hidden xs:inline">Atendimento Emergencial</span>
                <span className="xs:hidden">Emergência 24h</span>
                <span className="hidden sm:inline">24 Horas</span>
              </motion.div>

              {/* Título responsivo */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Desentupidora 24h com{" "}
                <span className="text-secondary inline-block relative">
                  Orçamento Grátis
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-secondary/50 rounded-full hidden sm:block" />
                </span>{" "}
                no Local
              </h1>

              {/* Subtítulo otimizado */}
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                {isMobile
                  ? "Equipe especializada em residências, empresas e condomínios. Sem taxa de visita e chegada rápida."
                  : "Atendemos residências, empresas, condomínios e comércios com equipe especializada, agilidade e total transparência. Sem taxa de visita e chegada rápida."}
              </p>

              {/* Features Grid - melhor espaçamento mobile */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-3">
                {[
                  { icon: "✓", text: "Sem taxa de visita no local" },
                  { icon: "✓", text: "Serviço garantido por contrato" },
                  { icon: "⚡", text: "Atendimento em até 40 minutos" },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-sm flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons - Mobile First (botões empilhados) */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <motion.a
                  href="https://wa.me/5511948202927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-12 sm:h-14 text-sm sm:text-base lg:text-lg shadow-lg shadow-success/20 transition-all duration-300 border-0"
                  >
                    <WhatsAppIcon size={isMobile ? 20 : 24} />
                    <span className="whitespace-nowrap">WhatsApp 24h</span>
                  </Button>
                </motion.a>

                <motion.a
                  href="tel:+5511948202927"
                  className="w-full xs:flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 h-12 sm:h-14 text-sm sm:text-base lg:text-lg font-bold text-white"
                  >
                    <span className="mr-2 text-base sm:text-xl">📞</span>
                    Ligar Agora
                  </Button>
                </motion.a>
              </div>

              {/* Selo de confiança - mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center xs:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
              >
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs sm:text-sm">★★★★★</span>
                  <span className="text-white/80 text-[10px] sm:text-xs">
                    (500+ avaliações)
                  </span>
                </div>
                <div className="w-px h-4 bg-white/30" />
                <div className="text-white/80 text-[10px] sm:text-xs flex items-center gap-1">
                  <span className="text-sm">🏆</span>
                  <span>Garantia por escrito</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image - Otimizada para mobile (escondida em mobile, aparece em tablet+) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Efeito de brilho */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-xl blur-xl -z-10" />
                
                {/* Badge flutuante */}
                <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold text-white border border-white/20">
                  <span className="animate-pulse mr-1">●</span>
                  Plantão 24h
                </div>

                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-hero-Z3GFRvVZtAxWczyfedAYGy.webp"
                  alt="Equipe PROTEC especializada em desentupimento 24 horas"
                  className="w-full h-auto rounded-xl object-cover"
                  width="600"
                  height="400"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Cards de informação flutuantes */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg shadow-xl p-3 hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <span className="text-success text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-card-foreground">Sem taxa extra</p>
                    <p className="text-[10px] text-muted-foreground">Orçamento gratuito</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll (mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden"
      >
        <div className="animate-bounce bg-white/20 backdrop-blur-sm rounded-full p-2">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}