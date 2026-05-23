// SolucaoBairroPage.tsx - Mobile First + Profissional
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  CheckCircle,
  Phone,
  Home,
  Zap,
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
  Filter,
  ArrowRight,
  Headphones,
  ClipboardList,
  Medal,
  Star,
  ChevronRight,
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

// Mapeamento completo de soluções (mantenha o mesmo do seu código original)
const solucaoContentMap: Record<string, any> = {
  // ... (mantenha todo o mapeamento existente)
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
  // ... adicione os outros mapeamentos (desentupidora-de-pia, etc.)
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

  const localizedDescription = useMemo(
    () =>
      `${solucaoContent.tituloCompleto} em ${bairroData.nome} com atendimento 24h. ${solucaoContent.descricaoCurta}`,
    [solucaoContent, bairroData]
  );

  const whatsappMessage = `Preciso de ${solucaoContent.tituloCompleto.toLowerCase()} urgente no bairro ${bairroData.nome}`;

  const bairrosProximos = [
    "Jardim Paulista",
    "Cerqueira César",
    "Pinheiros",
    "Vila Nova Conceição",
    "Moema",
    "Vila Olímpia",
  ];

  return (
    <>
      <Helmet>
        <title>{`${solucaoContent.tituloCompleto} em ${bairroData.nome} - SP | Atendimento 24h | PROTEC`}</title>
        <meta name="description" content={localizedDescription} />
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-transparent" />

            {/* Botões flutuantes */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-20 flex flex-wrap justify-between items-center gap-3">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/40 backdrop-blur-sm border-white/20 text-white hover:bg-black/60 text-xs sm:text-sm"
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
                  className="bg-black/40 backdrop-blur-sm border-white/20 text-white hover:bg-black/60 text-xs sm:text-sm"
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Trocar Bairro</span>
                  <span className="xs:hidden">Bairro</span>
                </Button>
              </Link>
            </div>

            {/* Breadcrumb */}
            <div className="absolute top-16 left-4 right-4 sm:top-20 sm:left-6 sm:right-6 z-20 flex flex-wrap items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-white/60">
              <Link href="/" className="hover:text-white transition">
                Início
              </Link>
              <span>/</span>
              <Link
                href={`/solucoes/${solucaoSlug}`}
                className="hover:text-white transition truncate max-w-[100px] sm:max-w-none"
              >
                {solucaoContent.tituloCompleto}
              </Link>
              <span>/</span>
              <span className="text-white font-medium truncate max-w-[120px] sm:max-w-none">
                {bairroData.nome}
              </span>
            </div>

            {/* Conteúdo Principal */}
            <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-24">
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
                    className="inline-flex items-center gap-2 bg-primary/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                    <MapPin className="w-3 h-3" />
                    <span>Atendimento 24h na {bairroData.regiao}</span>
                  </motion.div>

                  {/* Título */}
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {solucaoContent.tituloCompleto} em{" "}
                    <span className="text-primary relative inline-block">
                      {bairroData.nome}
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
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
                    {isMobile
                      ? localizedDescription.slice(0, 120) + "..."
                      : localizedDescription}
                  </p>

                  {/* Botões CTA */}
                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                    <a
                      href={`https://wa.me/5511948202927?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full xs:w-auto"
                    >
                      <Button className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success text-white font-bold h-11 sm:h-14 px-4 sm:px-8 text-sm sm:text-base shadow-lg">
                        <Zap size={isMobile ? 16 : 18} className="mr-2" />
                        Solicitar Agora
                      </Button>
                    </a>
                    <a href="tel:+5511948202927" className="w-full xs:w-auto">
                      <Button
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-primary font-bold h-11 sm:h-14 px-4 sm:px-8 text-sm sm:text-base transition-all"
                      >
                        <Phone size={isMobile ? 16 : 18} className="mr-2" />
                        (11) 94820-2927
                      </Button>
                    </a>
                  </div>

                  {/* Features Chips */}
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 sm:pt-8">
                    {[
                      `24h em ${bairroData.nome}`,
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
                        <span className="text-[10px] sm:text-xs font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Seção de Sintomas - Mobile First */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
                <motion.div {...fadeIn}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground">
                      Sinais de Alerta
                    </h2>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {solucaoContent.sintomas
                      .slice(0, 4)
                      .map((sintoma: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-card rounded-lg border border-border"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            <strong className="text-card-foreground">
                              {sintoma}?
                            </strong>{" "}
                            Em {bairroData.nome}, resolvemos rápido.
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
                      Por que a PROTEC?
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        +10 anos na {bairroData.regiao}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Chegada em 40min em {bairroData.nome}
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        Garantia de satisfação
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Metodologia - Cards Profissionais */}
          <section className="py-12 sm:py-16 md:py-20 bg-muted/5">
            <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                    Metodologia
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground mb-3 sm:mb-4">
                  Nossa Metodologia em {bairroData.nome}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  {solucaoContent.diferencial}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {solucaoContent.tecnicas
                  .slice(0, 4)
                  .map((tecnica: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">
                          {tecnica}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                          Equipamentos modernos
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>

          {/* Benefícios - Grid Premium */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Vantagens em {bairroData.nome}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Atendimento localizado com qualidade PROTEC
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {solucaoContent.beneficios.map(
                  (beneficio: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white p-5 sm:p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <div className="text-primary group-hover:text-white">
                          {beneficio.icone}
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                        {beneficio.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {beneficio.descricao}
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Bairros Próximos - Linkagem Interna */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Atendemos também na região
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Atendimento rápido em toda {bairroData.regiao}
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {bairrosProximos.map((bairro, idx) => (
                  <Link
                    key={idx}
                    href={`/solucoes/${solucaoSlug}/${bairro.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-200 rounded-full text-[11px] sm:text-sm text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                      {bairro}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final Premium */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
            <div className="container px-4 sm:px-6 text-center max-w-4xl mx-auto">
              <motion.div {...fadeIn}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Precisa de {solucaoContent.tituloCompleto} em{" "}
                  {bairroData.nome}?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8">
                  Atendimento imediato. Ligue agora ou chame no WhatsApp!
                </p>

                <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <a
                    href={`https://wa.me/5511948202927?text=${encodeURIComponent(whatsappMessage)}`}
                    className="w-full xs:w-auto"
                  >
                    <Button className="w-full bg-success hover:bg-success/90 text-white font-bold h-11 sm:h-14 px-5 sm:px-8 text-sm sm:text-base shadow-xl">
                      <WhatsAppIcon
                        size={isMobile ? 18 : 20}
                        className="mr-2"
                      />
                      WhatsApp 24h
                    </Button>
                  </a>
                  <a href="tel:+5511948202927" className="w-full xs:w-auto">
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-primary font-bold h-11 sm:h-14 px-5 sm:px-8 text-sm sm:text-base"
                    >
                      <Phone size={isMobile ? 16 : 18} className="mr-2" />
                      (11) 94820-2927
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-white/60">
                  <span>✓ Atendimento 24h</span>
                  <span>✓ Visita gratuita</span>
                  <span>✓ Orçamento sem compromisso</span>
                  <span>✓ Garantia por escrito</span>
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
