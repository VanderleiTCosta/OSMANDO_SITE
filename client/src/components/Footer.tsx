import WhatsAppIcon from "./ui/WhatsAppIcon";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* CTA Section */}
      <div className="bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="container relative z-10 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Emergência? Atendimento 24h em São Paulo
          </h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            Não sofra com entupimentos. Solicite seu orçamento gratuito no local agora mesmo. 
            Chegamos rápido e resolvemos o problema com garantia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511948202927" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-success hover:bg-success/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-success/20 flex items-center justify-center gap-3 text-lg">
                <WhatsAppIcon size={24} /> Orçamento no WhatsApp
              </button>
            </a>
            <a href="tel:+5511948202927" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/30 flex items-center justify-center gap-3 text-lg">
                <Phone size={24} /> Ligar: (11) 94820-2927
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold leading-tight uppercase tracking-tighter">
              DESENTUPIDORA
              <br />
              <span className="text-secondary">PROTEC</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Referência em desentupimento em São Paulo. Atendimento emergencial
              24 horas com equipamentos modernos e técnicos especializados para
              garantir a sua tranquilidade.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <WhatsAppIcon size={20} />, href: "https://wa.me/5511948202927" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Social link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">NAVEGAÇÃO</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {[
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Soluções", href: "#solucoes" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-secondary transition-colors inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">CONTATO</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="tel:+5511948202927" className="hover:text-secondary transition-colors flex items-start gap-3">
                  <Phone size={18} className="text-secondary shrink-0" />
                  <span>(11) 94820-2927<br /><span className="text-[10px] text-white/40">Atendimento 24 horas</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@PROTEC.com.br" className="hover:text-secondary transition-colors flex items-center gap-3">
                  <Mail size={18} className="text-secondary shrink-0" />
                  <span>contato@PROTEC.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Atendimento em toda a Grande São Paulo e ABC</span>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">HORÁRIO</h4>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-secondary font-bold text-sm mb-1">Aberto 24 Horas</p>
                <p className="text-white/40 text-xs">Incluindo sábados, domingos e feriados.</p>
              </div>
              <p className="text-white/40 text-[11px] leading-tight">
                Técnicos distribuídos estrategicamente para garantir a chegada em até 40 minutos em diversas regiões de SP.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
          <p>© 2026 Desentupidora PROTEC. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

