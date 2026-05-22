// SolucaoPage.tsx
import React, { useState, useCallback, useMemo } from "react";
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
} from "lucide-react";
import Footer from "../components/Footer";
import AreasAtendidasModal from "../components/AreasAtendidasModal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const SolucaoPage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const solucaoSlug = params?.slug || "servico";

  const [isModalOpen, setIsModalOpen] = useState(false);

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
      icon: <ShieldCheck size={28} />,
      title: "Garantia por Escrito",
      description:
        "Sua segurança em primeiro lugar. Todos os nossos serviços contam com garantia formalizada em contrato.",
    },
    {
      icon: <Clock size={28} />,
      title: "Chegada em 40 Minutos",
      description:
        "Temos bases móveis estrategicamente posicionadas para garantir rapidez imediata.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Visita Técnica Gratuita",
      description:
        "Avaliamos o problema detalhadamente sem cobrar taxa de visita ou deslocamento.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Equipamentos Modernos",
      description:
        "Utilizamos tecnologia de ponta para soluções precisas e sem quebra-quebra.",
    },
    {
      icon: <Users size={28} />,
      title: "Equipe Qualificada",
      description:
        "Profissionais treinados e capacitados para atender qualquer emergência.",
    },
    {
      icon: <ThumbsUp size={28} />,
      title: "Satisfação Garantida",
      description:
        "Compromisso com a excelência e resolução definitiva do problema.",
    },
  ];

  const steps = [
    {
      icon: <Headphones size={28} />,
      title: "Você nos chama",
      description: "Contato via WhatsApp ou telefone explicando a emergência.",
    },
    {
      icon: <Truck size={28} />,
      title: "Chegada Rápida",
      description: "Técnico mais próximo é acionado e chega em minutos.",
    },
    {
      icon: <Award size={28} />,
      title: "Orçamento Grátis",
      description: "Avaliação técnica e preço justo passado antes de começar.",
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Solução Total",
      description: "Execução profissional, limpeza do local e garantia.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`${solucaoData.titulo} Profissional 24h | Visita Técnica Grátis - PROTEC`}</title>
        <meta name="description" content={solucaoData.descricao} />
      </Helmet>

      <div className="min-h-screen bg-white selection:bg-secondary/30 flex flex-col">
        <main className="flex-grow">
          {/* Hero Section - Mesmo estilo da Home */}
          <section
            className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/hero-background-55Cmg5Y6Z87dK4wgmnzMev.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay - Gradient igual da home */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-black/40" />

            {/* Botão Voltar para Home e Mudar Bairro */}
            <div className="absolute top-6 left-6 right-6 z-20 flex flex-wrap justify-between items-center gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 hover:text-white transition-all"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Voltar para Home
                </Button>
              </Link>

              <Button
                onClick={handleOpenModal}
                variant="outline"
                size="sm"
                className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 hover:text-white transition-all"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Escolher Bairro
              </Button>
            </div>

            {/* Content */}
            <div className="container relative z-10 py-12 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
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

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Serviço Especializado de{" "}
                    <span className="text-secondary">{solucaoData.titulo}</span>
                  </h1>

                  <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                    {solucaoData.descricao} Equipes de prontidão equipadas com
                    maquinário de última geração para resolver seu problema com
                    rapidez e eficiência.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                      href="https://wa.me/5511948202927?text=Preciso%20de%20atendimento%20urgente"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-14 px-8 text-lg shadow-lg shadow-success/20 hover:scale-105 transition-transform"
                      >
                        <WhatsAppIcon className="w-4 h-4 mr-2" /> WhatsApp 24h
                      </Button>
                    </a>
                    <a>
                      <Button
                        onClick={handleOpenModal}
                        variant="outline"
                        size="lg"
                        className="bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-14 px-8 text-lg shadow-lg shadow-success/20 hover:scale-105 transition-transform"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Escolher Bairro
                      </Button>
                    </a>
                    <a href="tel:+5511948202927">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-14 px-8 text-lg shadow-lg shadow-success/20 hover:scale-105 transition-transform"
                      >
                        📞 Ligar Agora
                      </Button>
                    </a>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-4 pt-6">
                    {[
                      "Sem taxa de visita no local",
                      "Serviço garantido por contrato",
                      "Atendimento em até 40 minutos",
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
                      >
                        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-white">
                          ✓
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefícios Grid - Padrão Home */}
          <section className="py-20 md:py-32 bg-muted/30">
            <div className="container">
              <motion.div {...fadeIn} className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Por que escolher a{" "}
                  <span className="text-primary underline decoration-secondary decoration-4 underline-offset-8">
                    PROTEC
                  </span>
                  ?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experiência, agilidade e transparência em cada atendimento.
                  Somos referência em {solucaoData.titulo.toLowerCase()} em São
                  Paulo.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Como Funciona Section - Padrão Home */}
          <section className="py-20 md:py-32 bg-primary text-white">
            <div className="container">
              <motion.div {...fadeIn} className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Atendimento em 4 Passos
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                  Simplicidade e transparência do início ao fim do serviço.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                <div className="absolute hidden lg:block h-[2px] bg-white/20 left-[12%] right-[12%] top-[calc(5rem_-_0.75rem)]" />

                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      delay: idx * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="text-center group relative z-10 p-6 bg-primary-darker rounded-xl border border-white/10 shadow-lg"
                  >
                    <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <a href="https://wa.me/5511948202927?text=Preciso%20de%20atendimento%20urgente">
                  <Button
                    size="lg"
                    className="bg-success hover:bg-success/90 text-white font-bold flex items-center gap-2 h-14 px-10 text-lg shadow-xl shadow-black/20"
                  >
                    <WhatsAppIcon size={24} /> Solicitar Atendimento Agora
                  </Button>
                </a>
              </motion.div>
            </div>
          </section>

          {/* Seção de Diferenciais Adicionais */}
          <section className="py-20 md:py-32 bg-white">
            <div className="container max-w-5xl">
              <motion.div {...fadeIn} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Star className="w-4 h-4" />
                  <span>Referência em São Paulo</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Compromisso com a Excelência
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Somos especialistas em {solucaoData.titulo.toLowerCase()} com
                  mais de 10 anos de experiência no mercado. Utilizamos técnicas
                  avançadas e equipamentos de última geração para garantir
                  resultados rápidos e duradouros.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div {...fadeIn} className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Nossos Compromissos
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Atendimento 24 horas por dia, 7 dias por semana",
                      "Profissionais treinados e uniformizados",
                      "Equipamentos modernos e certificados",
                      "Orçamento sem compromisso e sem custo",
                      "Garantia por escrito em todos os serviços",
                      "Preços competitivos e condições especiais",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div {...fadeIn} className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Por que clientes nos escolhem
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Maior índice de satisfação do mercado",
                      "Resolução definitiva do problema",
                      "Tecnologia que evita quebra-quebra",
                      "Transparência total no orçamento",
                      "Atendimento personalizado e humanizado",
                      "Limpeza e organização no serviço",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                {...fadeIn}
                className="text-center mt-12 pt-8 border-t border-gray-100"
              >
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://wa.me/5511948202927"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Button
                      size="lg"
                      className="bg-success hover:bg-success/90 text-white font-bold"
                    >
                      <WhatsAppIcon size={20} /> Solicitar Orçamento Grátis
                    </Button>
                  </a>
                  <Link href="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <ArrowRight className="w-5 h-5 mr-2" /> Voltar para Home
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
