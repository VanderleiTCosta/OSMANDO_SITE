import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DifferentialCard from "@/components/DifferentialCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Zap,
  DollarSign,
  Shield,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  PhoneCall,
  MapPin,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function Home() {
  const differentials = [
    {
      icon: "⏰",
      title: "Atendimento 24h",
      description: "Estamos disponíveis todos os dias, inclusive feriados e madrugadas.",
    },
    {
      icon: "⚡",
      title: "Resposta Rápida",
      description: "Equipe a caminho em até 40 minutos após a sua chamada.",
    },
    {
      icon: "💰",
      title: "Orçamento Grátis",
      description: "Avaliação técnica no local sem nenhum custo ou compromisso.",
    },
    {
      icon: "✓",
      title: "Serviço Garantido",
      description: "Garantia por escrito em todos os serviços executados pela equipe.",
    },
    {
      icon: "👨‍🔧",
      title: "Equipe Especializada",
      description: "Profissionais treinados e equipamentos de última geração.",
    },
    {
      icon: "🛡️",
      title: "Segurança Total",
      description: "Empresa regulamentada e seguindo todas as normas de segurança.",
    },
  ];

  const services = [
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-pia.jpg",
      title: "Desentupimento de Pia",
      description: "Pias de cozinha, banheiro e área de serviço com rapidez e limpeza.",
      whatsappText:
        "Olá! Quero solicitar orçamento para: Desentupimento de Pia.",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-vaso.jpg",
      title: "Vaso Sanitário",
      description: "Atendimento emergencial para entupimentos e retorno de água.",
      whatsappText: "Olá! Quero solicitar orçamento para: Vaso Sanitário.",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-ralo.jpg",
      title: "Ralos e Box",
      description: "Banheiros, áreas externas, lavanderias, garagens e ralos de chuva.",
      whatsappText: "Olá! Quero solicitar orçamento para: Ralos e Box.",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-esgoto.jpg",
      title: "Esgoto e Tubulação",
      description: "Rede de esgoto, colunas de prédios, tubulações e mau cheiro.",
      whatsappText: "Olá! Quero solicitar orçamento para: Esgoto e Tubulação.",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-fossa.jpg",
      title: "Caixa de Gordura e Fossa",
      description: "Limpeza completa, higienização e prevenção de novos problemas.",
      whatsappText:
        "Olá! Quero solicitar orçamento para: Caixa de Gordura e Fossa.",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-hidrojato.jpg",
      title: "Hidrojateamento",
      description: "Alta pressão para limpeza de tubulações e demandas industriais.",
      whatsappText: "Olá! Quero solicitar orçamento para: Hidrojateamento.",
    },
  ];

  const testimonials = [
    {
      initial: "C",
      name: "Carla M.",
      location: "Residencial - Pinheiros",
      text: "Atendimento super rápido, técnico chegou em 30 minutos e resolveu o entupimento da pia. Recomendo!",
    },
    {
      initial: "R",
      name: "Roberto S.",
      location: "Residencial - Tatuapé",
      text: "Profissional educado, explicou tudo antes e deixou o banheiro impecável. Preço justo.",
    },
    {
      initial: "M",
      name: "Marina L.",
      location: "Comercial - Vila Madalena",
      text: "Trabalho excelente no nosso restaurante. Caixa de gordura limpa e sem mau cheiro!",
    },
    {
      initial: "E",
      name: "Eduardo P.",
      location: "Condomínio - Moema",
      text: "Síndico aqui. Já chamamos várias vezes e nunca decepcionaram. Atendimento sério e pontual.",
    },
    {
      initial: "J",
      name: "Juliana R.",
      location: "Residencial - Santana",
      text: "Fui atendida de madrugada com a mesma qualidade do horário comercial. Salvaram a noite!",
    },
    {
      initial: "F",
      name: "Fernando A.",
      location: "Comercial - Itaim Bibi",
      text: "Orçamento grátis e honesto. Resolveram um problema que outras empresas não conseguiram.",
    },
  ];

  const faqs = [
    {
      question: "Vocês realmente atendem 24 horas?",
      answer:
        "Sim. Atendemos 24 horas por dia, 7 dias por semana, inclusive feriados e madrugadas. Nossa central está sempre pronta para seu chamado.",
    },
    {
      question: "O orçamento é mesmo grátis?",
      answer:
        "Sim, o orçamento é completamente grátis. Enviamos um técnico para avaliar o problema no local, sem nenhum custo ou compromisso para você.",
    },
    {
      question: "Quanto tempo demora para o técnico chegar?",
      answer:
        "Nosso tempo médio de chegada é de 30 a 60 minutos em São Paulo e região metropolitana, dependendo do trânsito e localização exata.",
    },
    {
      question: "Vocês cobram taxa de visita?",
      answer:
        "Não. Não cobramos taxa de visita. Você só paga pelo serviço executado, após aprovar o orçamento passado pelo técnico no local.",
    },
    {
      question: "Atendem condomínios, empresas e restaurantes?",
      answer:
        "Sim, atendemos residências, condomínios, empresas, restaurantes, escolas e qualquer tipo de estabelecimento comercial ou industrial.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos dinheiro, cartões de crédito e débito (todas as bandeiras), transferência bancária e PIX. Parcelamos no cartão de crédito.",
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30">
      <Header />
      <HeroSection />

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Por que escolher a <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">PROTEC</span>?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Experiência, agilidade e transparência em cada atendimento. Somos referência em desentupimento em São Paulo.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {differentials.map((diff, idx) => (
              <DifferentialCard key={idx} {...diff} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soluções Section */}
      <section id="solucoes" className="py-20 md:py-32">
        <div className="container">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Soluções Especializadas
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipamentos de ponta para resolver qualquer tipo de entupimento com rapidez e sem quebra-quebra desnecessário.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 md:py-32 bg-primary text-white">
        <div className="container">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Atendimento em 4 Passos
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Simplicidade e transparência do início ao fim do serviço.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Horizontal Connector Line for Desktop */}
            <div className="absolute hidden lg:block h-[2px] bg-white/20 left-[12%] right-[12%] top-[calc(5rem_-_0.75rem)]" />

            {[
              {
                icon: <PhoneCall size={32} />,
                title: "Você nos chama",
                desc: "Contato via WhatsApp ou telefone explicando a emergência.",
              },
              {
                icon: <MapPin size={32} />,
                title: "Chegada Rápida",
                desc: "Técnico mais próximo é acionado e chega em minutos.",
              },
              {
                icon: <DollarSign size={32} />,
                title: "Orçamento Grátis",
                desc: "Avaliação técnica e preço justo passado antes de começar.",
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Solução Total",
                desc: "Execução profissional, limpeza do local e garantia.",
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-center group relative z-10 p-6 bg-primary-darker rounded-xl border border-white/10 shadow-lg"
              >
                <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ease-out">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a href="https://wa.me/5511948202927">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-14 text-lg shadow-lg shadow-success/20 hover:bg-white hover:text-primary transition-all duration-300"
              >
                <WhatsAppIcon size={24} /> Começar pelo WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full -z-10 blur-2xl opacity-20" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/quem-somos.jpg"
                alt="Equipe técnica PROTEC"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
                width="600"
                height="450"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block p-8 bg-primary text-white rounded-2xl shadow-2xl text-center border-4 border-white">
                <p className="text-6xl font-bold mb-1 tracking-tighter">+10</p>
                <p className="text-sm font-bold uppercase tracking-widest text-white/70">Anos de experiência</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Sobre a Empresa
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Excelência em <span className="text-primary">Desentupimento</span> 24h
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                A Desentupidora <span className="font-bold text-foreground">PROTEC</span> é especializada em soluções rápidas e definitivas para residências, comércios, condomínios e indústrias em toda São Paulo.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                Nossa missão é eliminar seu transtorno com agilidade, transparência total no orçamento e garantia real do serviço executado.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "5k+", label: "Serviços" },
                  { value: "24h", label: "Disponível" },
                  { value: "SP", label: "Atendimento" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-muted/50 rounded-xl border border-border/50">
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5511948202927" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary bg-success hover:bg-success/90 text-primary font-bold flex items-center justify-center gap-2 h-14 text-lg shadow-lg shadow-success/20 hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <WhatsAppIcon size={20} /> Orçamento Grátis
                  </Button>
                </a>
                <a href="tel:+5511948202927" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white h-14 px-8 font-bold"
                  >
                    <PhoneCall size={20} className="mr-2" /> Ligar Agora
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Satisfação Garantida
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Veja o que nossos clientes dizem sobre o nosso trabalho em toda São Paulo.
            </p>
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-secondary">★</span>
              ))}
              <span className="ml-3 text-xl font-black text-foreground">4.9/5.0</span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              As principais perguntas dos nossos clientes. Caso precise de mais informações, estamos no WhatsApp.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-xl px-6 bg-white overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-bold hover:text-primary py-6 transition-all hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="font-bold text-foreground mb-4">Não encontrou sua dúvida?</p>
            <a href="https://wa.me/5511948202927">
              <Button variant="link" className="text-primary font-bold text-lg h-auto p-0">
                Falar com um técnico no WhatsApp <ArrowRight size={20} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

