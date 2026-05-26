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
  CheckCircle,
  DollarSign,
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
      description:
        "Todos os serviços contam com garantia formalizada em contrato.",
    },
    {
      icon: <Clock size={isMobile ? 22 : 28} />,
      title: "Chegada em 40 Minutos",
      description:
        "Bases móveis estrategicamente posicionadas para rapidez imediata.",
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
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/hero-background-55Cmg5Y6Z87dK4wgmnzMev.webp')",
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
                    <span className="hidden xs:inline">
                      Atendimento Emergencial
                    </span>
                    <span className="xs:hidden">Emergência 24h</span>
                  </motion.div>

                  {/* Título */}
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Serviço Especializado de{" "}
                    <span className="text-primary relative inline-block">
                      {solucaoData.titulo}
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-1 sm:h-2"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 5 L100 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="text-primary/50"
                        />
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
                      href="https://wa.me/5511937724242?text=Preciso%20de%20atendimento%20urgente"
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
                    <a href="tel:+5511937724242" className="w-full xs:w-auto">
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
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                          {feature}
                        </span>
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
              <motion.div
                {...fadeIn}
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
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
          <section
            id="como-funciona"
            className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-card/40 backdrop-blur-sm border-y border-border text-white overflow-hidden"
          >
            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container relative z-10 px-4 sm:px-6">
              {/* Cabeçalho com linha decorativa */}
              <motion.div
                {...fadeIn}
                className="text-center mb-12 sm:mb-16 md:mb-20"
              >
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
                    Metodologia Exclusiva
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Atendimento em{" "}
                  <span className="text-primary relative inline-block">
                    4 Passos
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
                        className="text-primary/50"
                      />
                    </svg>
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Simplicidade, transparência e agilidade do primeiro contato à
                  solução final
                </p>
              </motion.div>

              {/* Timeline / Passos */}
              <div className="relative">
                {/* Linha de conexão desktop */}
                <div className="absolute hidden lg:block top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    {
                      step: "01",
                      icon: <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7" />,
                      title: "Solicitação",
                      desc: "Contato via WhatsApp ou telefone para análise inicial da emergência",
                      color: "from-blue-500/20 to-blue-600/20",
                    },
                    {
                      step: "02",
                      icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />,
                      title: "Deslocamento",
                      desc: "Técnico mais próximo é acionado e chega ao local em até 40 minutos",
                      color: "from-green-500/20 to-green-600/20",
                    },
                    {
                      step: "03",
                      icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />,
                      title: "Diagnóstico",
                      desc: "Avaliação técnica gratuita com orçamento transparente e sem surpresas",
                      color: "from-yellow-500/20 to-yellow-600/20",
                    },
                    {
                      step: "04",
                      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />,
                      title: "Solução Garantida",
                      desc: "Execução profissional com equipamentos modernos e garantia por escrito",
                      color: "from-purple-500/20 to-purple-600/20",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: idx * 0.15,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="group relative"
                    >
                      {/* Card com efeito glassmorphism */}
                      <div className="relative h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                        {/* Número do passo flutuante */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                          <span className="text-white font-black text-sm sm:text-base">
                            {item.step}
                          </span>
                        </div>

                        {/* Ícone */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{item.icon}</div>
                        </div>

                        {/* Título */}
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">
                          {item.title}
                        </h3>

                        {/* Descrição */}
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Linha de progresso animada */}
                        <div className="mt-5 h-1 w-12 bg-secondary/50 rounded-full group-hover:w-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Estatísticas de confiança */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 sm:mt-20 pt-8 border-t border-white/10"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  {[
                    {
                      value: "5.000+",
                      label: "Serviços Realizados",
                      icon: "✓",
                    },
                    {
                      value: "40min",
                      label: "Tempo Médio de Chegada",
                      icon: "⚡",
                    },
                    {
                      value: "24/7",
                      label: "Disponibilidade Total",
                      icon: "🕒",
                    },
                    { value: "100%", label: "Clientes Satisfeitos", icon: "★" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="space-y-2"
                    >
                      <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12 sm:mt-16"
              >
                <a href="https://wa.me/5511937724242">
                  <Button className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 font-bold h-12 sm:h-14 px-8 sm:px-12 text-base sm:text-lg shadow-2xl transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <WhatsAppIcon size={isMobile ? 20 : 24} className="mr-2" />
                    <span className="relative z-10">Começar pelo WhatsApp</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <p className="text-white/50 text-xs sm:text-sm mt-4">
                  *Orçamento gratuito sem compromisso
                </p>
              </motion.div>
            </div>
          </section>

          {/* Seção de Diferenciais Adicionais */}
          <section
            id="quem-somos"
            className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-card/20 backdrop-blur-sm border-y border-border overflow-hidden"
          >
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            {/* Padrão decorativo simples - sem erros de sintaxe */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1e293b 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="container relative z-10 px-4 sm:px-6">
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image com efeito moderno */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Moldura decorativa */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary/20 rounded-2xl -z-10" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />

                  {/* Badge flutuante */}
                  <div className="absolute -top-4 -right-4 z-10 bg-card border border-border rounded-xl shadow-xl p-3 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                        <span className="text-success text-sm">✓</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-card-foreground">
                          Certificada
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          ISO 9001
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Imagem principal */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-hero-Z3GFRvVZtAxWczyfedAYGy.webp"
                      alt="Equipe técnica especializada da PROTEC"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width="600"
                      height="500"
                    />

                    {/* Card de experiência sobreposto */}
                    <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl z-20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl sm:text-4xl font-black text-primary">
                            +10
                          </p>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Anos de mercado
                          </p>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div>
                          <p className="text-3xl sm:text-4xl font-black text-primary">
                            +5k
                          </p>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Clientes atendidos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Selo de qualidade */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Líder em São Paulo
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-card-foreground leading-tight">
                    Excelência em{" "}
                    <span className="relative inline-block">
                      <span className="text-primary relative z-10">
                        Desentupimento 24h
                      </span>
                      <svg
                        className="absolute bottom-2 left-0 w-full h-3 -z-0"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 5 L100 5"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          className="text-primary/20"
                        />
                      </svg>
                    </span>
                  </h2>

                  {/* Diferenciais em bullets */}
                  <div className="space-y-4">
                    {[
                      "Equipe técnica altamente capacitada e certificada",
                      "Equipamentos de última geração e tecnologia avançada",
                      "Atendimento humanizado com transparência total",
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-success" />
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    A{" "}
                    <span className="font-bold text-card-foreground">
                      PROTEC
                    </span>{" "}
                    se consolidou como referência no setor de desentupimento em
                    São Paulo, atendendo com excelência residências, comércios,
                    condomínios e indústrias. Nossa missão é oferecer soluções
                    rápidas, eficientes e com total transparência.
                  </p>

                  {/* Bloco de citação */}
                  <div className="bg-card rounded-2xl p-5 sm:p-6 border-l-4 border-primary border-t border-r border-b-primary/20">
                    <p className="text-muted-foreground italic text-sm sm:text-base">
                      "Compromisso com a qualidade e satisfação total do
                      cliente. Trabalhamos com garantia por escrito em todos os
                      serviços."
                    </p>
                    <p className="text-xs font-bold text-primary mt-3 uppercase tracking-wider">
                      — Equipe PROTEC
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <a
                      href="https://wa.me/5511937724242"
                      className="group w-full sm:w-auto"
                    >
                      <Button className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                        <WhatsAppIcon
                          size={isMobile ? 18 : 20}
                          className="mr-2"
                        />
                        Orçamento Grátis
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                    <a href="tel:+5511937724242" className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 transition-all duration-300"
                      >
                        <PhoneCall size={isMobile ? 16 : 18} className="mr-2" />
                        Ligar Agora: 0800 591 9537
                      </Button>
                    </a>
                  </div>

                  {/* Selos de segurança */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {[
                      { icon: "🔒", text: "Dados Protegidos" },
                      { icon: "📋", text: "Garantia por Escrito" },
                      { icon: "🏆", text: "Melhor Avaliado" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
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
