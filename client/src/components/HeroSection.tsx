import WhatsAppIcon from "./ui/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/hero-background-55Cmg5Y6Z87dK4wgmnzMev.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay - Gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-black/40" />

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-primary/20 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase"
            >
              ⚡ Atendimento Emergencial 24 Horas
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Desentupidora 24h com{" "}
              <span className="text-secondary">Orçamento Grátis</span> no Local
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-lg">
              Atendemos residências, empresas, condomínios e comércios com
              equipe especializada, agilidade e total transparência. Sem taxa de
              visita e chegada rápida.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-3 pt-2">
              {[
                "Sem taxa de visita no local",
                "Serviço garantido por contrato",
                "Atendimento em até 40 minutos",
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-white">
                    ✓
                  </div>
                  <span className="text-sm md:text-base font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/5511948202927" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-14 text-lg shadow-lg shadow-success/20"
                >
                  <WhatsAppIcon size={24} /> WhatsApp 24h
                </Button>
              </a>
              <a href="tel:+5511948202927" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary transition-all duration-300 h-14 text-lg"
                >
                  📞 Ligar Agora
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="absolute -inset-4 bg-secondary/20 rounded-lg blur-2xl -z-10" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-hero-Z3GFRvVZtAxWczyfedAYGy.webp"
              alt="Equipe PROTEC de plantão"
              className="w-full h-auto rounded-lg shadow-2xl border-4 border-white/10"
              width="600"
              height="400"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

