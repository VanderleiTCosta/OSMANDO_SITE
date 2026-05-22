import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DifferentialCard from "@/components/DifferentialCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Phone,
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
import { useEffect, useState } from "react";

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

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const differentials = [
    {
      icon: "⏰",
      title: "Atendimento 24h",
      description:
        "Disponíveis todos os dias, inclusive feriados e madrugadas.",
    },
    {
      icon: "⚡",
      title: "Resposta Rápida",
      description: "Equipe a caminho em até 40 minutos após sua chamada.",
    },
    {
      icon: "💰",
      title: "Orçamento Grátis",
      description: "Avaliação técnica no local sem nenhum custo.",
    },
    {
      icon: "✓",
      title: "Serviço Garantido",
      description: "Garantia por escrito em todos os serviços executados.",
    },
    {
      icon: "👨‍🔧",
      title: "Equipe Especializada",
      description: "Profissionais treinados e equipamentos modernos.",
    },
    {
      icon: "🛡️",
      title: "Segurança Total",
      description: "Empresa regulamentada e seguindo normas de segurança.",
    },
  ];

  const services = [
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-pia.jpg",
      title: "Desentupimento de Pia",
      description:
        "Pias de cozinha, banheiro e área de serviço com rapidez e limpeza.",
      slug: "desentupimento-de-pia",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-vaso.jpg",
      title: "Vaso Sanitário",
      description:
        "Atendimento emergencial para entupimentos e retorno de água.",
      slug: "vaso-sanitario",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-ralo.jpg",
      title: "Ralos e Box",
      description: "Banheiros, áreas externas, lavanderias e garagens.",
      slug: "ralos-e-box",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-esgoto.jpg",
      title: "Esgoto e Tubulação",
      description: "Rede de esgoto, colunas de prédios e mau cheiro.",
      slug: "esgoto-e-tubulacao",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-fossa.jpg",
      title: "Caixa de Gordura",
      description: "Limpeza completa, higienização e prevenção.",
      slug: "caixa-de-gordura",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/service-hidrojato.jpg",
      title: "Hidrojateamento",
      description: "Alta pressão para limpeza de tubulações industriais.",
      slug: "hidrojateamento",
    },
  ];

  const testimonials = [
    {
      initial: "C",
      name: "Carla M.",
      location: "Pinheiros - SP",
      text: "Atendimento super rápido, técnico chegou em 30 minutos e resolveu o entupimento da pia. Recomendo!",
    },
    {
      initial: "R",
      name: "Roberto S.",
      location: "Tatuapé - SP",
      text: "Profissional educado, explicou tudo antes e deixou o banheiro impecável. Preço justo.",
    },
    {
      initial: "M",
      name: "Marina L.",
      location: "Vila Madalena - SP",
      text: "Trabalho excelente no nosso restaurante. Caixa de gordura limpa e sem mau cheiro!",
    },
    {
      initial: "E",
      name: "Eduardo P.",
      location: "Moema - SP",
      text: "Síndico aqui. Já chamamos várias vezes e nunca decepcionaram. Atendimento sério e pontual.",
    },
    {
      initial: "J",
      name: "Juliana R.",
      location: "Santana - SP",
      text: "Fui atendida de madrugada com a mesma qualidade do horário comercial. Salvaram a noite!",
    },
    {
      initial: "F",
      name: "Fernando A.",
      location: "Itaim Bibi - SP",
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
        "Sim, o orçamento é completamente grátis. Enviamos um técnico para avaliar o problema no local, sem nenhum custo ou compromisso.",
    },
    {
      question: "Quanto tempo demora para o técnico chegar?",
      answer:
        "Nosso tempo médio de chegada é de 30 a 60 minutos em São Paulo e região metropolitana, dependendo do trânsito e localização.",
    },
    {
      question: "Vocês cobram taxa de visita?",
      answer:
        "Não. Não cobramos taxa de visita. Você só paga pelo serviço executado, após aprovar o orçamento.",
    },
    {
      question: "Atendem condomínios e empresas?",
      answer:
        "Sim, atendemos residências, condomínios, empresas, restaurantes, escolas e qualquer tipo de estabelecimento.",
    },
    {
      question: "Quais formas de pagamento aceitam?",
      answer:
        "Aceitamos dinheiro, cartões de crédito e débito (todas as bandeiras), transferência bancária e PIX.",
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30 overflow-x-hidden">
      <Header />
      <HeroSection />

      {/* Diferenciais Section - Mobile First */}
      <section
        id="diferenciais"
        className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30"
      >
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
              {isMobile
                ? "Experiência, agilidade e transparência em cada atendimento."
                : "Experiência, agilidade e transparência em cada atendimento. Somos referência em desentupimento em São Paulo."}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {differentials.map((diff, idx) => (
              <DifferentialCard key={idx} {...diff} delay={idx * 0.05} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soluções Section */}
      <section id="solucoes" className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container px-4 sm:px-6">
          <motion.div
            {...fadeIn}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Soluções Especializadas
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Equipamentos de ponta para resolver qualquer tipo de entupimento
              com rapidez.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} priority={idx < 2} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section - Mobile First */}
      {/* Como Funciona Section - Versão Premium */}
      <section
        id="como-funciona"
        className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-primary text-white overflow-hidden"
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
                Metodologia Exclusiva
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Atendimento em{" "}
              <span className="text-secondary relative inline-block">
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
                    className="text-secondary/50"
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
                  <div className="relative h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2">
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
                { value: "5.000+", label: "Serviços Realizados", icon: "✓" },
                { value: "40min", label: "Tempo Médio de Chegada", icon: "⚡" },
                { value: "24/7", label: "Disponibilidade Total", icon: "🕒" },
                { value: "100%", label: "Clientes Satisfeitos", icon: "★" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-2"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary">
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
            <a href="https://wa.me/5511948202927">
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

      {/* Quem Somos Section - Versão Final Corrigida */}
      <section
        id="quem-somos"
        className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        {/* Padrão decorativo simples - sem erros de sintaxe */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
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
              <div className="absolute -top-4 -right-4 z-10 bg-white rounded-xl shadow-xl p-3 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <span className="text-success text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      Certificada
                    </p>
                    <p className="text-[10px] text-gray-500">ISO 9001</p>
                  </div>
                </div>
              </div>

              {/* Imagem principal */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/quem-somos.jpg"
                  alt="Equipe técnica especializada da PROTEC"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="600"
                  height="500"
                />

                {/* Card de experiência sobreposto */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl sm:text-4xl font-black text-primary">
                        +10
                      </p>
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Anos de mercado
                      </p>
                    </div>
                    <div className="w-px h-10 bg-gray-200" />
                    <div>
                      <p className="text-3xl sm:text-4xl font-black text-secondary">
                        +5k
                      </p>
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
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

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
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
                    <p className="text-sm sm:text-base text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                A <span className="font-bold text-gray-900">PROTEC</span> se
                consolidou como referência no setor de desentupimento em São
                Paulo, atendendo com excelência residências, comércios,
                condomínios e indústrias. Nossa missão é oferecer soluções
                rápidas, eficientes e com total transparência.
              </p>

              {/* Bloco de citação */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-5 sm:p-6 border-l-4 border-primary">
                <p className="text-gray-700 italic text-sm sm:text-base">
                  "Compromisso com a qualidade e satisfação total do cliente.
                  Trabalhamos com garantia por escrito em todos os serviços."
                </p>
                <p className="text-xs font-bold text-primary mt-3 uppercase tracking-wider">
                  — Equipe PROTEC
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a
                  href="https://wa.me/5511948202927"
                  className="group w-full sm:w-auto"
                >
                  <Button className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                    <WhatsAppIcon size={isMobile ? 18 : 20} className="mr-2" />
                    Orçamento Grátis
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="tel:+5511948202927" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 transition-all duration-300"
                  >
                    <PhoneCall size={isMobile ? 16 : 18} className="mr-2" />
                    Ligar Agora: (11) 94820-2927
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
                    <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section
        id="depoimentos"
        className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/30"
      >
        <div className="container px-4 sm:px-6">
          <motion.div
            {...fadeIn}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Satisfação Garantida
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Veja o que nossos clientes dizem sobre o nosso trabalho em toda
              São Paulo.
            </p>
            <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-6">
              <div className="flex gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg sm:text-2xl text-secondary">
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 sm:ml-3 text-base sm:text-xl font-black text-foreground">
                4.9/5.0
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Versão Melhorada */}
      <section
        id="faq"
        className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container px-4 sm:px-6 max-w-4xl relative z-10">
          {/* Cabeçalho com ícone decorativo */}
          <motion.div
            {...fadeIn}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mx-auto">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas{" "}
              <span className="text-primary relative inline-block">
                Frequentes
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 L100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    className="text-primary/30"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e atendimento
            </p>
          </motion.div>

          {/* Estatísticas de suporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 sm:mb-16"
          >
            {[
              { icon: "💬", value: "24/7", label: "Suporte Disponível" },
              {
                icon: "⚡",
                value: "< 40min",
                label: "Tempo Médio de Resposta",
              },
              { icon: "⭐", value: "4.9/5", label: "Avaliação dos Clientes" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Accordion FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="group border border-gray-200 rounded-xl bg-white overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg md:text-lg font-semibold text-gray-900 hover:text-primary py-5 sm:py-6 px-5 sm:px-6 transition-all hover:no-underline [&[data-state=open]]:text-primary">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold text-sm">
                          ?
                        </span>
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-600 pb-5 sm:pb-6 px-5 sm:px-6 leading-relaxed border-t border-gray-100 pt-4">
                    <div className="flex gap-3">
                      <div className="w-1 h-auto bg-gradient-to-b from-primary to-secondary rounded-full" />
                      <p>{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Final - Chat ao vivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="relative bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-6 sm:p-8 md:p-10 border border-primary/10 overflow-hidden">
              {/* Efeito de brilho */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                {/* Ícone animado */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-5 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Fale diretamente com um especialista e tire todas as suas
                  dúvidas em tempo real.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/5511948202927" className="group">
                    <Button className="bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                      <WhatsAppIcon
                        size={isMobile ? 18 : 20}
                        className="mr-2"
                      />
                      Falar no WhatsApp
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="tel:+5511948202927">
                    <Button
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 transition-all duration-300"
                    >
                      <Phone size={isMobile ? 16 : 18} className="mr-2" />
                      Ligar: (11) 94820-2927
                    </Button>
                  </a>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  *Atendimento 24 horas - Todos os dias da semana
                </p>
              </div>
            </div>
          </motion.div>

          {/* Selo de confiança adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Resposta Rápida</span>
            </div>
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Suporte Técnico</span>
            </div>
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="text-success">✓</span>
              <span>Orçamento Grátis</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
