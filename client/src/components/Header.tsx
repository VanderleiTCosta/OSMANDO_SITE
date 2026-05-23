import WhatsAppIcon from "./ui/WhatsAppIcon";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Detecta scroll para efeito visual
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-card/80 backdrop-blur-sm border-b border-border shadow-sm"
      }`}
    >
      {/* Top Bar - Urgency/Contact (mobile-first) */}
      <div className="bg-primary text-white py-2 px-3 text-center text-[11px] font-bold uppercase tracking-wider md:text-xs md:tracking-widest">
        <span className="inline-block md:hidden">
          🚨 Emergência 24h —{" "}
          <a href="tel:+5511948202927" className="underline font-extrabold">
            Ligar
          </a>
        </span>
        <span className="hidden md:inline-block">
          Atendimento Emergencial 24h — São Paulo e Região —{" "}
          <a href="tel:+5511948202927" className="underline hover:no-underline">
            Ligue Agora
          </a>
        </span>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3 md:py-4 lg:container lg:mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 shrink-0"
          aria-label="Página inicial"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/PROTEC-logo-Az8t4KFvrryvP5Cxu8BnLD.png"
            alt="PROTEC - Segurança Eletrônica"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
            width="120"
            height="32"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation (lg+) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-tight relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA (md+) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <a href="tel:+5511948202927" className="block">
            <Button
              variant="outline"
              size="sm"
              className="font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Phone size={16} className="mr-2" />
              <span className="hidden lg:inline">(11) 94820-2927</span>
              <span className="lg:hidden">Ligar</span>
            </Button>
          </a>
          <a href="https://wa.me/5511948202927" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="font-bold border-primary text-primary hover:bg-primary hover:text-white group transition-all duration-300"
            >
              <WhatsAppIcon
                size={18}
                color="#004080"
                className="group-hover:!text-white transition-colors"
              />
              <span className="ml-2 hidden sm:inline">WhatsApp</span>
            </Button>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href="tel:+5511948202927"
            className="p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
            aria-label="Telefone"
          >
            <Phone size={22} />
          </a>
          <button
            className="p-2 text-primary active:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-card border-t border-border shadow-lg overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-0 max-h-[calc(100vh-120px)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base font-semibold text-foreground hover:text-primary py-3 border-b border-muted last:border-0 active:bg-primary/5 px-2 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="flex flex-col gap-3 pt-6 mt-2 border-t border-muted">
                <a href="tel:+5511948202927" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-11 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Phone size={18} className="mr-2" />
                    Ligar: (11) 94820-2927
                  </Button>
                </a>
                <a
                  href="https://wa.me/5511948202927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full h-11 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <WhatsAppIcon size={18} />
                    <span className="ml-2">Chamar no WhatsApp</span>
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}