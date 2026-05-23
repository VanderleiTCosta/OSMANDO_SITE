// SolucaoPage.tsx - Mobile First
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  MapPin,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Zap,
  Award,
  Users,
  ThumbsUp,
  Wrench,
  Truck,
  BadgeCheck,
  Calendar,
  Star,
  Headphones,
  Home,
  ChevronRight,
} from "lucide-react";
import Footer from "../components/Footer";
import AreasAtendidasModal from "../components/AreasAtendidasModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, margin: "-50px" },
};

const SolucaoPage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const solucaoSlug = params?.slug || "servico";
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  const solucaoData = useMemo(() => {
    const nome = solucaoSlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return {
      titulo: nome,
      descricao: `Atendimento emergencial 24h de ${nome} com técnicos especialistas. Garantia em contrato, visita gratuita e o melhor preço da região.`,
    };
  }, [solucaoSlug]);

  const benefits = [
    {
      icon: <ShieldCheck size={isMobile ? 22 : 28} />,
      title: "Garantia por Escrito",
      description: "Todos os serviços contam com garantia formalizada em contrato.",
    },
    {
      icon: <Clock size={isMobile ? 22 : 28} />,
      title: "Chegada em 40 Minutos",
      description: "Bases móveis estrategicamente posicionadas para rapidez imediata.",
    },
    {
      icon: <BadgeCheck size={isMobile ? 22 : 28} />,
      title: "Visita Técnica Gratuita",
      description: "Avaliamos o problema sem cobrar taxa de visita.",
    },
    {
      icon: <Wrench size={isMobile ? 22 : 28} />,
      title: "Equipamentos Modernos",
      description: "Tecnologia de ponta para soluções sem quebra-quebra.",
    },
    {
      icon: <Users size={isMobile ? 22 : 28} />,
      title: "Equipe Qualificada",
      description: "Profissionais treinados para qualquer emergência.",
    },
    {
      icon: <ThumbsUp size={isMobile ? 22 : 28} />,
      title: "Satisfação Garantida",
      description: "Compromisso com a excelência e resolução definitiva.",
    },
  ];

  const steps = [
    {
      icon: <Headphones size={isMobile ? 22 : 28} />,
      title: "Você nos chama",
      description: "Contato via WhatsApp ou telefone.",
    },
    {
      icon: <Truck size={isMobile ? 22 : 28} />,
      title: "Chegada Rápida",
      description: "Técnico mais próximo é acionado.",
    },
    {
      icon: <Award size={isMobile ? 22 : 28} />,
      title: "Orçamento Grátis",
      description: "Avaliação técnica e preço justo.",
    },
    {
      icon: <CheckCircle2 size={isMobile ? 22 : 28} />,
      title: "Solução Total",
      description: "Execução profissional e garantia.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`${solucaoData.titulo} Profissional 24h | Visita Técnica Grátis - PROTEC`}</title>
        <meta name="description" content={solucaoData.descricao} />
      </Helmet>

      <div className="min-h-screen selection:bg-secondary/30 flex flex-col overflow-x-hidden">
        <main className="flex-grow">
          {/* Hero Section - Mobile First */}
          <section
            className="relative min-h-[80vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/hero-background-55Cmg5Y6Z87dK4wgmnzMev.webp')",
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "65% center" : "center",
            }}
          >
            {/* Overlay otimizado */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />

            {/* Botões flutuantes - Mobile First */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-20 flex flex-wrap justify-between items-center gap-3">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 text-xs sm:text-sm py-1.5 sm:py-2"
                >
                  <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Voltar</span>
                </Button>
              </Link>

              <Button
                onClick={handleOpenModal}
                variant="outline"
                size="sm"
                className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 text-xs sm:text-sm py-1.5 sm:py-2"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Escolher Bairro</span>
                <span className="xs:hidden">Bairro</span>
              </Button>
            </div>

            {/* Content - Mobile First */}
            <div className="container relative z-10 px-4 py-12 sm:py-16 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white space-y-4 sm:space-y-6"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block bg-primary/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase"
                  >
                    <span className="animate-pulse inline-block mr-1">⚡</span>
                    <span className="hidden xs:inline">Atendimento Emergencial</span>
                    <span className="xs:hidden">Emergência 24h</span>
                  </motion.div>

                  {/* Título */}
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Serviço Especializado de{" "}
                    <span className="text-secondary relative inline-block">
                      {solucaoData.titulo}
                      <svg className="absolute -bottom-2 left-0 w-full h-1 sm:h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 L100 5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-secondary/50" />
                      </svg>
                    </span>
                  </h1>

                  {/* Descrição */}
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto px-2">
                    {isMobile
                      ? `${solucaoData.titulo} com equipe especializada e garantia em contrato.`
                      : solucaoData.descricao}
                  </p>

                  {/* Botões CTA - Empilhados em mobile */}
                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                    <a
                      href="https://wa.me/5511948202927?text=Preciso%20de%20atendimento%20urgente"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full xs:w-auto"
                    >
                      <Button className="w-full bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-11 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg shadow-lg shadow-success/20 hover:scale-105 transition-transform duration-300">
                        <WhatsAppIcon size={isMobile ? 18 : 20} />
                        <span className="whitespace-nowrap">WhatsApp 24h</span>
                      </Button>
                    </a>
                    <Button
                      onClick={handleOpenModal}
                      className="w-full xs:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold flex items-center justify-center gap-2 h-11 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300"
                    >
                      <MapPin size={isMobile ? 16 : 18} />
                      <span className="whitespace-nowrap">Ver Bairros</span>
                    </Button>
                    <a href="tel:+5511948202927" className="w-full xs:w-auto">
                      <Button
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-primary font-bold flex items-center justify-center gap-2 h-11 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg transition-all duration-300"
                      >
                        <span>📞</span>
                        <span className="whitespace-nowrap">Ligar Agora</span>
                      </Button>
                    </a>
                  </div>

                  {/* Features - Chips responsivos */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 sm:pt-8">
                    {[
                      "Sem taxa de visita",
                      "Garantia por contrato",
                      "Chegada em 40min",
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-secondary flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white">
                          ✓
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefícios Grid - Mobile First */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/5">
            <div className="container px-4 sm:px-6">
              <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  Por que escolher a{" "}
                  <span className="text-primary underline decoration-secondary decoration-4 underline-offset-4 sm:underline-offset-8">
                    PROTEC
                  </span>
                  ?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                  Experiência, agilidade e transparência em cada atendimento.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              >
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="group bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Como Funciona Section - Mobile First */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-primary text-white">
            <div className="container px-4 sm:px-6">
              <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  Atendimento em 4 Passos
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-2">
                  Simplicidade e transparência do início ao fim.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="text-center group relative z-10 p-4 sm:p-5 md:p-6 bg-white/10 rounded-xl border border-white/10 shadow-lg backdrop-blur-sm"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-secondary text-white flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mt-8 sm:mt-12 md:mt-16"
              >
                <a href="https://wa.me/5511948202927?text=Preciso%20de%20atendimento%20urgente">
                  <Button className="bg-success hover:bg-success/90 text-white font-bold flex items-center gap-2 h-11 sm:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg shadow-xl shadow-black/20 mx-auto">
                    <WhatsAppIcon size={isMobile ? 18 : 24} />
                    Solicitar Atendimento Agora
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Seção de Diferenciais Adicionais */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
            <div className="container px-4 sm:px-6 max-w-5xl">
              <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold mb-4 sm:mb-6">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Referência em São Paulo</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Compromisso com a Excelência
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
                  Somos especialistas em {solucaoData.titulo.toLowerCase()} com
                  mais de 10 anos de experiência no mercado.
                </p>
              </motion.div>

              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-12">
                <motion.div {...fadeIn} className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4">
                    Nossos Compromissos
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Atendimento 24 horas por dia, 7 dias por semana",
                      "Profissionais treinados e uniformizados",
                      "Equipamentos modernos e certificados",
                      "Orçamento sem compromisso e sem custo",
                      "Garantia por escrito em todos os serviços",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div {...fadeIn} className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4">
                    Por que nos escolhem
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Maior índice de satisfação do mercado",
                      "Resolução definitiva do problema",
                      "Tecnologia que evita quebra-quebra",
                      "Transparência total no orçamento",
                      "Atendimento personalizado e humanizado",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                {...fadeIn}
                className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100"
              >
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <a href="https://wa.me/5511948202927" className="w-full sm:w-auto">
                    <Button className="w-full bg-success hover:bg-success/90 text-white font-bold h-11 sm:h-12 px-6">
                      <WhatsAppIcon size={isMobile ? 16 : 18} />
                      Solicitar Orçamento Grátis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <Link href="/" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white h-11 sm:h-12 px-6"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Voltar para Home
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <AreasAtendidasModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        solucaoSlug={solucaoSlug}
      />
    </>
  );
};

export default React.memo(SolucaoPage);