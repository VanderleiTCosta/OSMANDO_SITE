// SolucaoBairroPage.tsx - Mobile First + SEO Local Dinâmico (Exact Match Keyword Engine)
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  CheckCircle,
  Phone,
  Home,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Award,
  BadgeCheck,
  Wrench,
  Camera,
  Droplets,
  Trash2,
  AlertTriangle,
  ArrowRight,
  PhoneCall,
  DollarSign,
  Search,
} from "lucide-react";
import Footer from "../components/Footer";
import { SP_REGIONS } from "../data/sp-regions";
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

// Mapeamento completo de soluções
const solucaoContentMap: Record<string, any> = {
  desentupidora: {
    tituloCompleto: "Desentupidora",
    nomeVariacoes: ["desentupidora", "serviço de desentupimento"],
    descricaoCurta:
      "Atendimento emergencial 24h para desentupimento com técnicos especialistas.",
    descricaoLonga:
      "Somos referência em serviços de desentupimento com mais de 10 anos de experiência. Utilizamos tecnologias avançadas que garantem a resolução definitiva do problema.",
    beneficios: [
      {
        titulo: "Resolução Rápida",
        descricao: "Técnicos a caminho em até 40 minutos",
        icone: <Clock size={24} />,
      },
      {
        titulo: "Sem Quebra-Quebra",
        descricao: "Tecnologia que preserva sua estrutura",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Garantia Total",
        descricao: "Serviço garantido por escrito",
        icone: <Award size={24} />,
      },
    ],
    sintomas: [
      "água escoando devagar",
      "mau cheiro persistente",
      "entupimento total",
      "retorno de água",
    ],
    diferencial:
      "Utilizamos equipamentos de hidrojateamento de alta pressão e câmeras de videoscopia.",
    tecnicas: [
      "Hidrojateamento de Alta Pressão",
      "Desentupimento Mecânico",
      "Videoscopia e Inspeção",
    ],
    palavrasChave: [
      "desentupidora",
      "desentupimento",
      "desentupir",
      "desentupidora 24h",
    ],
    iconePrincipal: <Wrench size={28} />,
  },
  desentupidoraDePia: {
    tituloCompleto: "Desentupidora de Pia",
    nomeVariacoes: ["desentupidora de pia", "desentupir pia"],
    descricaoCurta:
      "Desentupimento rápido de pias com tecnologia que não danifica sua tubulação.",
    descricaoLonga:
      "Especialistas em desentupimento de pias com equipamentos específicos para cada tipo de obstrução.",
    beneficios: [
      {
        titulo: "Resolução Rápida",
        descricao: "Serviço em até 30 minutos",
        icone: <Clock size={24} />,
      },
      {
        titulo: "Sem Produtos Químicos",
        descricao: "Método ecológico e seguro",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Garantia de 30 dias",
        descricao: "Por escrito",
        icone: <Award size={24} />,
      },
    ],
    sintomas: ["água parada", "mau cheiro", "escoamento lento"],
    diferencial: "Técnica exclusiva que remove gordura e resíduos acumulados.",
    tecnicas: [
      "Desobstrução Mecânica",
      "Hidrojateamento Leve",
      "Inspeção Rápida",
    ],
    palavrasChave: ["desentupidora de pia", "desentupir pia"],
    iconePrincipal: <Droplets size={28} />,
  },
  desentupidoraDeVaso: {
    tituloCompleto: "Desentupidora de Vaso Sanitário",
    nomeVariacoes: ["desentupidora de vaso", "desentupir vaso"],
    descricaoCurta:
      "Solução definitiva para vasos entupidos sem quebrar o piso.",
    descricaoLonga:
      "Utilizamos equipamentos específicos que desobstruem o vaso preservando toda a estrutura.",
    beneficios: [
      {
        titulo: "Sem Quebra",
        descricao: "Preservamos seu banheiro",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Resolução Imediata",
        descricao: "Vaso funcionando em minutos",
        icone: <Clock size={24} />,
      },
      {
        titulo: "Higienização",
        descricao: "Limpeza após serviço",
        icone: <Award size={24} />,
      },
    ],
    sintomas: ["vaso transbordando", "água não desce", "mau cheiro forte"],
    diferencial: "Técnica especializada que não danifica a louça.",
    tecnicas: [
      "Desentupimento com Mola Especial",
      "Pistola de Pressão",
      "Inspeção por Câmera",
    ],
    palavrasChave: ["desentupidora de vaso", "desentupir vaso sanitário"],
    iconePrincipal: <Trash2 size={28} />,
  },
  caixaDeGordura: {
    tituloCompleto: "Limpeza de Caixa de Gordura",
    nomeVariacoes: ["limpeza caixa de gordura", "caixa de gordura entupida"],
    descricaoCurta:
      "Limpeza completa e desentupimento de caixas de gordura com equipamento de alto vácuo.",
    descricaoLonga:
      "Serviço especializado que resolve problemas de entupimento e mau cheiro provenientes da caixa de gordura.",
    beneficios: [
      {
        titulo: "Limpeza Total",
        descricao: "Eliminação completa da gordura",
        icone: <Truck size={24} />,
      },
      {
        titulo: "Elimina Mau Cheiro",
        descricao: "Fim do odor desagradável",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Vistoria Técnica",
        descricao: "Análise completa do sistema",
        icone: <Award size={24} />,
      },
    ],
    sintomas: ["mau cheiro persistente", "ralos entupidos", "água acumulando"],
    diferencial: "Caminhão de sucção de alta potência para limpeza profunda.",
    tecnicas: ["Sucção a Vácuo", "Hidrojateamento", "Aplicação de Biológicos"],
    palavrasChave: ["limpeza caixa de gordura", "caixa de gordura"],
    iconePrincipal: <Droplets size={28} />,
  },
  hidrojateamento: {
    tituloCompleto: "Hidrojateamento",
    nomeVariacoes: ["hidrojateamento", "jato de alta pressão"],
    descricaoCurta:
      "Limpeza e desentupimento de tubulações com água em alta pressão.",
    descricaoLonga:
      "Tecnologia avançada de hidrojateamento que limpa completamente as tubulações sem danificá-las.",
    beneficios: [
      {
        titulo: "Limpeza Profunda",
        descricao: "Remove 100% dos resíduos",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Ecológico",
        descricao: "Apenas água de alta pressão",
        icone: <Award size={24} />,
      },
      {
        titulo: "Preventivo",
        descricao: "Evita novos entupimentos",
        icone: <Clock size={24} />,
      },
    ],
    sintomas: [
      "entupimentos recorrentes",
      "água escoando devagar",
      "tubulação antiga",
    ],
    diferencial: "Pressão de até 3000 PSI para limpeza total.",
    tecnicas: ["Hidrojateamento de Alta Pressão", "Videoscopia Pós-Serviço"],
    palavrasChave: ["hidrojateamento", "jato de alta pressão"],
    iconePrincipal: <Droplets size={28} />,
  },
  videoscopia: {
    tituloCompleto: "Videoscopia",
    nomeVariacoes: ["videoscopia", "inspeção por câmera"],
    descricaoCurta:
      "Inspeção interna de tubulações com câmera de alta definição.",
    descricaoLonga:
      "Diagnóstico preciso através de câmera que percorre toda a tubulação identificando o problema exato.",
    beneficios: [
      {
        titulo: "Diagnóstico Preciso",
        descricao: "Identifica a causa exata",
        icone: <Camera size={24} />,
      },
      {
        titulo: "Não Invasivo",
        descricao: "Sem necessidade de quebra",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Relatório Detalhado",
        descricao: "Gravação do serviço",
        icone: <Award size={24} />,
      },
    ],
    sintomas: [
      "entupimento sem causa aparente",
      "problemas recorrentes",
      "tubulação muito antiga",
    ],
    diferencial: "Câmera de 360° com gravação em Full HD.",
    tecnicas: [
      "Inspeção com Câmera",
      "Mapeamento de Tubulação",
      "Laudo Técnico",
    ],
    palavrasChave: ["videoscopia", "inspeção de esgoto"],
    iconePrincipal: <Camera size={28} />,
  },
};

const SolucaoBairroPage: React.FC = () => {
  const params = useParams<{ solucaoSlug: string; bairroSlug: string }>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const solucaoSlug = params?.solucaoSlug || "desentupidora";
  const bairroSlug = params?.bairroSlug || "itaim-bibi";

  const solucaoContent =
    solucaoContentMap[solucaoSlug] || solucaoContentMap["desentupidora"];

  const bairroData = useMemo(() => {
    for (const regiao of SP_REGIONS) {
      const bairro = regiao.bairros.find(b => b.slug === bairroSlug);
      if (bairro) return { nome: bairro.nome, regiao: regiao.nome };
    }
    const fallbackName = bairroSlug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return { nome: fallbackName, regiao: "São Paulo" };
  }, [bairroSlug]);

  // ENGINE INTELIGENTE DE PREPOSIÇÕES (SEO EXATO)
  // Define dinamicamente se é "em Moema", "no Morumbi", "na Vila Mariana"
  const preposicaoLocal = useMemo(() => {
    const b = bairroData.nome.toLowerCase();
    const usaEm = [
      "moema", "tatuapé", "santana", "interlagos", "perdizes", "pinheiros", 
      "jaú", "jau", "barueri", "osasco", "guarulhos", "campinas", "jundiaí", 
      "itaquera", "pirituba", "suzano", "diadema", "mauá", "cotia"
    ].some(x => b.includes(x) || b === x);
    
    const usaNa = [
      "vila", "cidade", "chácara", "fazenda", "zona", "lapa", "mooca", "penha", 
      "sé", "saúde", "consolação", "liberdade", "freguesia", "pedreira", "brasilândia",
      "água", "pompéia", "casa verde", "bela vista"
    ].some(x => b.includes(x)) || b.endsWith("a");

    if (usaEm) return "em";
    if (usaNa) return "na";
    return "no";
  }, [bairroData.nome]);

  // A Palavra-Chave Exata Gerada: ex "Desentupidora em Moema" ou "Hidrojateamento no Morumbi"
  const keywordExata = `${solucaoContent.tituloCompleto} ${preposicaoLocal} ${bairroData.nome}`;

  const localizedDescription = useMemo(
    () =>
      `Serviço especializado de ${keywordExata} com atendimento 24h. ${solucaoContent.descricaoCurta}`,
    [keywordExata, solucaoContent]
  );

  const whatsappMessage = `Preciso urgente de ${solucaoContent.tituloCompleto.toLowerCase()} ${preposicaoLocal} ${bairroData.nome}`;

  // Gerador Dinâmico de Textos com variações exatas para rankeamento orgânico
  const seoContent = useMemo(() => {
    const srv = solucaoContent.tituloCompleto;
    const brr = bairroData.nome;
    const prep = preposicaoLocal;
    
    return {
      title: `Especialistas: ${keywordExata}`,
      paragraph: `O Grupo Protec é a sua melhor escolha quando se trata de buscas por <strong>${srv.toLowerCase()} ${prep} ${brr}</strong>. Compreendemos a urgência que problemas hidráulicos exigem, por isso mantemos equipes de prontidão 24 horas por dia. Se você precisa de <strong>${keywordExata}</strong> ou nas imediações, garantimos um tempo de resposta de até 40 minutos, levando tecnologia de ponta que resolve o bloqueio sem quebrar seus pisos ou azulejos. Priorizamos a transparência total, emitindo nota fiscal e oferecendo garantia por escrito para sua máxima tranquilidade estrutural e financeira.`,
      list: [
        `Procurando por <strong>${keywordExata.toLowerCase()}</strong>? Nossa equipe atua com viaturas próprias e atendimento imediato, oferecendo preço justo para emergências.`,
        `Para quem precisa de <strong>${srv.toLowerCase()} ${prep} ${brr}</strong>, contamos com técnicos altamente qualificados que entregam orçamento sem compromisso no local.`,
        `Atendemos chamados de <strong>${keywordExata.toLowerCase()}</strong> com maquinário moderno, proporcionando um serviço limpo, rápido e com pagamento facilitado no cartão.`,
        `Precisou de urgência? Nosso plantão de <strong>${srv.toLowerCase()} ${prep} ${brr}</strong> chega rapidamente para solucionar a obstrução com segurança e laudo técnico.`,
        `Especialistas locais em <strong>${keywordExata.toLowerCase()}</strong> prontos para diagnosticar a raiz do problema, protegendo sua estrutura e evitando gastos futuros desnecessários.`
      ]
    };
  }, [solucaoContent.tituloCompleto, bairroData.nome, preposicaoLocal, keywordExata]);

  // Schema.org Otimizado para Local SEO com Keyword Exata
  const schemaMarkup = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": keywordExata,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Grupo Protec",
      "image": "https://www.grupoprotec.com.br/logo.webp",
      "telephone": "+5511937724242",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    },
    "areaServed": {
      "@type": "Neighborhood",
      "name": bairroData.nome
    },
    "description": localizedDescription
  }), [keywordExata, bairroData.nome, localizedDescription]);

  const bairrosProximos = [
    "Jardim Paulista",
    "Cerqueira César",
    "Pinheiros",
    "Vila Nova Conceição",
    "Moema",
    "Vila Olímpia",
  ];

  const steps = [
    {
      step: "01",
      icon: <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Solicitação",
      desc: "Contato via WhatsApp ou telefone para análise inicial da emergência",
    },
    {
      step: "02",
      icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Deslocamento",
      desc: `Técnico mais próximo é acionado e chega ${preposicaoLocal} ${bairroData.nome} em até 40 minutos`,
    },
    {
      step: "03",
      icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Diagnóstico",
      desc: "Avaliação técnica gratuita com orçamento transparente e sem surpresas",
    },
    {
      step: "04",
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Solução Garantida",
      desc: "Execução profissional com equipamentos modernos e garantia por escrito",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`${keywordExata} | Atendimento 24h | PROTEC`}</title>
        <meta name="description" content={localizedDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen selection:bg-secondary/30 flex flex-col overflow-x-hidden">
        <main className="flex-grow">
          {/* Hero Section - Mobile First Premium */}
          <section
            className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663060650935/K9o8LWiVmPpHSveFtHmbjC/hero-background-55Cmg5Y6Z87dK4wgmnzMev.webp')",
              backgroundSize: "cover",
              backgroundPosition: isMobile ? "65% center" : "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />

            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-20 flex flex-wrap justify-between items-center gap-3">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 text-xs sm:text-sm"
                >
                  <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Início</span>
                  <span className="xs:hidden">Home</span>
                </Button>
              </Link>
              <Link href={`/solucoes/${solucaoSlug}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 text-xs sm:text-sm"
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Trocar Bairro</span>
                  <span className="xs:hidden">Bairro</span>
                </Button>
              </Link>
            </div>

            <div className="absolute top-16 left-4 right-4 sm:top-20 sm:left-6 sm:right-6 z-20 flex flex-wrap items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-white/60">
              <Link href="/" className="hover:text-white transition">Início</Link>
              <span>/</span>
              <Link href={`/solucoes/${solucaoSlug}`} className="hover:text-white transition truncate max-w-[100px] sm:max-w-none">
                {solucaoContent.tituloCompleto}
              </Link>
              <span>/</span>
              <span className="text-white font-medium truncate max-w-[120px] sm:max-w-none">
                {bairroData.nome}
              </span>
            </div>

            <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white space-y-4 sm:space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block bg-primary/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase"
                  >
                    <span className="animate-pulse inline-block mr-1">⚡</span>
                    <span>Atendimento 24h na {bairroData.regiao}</span>
                  </motion.div>

                  {/* Título com a palavra-chave exata! */}
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {solucaoContent.tituloCompleto}{" "}
                    <span className="text-primary relative inline-block">
                      {preposicaoLocal} {bairroData.nome}
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

                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
                    {isMobile
                      ? localizedDescription.slice(0, 120) + "..."
                      : localizedDescription}
                  </p>

                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                    <a
                      href={`https://wa.me/5511937724242?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full xs:w-auto"
                    >
                      <Button className="w-full bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-11 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg shadow-lg shadow-success/20 hover:scale-105 transition-transform duration-300">
                        <WhatsAppIcon size={isMobile ? 18 : 20} />
                        <span className="whitespace-nowrap">WhatsApp 24h</span>
                      </Button>
                    </a>
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

                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 sm:pt-8">
                    {[
                      `24h ${preposicaoLocal} ${bairroData.nome}`,
                      "40min de resposta",
                      "Orçamento Grátis",
                      "Garantia por Escrito",
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

          {/* Benefícios Grid */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-muted/5">
            <div className="container px-4 sm:px-6">
              <motion.div
                {...fadeIn}
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  Vantagens do nosso{" "}
                  <span className="text-primary underline decoration-secondary decoration-4 underline-offset-4 sm:underline-offset-8">
                    atendimento {preposicaoLocal} {bairroData.nome}
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                  Atendimento localizado com a qualidade e agilidade PROTEC
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              >
                {solucaoContent.beneficios.map((beneficio: any, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="group bg-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {beneficio.icone}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                        {beneficio.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {beneficio.descricao}
                      </p>
                    </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Sinais de Alerta */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
                <motion.div {...fadeIn}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground">
                      Sinais de Alerta {preposicaoLocal} {bairroData.nome}
                    </h2>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {solucaoContent.sintomas.slice(0, 4).map((sintoma: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-card rounded-lg border border-border">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            <strong className="text-card-foreground">{sintoma}?</strong>{" "}
                            Resolvemos rápido {preposicaoLocal} {bairroData.nome}.
                          </span>
                        </li>
                      ))}
                  </ul>
                </motion.div>

                <motion.div
                  {...fadeIn}
                  className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      {solucaoContent.iconePrincipal}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-card-foreground">
                      Por que a PROTEC é a escolha certa?
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        +10 anos de experiência na {bairroData.regiao}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Chegada garantida em até 40 minutos {preposicaoLocal} {bairroData.nome}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Garantia de satisfação por escrito
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Equipamentos modernos e equipe certificada
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-muted-foreground italic text-xs sm:text-sm">
                      "Compromisso com a qualidade e satisfação total do cliente. Trabalhamos com garantia por escrito em todos os serviços."
                    </p>
                    <p className="text-[10px] font-bold text-primary mt-2 uppercase tracking-wider">
                      — Equipe PROTEC
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SEO Local Dinâmico (Exact Keyword Match) */}
          <section className="py-12 sm:py-16 md:py-20 bg-card border-y border-border">
            <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
              <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-8">
                <header className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                    {seoContent.title}
                  </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {seoContent.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-muted/30 p-3 rounded-lg border border-border/50">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span 
                            className="text-sm text-muted-foreground leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 h-fit">
                    <h3 className="text-lg font-bold text-card-foreground mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      Cobertura e Transparência
                    </h3>
                    <p 
                      className="text-sm text-muted-foreground leading-relaxed text-justify"
                      dangerouslySetInnerHTML={{ __html: seoContent.paragraph }}
                    />
                    <div className="mt-6 pt-4 border-t border-primary/20">
                      <a href={`https://wa.me/5511937724242?text=${encodeURIComponent(whatsappMessage)}`}>
                        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
                          <WhatsAppIcon size={16} className="mr-2" />
                          Falar com um Especialista
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Metodologia - Como Funciona */}
          <section
            id="como-funciona"
            className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-card/40 backdrop-blur-sm border-y border-border text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container relative z-10 px-4 sm:px-6">
              <motion.div {...fadeIn} className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
                    Metodologia Exclusiva
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Como funciona nosso{" "}
                  <span className="text-primary relative inline-block">
                    atendimento {preposicaoLocal} {bairroData.nome}
                    <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 L100 5" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-primary/50" />
                    </svg>
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Do primeiro contato à solução final em até 40 minutos
                </p>
              </motion.div>

              <div className="relative">
                <div className="absolute hidden lg:block top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {steps.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                      className="group relative"
                    >
                      <div className="relative h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                          <span className="text-white font-black text-sm sm:text-base">{item.step}</span>
                        </div>

                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{item.icon}</div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                        <div className="mt-5 h-1 w-12 bg-secondary/50 rounded-full group-hover:w-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

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
                    <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="space-y-2">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12 sm:mt-16">
                <a href={`https://wa.me/5511937724242?text=${encodeURIComponent(whatsappMessage)}`}>
                  <Button className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 font-bold h-12 sm:h-14 px-8 sm:px-12 text-base sm:text-lg shadow-2xl transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <WhatsAppIcon size={isMobile ? 20 : 24} className="mr-2" />
                    <span className="relative z-10">Solicitar Agora {preposicaoLocal} {bairroData.nome}</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <p className="text-white/50 text-xs sm:text-sm mt-4">*Orçamento gratuito sem compromisso</p>
              </motion.div>
            </div>
          </section>

          {/* Técnicas / Metodologia */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/20 border-b border-border">
            <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4">
                  <Wrench className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">Tecnologia de Ponta</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-3 sm:mb-4">
                  Nossa Metodologia {preposicaoLocal} {bairroData.nome}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  {solucaoContent.diferencial}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {solucaoContent.tecnicas.slice(0, 3).map((tecnica: string, index: number) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 sm:gap-4 bg-card p-4 sm:p-5 rounded-xl shadow-sm border border-border hover:shadow-md transition-all group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                        <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-all" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-card-foreground">{tecnica}</h3>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Equipamentos modernos</p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>

          {/* Bairros Próximos */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/5">
            <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground mb-2 sm:mb-3">
                  Atendemos também na região
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Atendimento rápido em toda {bairroData.regiao}
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {bairrosProximos.map((bairro, idx) => (
                  <Link key={idx} href={`/solucoes/${solucaoSlug}/${bairro.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-card border border-border rounded-full text-[11px] sm:text-sm text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                      {bairro}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Selos de segurança */}
          <section className="py-8 sm:py-12 bg-card border-y border-border">
            <div className="container px-4 sm:px-6">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {[
                  { icon: "🔒", text: "Dados Protegidos" },
                  { icon: "📋", text: "Garantia por Escrito" },
                  { icon: "🏆", text: "Melhor Avaliado" },
                  { icon: "⚡", text: "Atendimento 24h" },
                  { icon: "📍", text: `Cobertura ${preposicaoLocal} ${bairroData.nome}` },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-card/20 backdrop-blur-sm border-y border-border overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #1e293b 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            <div className="container relative z-10 px-4 sm:px-6 text-center max-w-4xl mx-auto">
              <motion.div {...fadeIn}>
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                    Atendimento 24h {preposicaoLocal} {bairroData.nome}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-card-foreground mb-4">
                  Precisa de{" "}
                  <span className="text-primary relative inline-block">
                    {keywordExata}?
                    <svg className="absolute -bottom-2 left-0 w-full h-3 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 L100 5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-primary/20" />
                    </svg>
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Atendimento imediato {preposicaoLocal} {bairroData.nome}. Ligue agora ou chame no WhatsApp!
                </p>

                <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 mb-8">
                  <a href={`https://wa.me/5511937724242?text=${encodeURIComponent(whatsappMessage)}`} className="w-full xs:w-auto">
                    <Button className="group relative overflow-hidden w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white font-bold h-12 sm:h-14 px-6 sm:px-8 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      <WhatsAppIcon size={isMobile ? 18 : 20} className="mr-2 relative z-10" />
                      <span className="relative z-10">WhatsApp 24h</span>
                      <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="tel:+5511937724242" className="w-full xs:w-auto">
                    <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 sm:h-14 px-6 sm:px-8 transition-all duration-300">
                      <Phone size={isMobile ? 16 : 18} className="mr-2" />
                      0800 591 9537
                    </Button>
                  </a>
                </div>

                {/* Selos de segurança */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 border-t border-border/50">
                  {[
                    { icon: "🔒", text: "Dados Protegidos" },
                    { icon: "📋", text: "Garantia por Escrito" },
                    { icon: "🏆", text: "Melhor Avaliado" },
                    { icon: "⚡", text: "Atendimento 24h" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-sm sm:text-base">{item.icon}</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default React.memo(SolucaoBairroPage);