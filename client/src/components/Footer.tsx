import WhatsAppIcon from "./ui/WhatsAppIcon";
import {
  Facebook,
  ArrowRight,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    navegacao: false,
    contato: false,
    horario: false,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSection = (section: string) => {
    if (isMobile) {
      setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    }
  };

  const navItems = [
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-transparent text-white border-t border-border">
      {/* CTA Section - Mobile First */}
      <div className="bg-card/40 backdrop-blur-md relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-2xl sm:blur-3xl -mr-16 sm:-mr-32 -mt-16 sm:-mt-32" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-2xl sm:blur-3xl -ml-16 sm:-ml-32 -mb-16 sm:-mb-32" />

        <div className="container relative z-10 px-4 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          {/* Badge de destaque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
              Atendimento Emergencial 24/7
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Emergência?{" "}
            <span className="text-success relative inline-block">
              Atendimento 24h
              <svg
                className="absolute -bottom-2 left-0 w-full h-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 L100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  className="text-success/50"
                />
              </svg>
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/80 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-2"
          >
            Não sofra com entupimentos. Solicite seu orçamento gratuito no local
            agora mesmo.
          </motion.p>

          {/* Cards de benefícios rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
          >
            {[
              { icon: "⚡", text: "Chegada Rápida" },
              { icon: "💰", text: "Orçamento Grátis" },
              { icon: "✓", text: "Garantia por Escrito" },
              { icon: "🔧", text: "Equipe Especializada" },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 bg-card/60 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border"
              >
                <span className="text-sm sm:text-base">{benefit.icon}</span>
                <span className="text-[10px] sm:text-xs font-medium text-white/80 uppercase tracking-wider">
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Botões CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-2"
          >
            {/* Botão WhatsApp - Principal */}
            <a
              href="https://wa.me/5511948202927"
              className="group w-full sm:w-auto transform transition-all duration-300 hover:scale-105"
            >
              <button className="relative overflow-hidden w-full px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white font-bold rounded-xl transition-all shadow-xl shadow-success/30 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg group-hover:shadow-2xl">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <WhatsAppIcon
                  size={isMobile ? 20 : 24}
                  className="relative z-10"
                />
                <span className="relative z-10 whitespace-nowrap">
                  Orçamento no WhatsApp
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </a>

            {/* Botão Telefone - Secundário */}
            <a
              href="tel:+5511948202927"
              className="group w-full sm:w-auto transform transition-all duration-300 hover:scale-105"
            >
              <button className="w-full px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-card/40 hover:bg-card/60 backdrop-blur-sm text-white font-bold rounded-xl transition-all border-2 border-border hover:border-primary/50 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg group-hover:shadow-xl">
                <Phone
                  size={isMobile ? 18 : 20}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="whitespace-nowrap">
                  Ligar Agora: (11) 94820-2927
                </span>
              </button>
            </a>
          </motion.div>

          {/* Selo de confiança */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/50 text-[10px] sm:text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Atendimento Imediato</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Preço Justo</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Profissionais Qualificados</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-12 sm:py-16 md:py-24">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand - sempre visível */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold leading-tight uppercase tracking-tighter">
              DESENTUPIDORA
              <br />
              <span className="text-primary">PROTEC</span>
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Referência em desentupimento em São Paulo. Atendimento emergencial
              24 horas com equipamentos modernos.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5511948202927"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Section - Accordion em mobile */}
          <div className="border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection("navegacao")}
              className="w-full flex items-center justify-between md:justify-start md:cursor-default"
            >
              <h4 className="font-bold text-base sm:text-lg md:mb-6">
                NAVEGAÇÃO
              </h4>
              {isMobile && (
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openSections.navegacao ? "rotate-180" : ""}`}
                />
              )}
            </button>
            <AnimatePresence>
              {(!isMobile || openSections.navegacao) && (
                <motion.ul
                  initial={isMobile ? { height: 0, opacity: 0 } : false}
                  animate={isMobile ? { height: "auto", opacity: 1 } : {}}
                  exit={isMobile ? { height: 0, opacity: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/60 overflow-hidden mt-3 md:mt-0"
                >
                  {navItems.map(item => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="hover:text-primary transition-colors inline-flex items-center gap-2 py-1 active:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Section */}
          <div className="border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            <button
              onClick={() => toggleSection("contato")}
              className="w-full flex items-center justify-between md:justify-start md:cursor-default"
            >
              <h4 className="font-bold text-base sm:text-lg md:mb-6">
                CONTATO
              </h4>
              {isMobile && (
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openSections.contato ? "rotate-180" : ""}`}
                />
              )}
            </button>
            <AnimatePresence>
              {(!isMobile || openSections.contato) && (
                <motion.ul
                  initial={isMobile ? { height: 0, opacity: 0 } : false}
                  animate={isMobile ? { height: "auto", opacity: 1 } : {}}
                  exit={isMobile ? { height: 0, opacity: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/60 overflow-hidden mt-3 md:mt-0"
                >
                  <li>
                    <a
                      href="tel:+5511948202927"
                      className="hover:text-primary transition-colors flex items-start gap-3 active:text-primary"
                    >
                      <Phone
                        size={16}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <div>
                        <span>(11) 94820-2927</span>
                        <br />
                        <span className="text-[9px] sm:text-[10px] text-white/40">
                          Atendimento 24 horas
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contato@PROTEC.com.br"
                      className="hover:text-primary transition-colors flex items-center gap-3 active:text-primary"
                    >
                      <Mail size={16} className="text-primary shrink-0" />
                      <span className="break-all">contato@PROTEC.com.br</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span>Atendimento em toda a Grande São Paulo e ABC</span>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Business Info Section */}
          <div>
            <button
              onClick={() => toggleSection("horario")}
              className="w-full flex items-center justify-between md:justify-start md:cursor-default"
            >
              <h4 className="font-bold text-base sm:text-lg md:mb-6">
                HORÁRIO
              </h4>
              {isMobile && (
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openSections.horario ? "rotate-180" : ""}`}
                />
              )}
            </button>
            <AnimatePresence>
              {(!isMobile || openSections.horario) && (
                <motion.div
                  initial={isMobile ? { height: 0, opacity: 0 } : false}
                  animate={isMobile ? { height: "auto", opacity: 1 } : {}}
                  exit={isMobile ? { height: 0, opacity: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 sm:space-y-4 overflow-hidden mt-3 md:mt-0"
                >
                  <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
                    <p className="text-primary font-bold text-xs sm:text-sm mb-1">
                      Aberto 24 Horas
                    </p>
                    <p className="text-white/40 text-[10px] sm:text-xs">
                      Incluindo sábados, domingos e feriados.
                    </p>
                  </div>
                  <p className="text-white/40 text-[9px] sm:text-[10px] md:text-[11px] leading-tight">
                    Técnicos distribuídos estrategicamente para garantir a
                    chegada em até 40 minutos.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom - Mobile First */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-white/40 font-medium">
          <p>© 2026 Desentupidora PROTEC. Todos os direitos reservados.</p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="hover:text-white transition active:text-white"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="hover:text-white transition active:text-white"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
