import WhatsAppIcon from "./ui/WhatsAppIcon";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Bar - Urgency/Contact */}
      <div className="bg-primary text-white py-2 px-4 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest">
        Atendimento Emergencial 24h — São Paulo e Região — <a href="tel:+5511948202927" className="underline">Ligue Agora</a>
      </div>

      {/* Main Header */}
      <div className="container py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/PROTEC-logo-Az8t4KFvrryvP5Cxu8BnLD.png"
            alt="PROTEC"
            className="h-10 md:h-14"
            width="150"
            height="56"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-foreground hover:text-primary transition-colors uppercase tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+5511948202927">
            <Button variant="outline" size="sm" className="font-bold border-primary text-primary hover:bg-primary hover:text-white">
              <Phone size={16} className="mr-2" /> (11) 94820-2927
            </Button>
          </a>
          <a href="https://wa.me/5511948202927">
            <Button
              size="sm"
              className="bg-success hover:bg-success/90 text-white font-bold flex items-center gap-2 shadow-sm"
            >
              <WhatsAppIcon size={18} /> WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a href="tel:+5511948202927" className="p-2 text-primary">
            <Phone size={24} />
          </a>
          <button
            className="p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-white overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-bold text-foreground hover:text-primary py-2 border-b border-muted last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a href="tel:+5511948202927">
                  <Button variant="outline" className="w-full h-12 font-bold border-primary text-primary">
                    <Phone size={18} className="mr-2" /> Ligar: (11) 94820-2927
                  </Button>
                </a>
                <a href="https://wa.me/5511948202927">
                  <Button className="w-full h-12 bg-success hover:bg-success/90 font-bold flex items-center justify-center gap-2">
                    <WhatsAppIcon size={20} /> Chamar no WhatsApp
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

