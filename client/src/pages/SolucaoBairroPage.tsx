// SolucaoBairroPage.tsx
import React, { useMemo } from "react";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  CheckCircle,
  Phone,
  ArrowLeft,
  Home,
  Zap,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Award,
  BadgeCheck,
  ThumbsUp,
  MessageSquare,
  Star,
  Users,
  Wrench,
  Camera,
  Droplets,
  Trash2,
  AlertTriangle,
  Filter,
} from "lucide-react";
import Footer from "../components/Footer";
import { SP_REGIONS } from "../data/sp-regions";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Mapeamento completo de soluções com seus conteúdos específicos
const solucaoContentMap: Record<
  string,
  {
    tituloCompleto: string;
    nomeVariacoes: string[];
    descricaoCurta: string;
    descricaoLonga: string;
    beneficios: Array<{
      titulo: string;
      descricao: string;
      icone: React.ReactNode;
    }>;
    sintomas: string[];
    diferencial: string;
    tecnicas: string[];
    palavrasChave: string[];
    iconePrincipal: React.ReactNode;
  }
> = {
  desentupidora: {
    tituloCompleto: "Desentupidora",
    nomeVariacoes: [
      "desentupidora",
      "serviço de desentupimento",
      "empresa de desentupimento",
      "desentupimento 24h",
      "desentupimento emergencial",
    ],
    descricaoCurta:
      "Atendimento emergencial 24h para desentupimento com técnicos especialistas e equipamentos de última geração.",
    descricaoLonga:
      "Somos referência em serviços de desentupimento com mais de 10 anos de experiência. Utilizamos tecnologias avançadas que garantem a resolução definitiva do problema sem a necessidade de quebra-quebra, preservando sua estrutura e evitando custos desnecessários.",
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
      "barulhos estranhos na tubulação",
    ],
    diferencial:
      "Utilizamos equipamentos de hidrojateamento de alta pressão e câmeras de videoscopia para diagnóstico preciso e solução definitiva.",
    tecnicas: [
      "Hidrojateamento de Alta Pressão",
      "Desentupimento Mecânico",
      "Videoscopia e Inspeção",
      "Limpeza Química Especializada",
    ],
    palavrasChave: [
      "desentupidora",
      "desentupimento",
      "desentupir",
      "serviço de desentupimento",
      "emergência desentupimento",
      "desentupidora 24h",
      "desentupimento residencial",
      "desentupimento comercial",
      "desentupimento condomínio",
    ],
    iconePrincipal: <Wrench size={28} />,
  },
  "desentupidora-de-pia": {
    tituloCompleto: "Desentupidora de Pia",
    nomeVariacoes: [
      "desentupidora de pia",
      "desentupimento de pia",
      "pia entupida",
      "desentupir pia",
      "serviço de desentupimento de pia",
      "técnico para pia entupida",
    ],
    descricaoCurta:
      "Solução rápida e definitiva para pia de cozinha, banheiro e área de serviço entupidas. Atendimento 24h com orçamento grátis.",
    descricaoLonga:
      "A pia entupida é um dos problemas mais comuns e urgentes em residências e estabelecimentos comerciais. Nossa equipe especializada utiliza técnicas modernas e equipamentos específicos para desentupir pias de todos os tipos: cozinha, banheiro, área de serviço, lava-louças e pias industriais. Atendimento rápido 24 horas para minimizar o transtorno em sua casa ou negócio.",
    beneficios: [
      {
        titulo: "Atendimento Imediato",
        descricao: "Chegamos rápido para resolver sua emergência",
        icone: <Zap size={24} />,
      },
      {
        titulo: "Limpeza Garantida",
        descricao: "Serviço sem sujeira e sem bagunça",
        icone: <CheckCircle size={24} />,
      },
      {
        titulo: "Preço Justo",
        descricao: "Orçamento gratuito sem compromisso",
        icone: <BadgeCheck size={24} />,
      },
    ],
    sintomas: [
      "água parada na pia",
      "escoamento muito lento",
      "mau cheiro vindo do ralo",
      "água subindo pela pia",
      "barulho de borbulhamento",
    ],
    diferencial:
      "Utilizamos técnicas avançadas que desentopem sua pia sem danificar encanamentos ou necessitar de quebra de parede, preservando totalmente sua cozinha ou banheiro.",
    tecnicas: [
      "Desentupimento por Ventosa Profissional",
      "Desobstrução com Espiral Mecânica",
      "Hidrojateamento Localizado",
      "Limpeza Química Controlada",
    ],
    palavrasChave: [
      "desentupidora de pia",
      "pia entupida",
      "desentupir pia",
      "pia de cozinha entupida",
      "pia de banheiro entupida",
      "desentupimento de pia 24h",
      "serviço de desentupimento de pia",
      "como desentupir pia",
      "técnico para pia entupida",
    ],
    iconePrincipal: <Droplets size={28} />,
  },
  "desentupidora-de-esgoto": {
    tituloCompleto: "Desentupidora de Esgoto",
    nomeVariacoes: [
      "desentupidora de esgoto",
      "esgoto entupido",
      "desentupimento de esgoto",
      "rede de esgoto entupida",
      "serviço de esgoto",
      "limpeza de esgoto",
      "desentupir esgoto",
    ],
    descricaoCurta:
      "Resolvemos problemas de esgoto entupido com rapidez e eficiência. Atendimento 24h para residências, condomínios e comércios.",
    descricaoLonga:
      "O entupimento de esgoto é uma emergência que requer ação imediata para evitar transbordamentos, mau cheiro e contaminação. Somos especialistas em desobstrução de redes de esgoto primárias e secundárias, utilizando equipamentos de alta tecnologia que garantem a limpeza completa da tubulação sem necessidade de escavação ou quebra de pisos. Atendemos residências, condomínios, restaurantes, hotéis e indústrias.",
    beneficios: [
      {
        titulo: "Prevenção de Danos",
        descricao: "Evitamos transbordamento e contaminação",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Tecnologia Avançada",
        descricao: "Equipamentos para limpeza profunda",
        icone: <Camera size={24} />,
      },
      {
        titulo: "Eliminação do Mau Cheiro",
        descricao: "Solução definitiva para odores",
        icone: <Filter size={24} />,
      },
    ],
    sintomas: [
      "esgoto retornando pelos ralos",
      "mau cheiro forte e persistente",
      "ralos e vasos borbulhando",
      "água não escoa",
      "barulho de água parada",
    ],
    diferencial:
      "Realizamos diagnóstico com câmera de videoscopia para identificar exatamente o ponto de obstrução e aplicar a técnica mais eficaz para cada caso, com garantia de resultados duradouros.",
    tecnicas: [
      "Videoscopia e Inspeção",
      "Hidrojateamento de Alta Pressão",
      "Desobstrução Mecânica",
      "Limpeza de Rede de Esgoto",
    ],
    palavrasChave: [
      "desentupidora de esgoto",
      "esgoto entupido",
      "desentupimento de esgoto",
      "rede de esgoto",
      "esgoto residencial",
      "esgoto comercial",
      "limpeza de esgoto",
      "desentupir esgoto",
      "serviço de esgoto 24h",
    ],
    iconePrincipal: <AlertTriangle size={28} />,
  },
  "desentupidora-de-vaso-sanitario": {
    tituloCompleto: "Desentupidora de Vaso Sanitário",
    nomeVariacoes: [
      "desentupidora de vaso sanitário",
      "vaso entupido",
      "desentupir vaso",
      "sanitário entupido",
      "desentupimento de vaso",
      "vaso sanitário entupido",
      "técnico para vaso entupido",
    ],
    descricaoCurta:
      "Atendimento emergencial 24h para vaso sanitário entupido. Resolução rápida sem sujeira e sem danos ao seu banheiro.",
    descricaoLonga:
      "Vaso sanitário entupido é uma emergência que não pode esperar. Nossa equipe chega rapidamente com equipamentos profissionais específicos para desobstrução de vasos sanitários sem danificar a louça ou o encanamento. Utilizamos técnicas avançadas que resolvem o problema de forma definitiva, seja qual for a causa do entupimento. Atendimento 24 horas, inclusive feriados e finais de semana.",
    beneficios: [
      {
        titulo: "Atendimento Urgente",
        descricao: "Chegamos rápido para sua emergência",
        icone: <Zap size={24} />,
      },
      {
        titulo: "Sem Danos ao Banheiro",
        descricao: "Proteção total para seu vaso e piso",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Serviço Limpo",
        descricao: "Profissionais treinados e higienizados",
        icone: <CheckCircle size={24} />,
      },
    ],
    sintomas: [
      "água sobe ao dar descarga",
      "vaso não esvazia",
      "papel higiênico acumulado",
      "objeto preso",
      "mau cheiro vindo do vaso",
    ],
    diferencial:
      "Nossos técnicos utilizam equipamentos com ponta de borracha que não riscam nem danificam a porcelana do seu vaso sanitário, garantindo um serviço eficiente e sem danos estéticos.",
    tecnicas: [
      "Desobstrução com Prensa Profissional",
      "Ventosa de Alta Pressão",
      "Espiral Mecânica Especial",
      "Limpeza com Produtos Específicos",
    ],
    palavrasChave: [
      "desentupidora de vaso sanitário",
      "vaso entupido",
      "desentupir vaso",
      "sanitário entupido",
      "desentupimento de vaso",
      "vaso sanitário entupido",
      "emergência vaso entupido",
      "técnico vaso sanitário",
      "como desentupir vaso",
      "vaso não desce água",
    ],
    iconePrincipal: <Trash2 size={28} />,
  },
  "desentupidora-de-ralo": {
    tituloCompleto: "Desentupidora de Ralo",
    nomeVariacoes: [
      "desentupidora de ralo",
      "ralo entupido",
      "desentupir ralo",
      "ralo de box entupido",
      "ralo de garagem entupido",
      "desentupimento de ralo",
      "serviço de ralo",
    ],
    descricaoCurta:
      "Desentupimos ralos de box, garagem, área externa e piscina. Atendimento rápido 24h para eliminar mau cheiro e água parada.",
    descricaoLonga:
      "Ralos entupidos causam água parada, mau cheiro e podem se tornar foco de proliferação de bactérias e insetos. Especialistas em desobstrução de todos os tipos de ralos: box de banheiro, garagens, áreas externas, varandas, piscinas e chuveiros. Nossa equipe chega equipada com ferramentas específicas para cada tipo de ralo, garantindo a limpeza completa e eliminando definitivamente o problema de entupimento.",
    beneficios: [
      {
        titulo: "Eliminação do Mau Cheiro",
        descricao: "Acabe com odores desagradáveis",
        icone: <Filter size={24} />,
      },
      {
        titulo: "Prevenção de Alagamentos",
        descricao: "Evite água parada e danos",
        icone: <AlertTriangle size={24} />,
      },
      {
        titulo: "Higienização Completa",
        descricao: "Limpeza profunda do sistema",
        icone: <CheckCircle size={24} />,
      },
    ],
    sintomas: [
      "água acumulada no box",
      "ralo demora para escoar",
      "mau cheiro persistente",
      "insetos saindo do ralo",
      "barulho de água parada",
    ],
    diferencial:
      "Fazemos a limpeza completa do sifão e da tubulação, não apenas a desobstrução superficial. Isso garante que o problema não volte em pouco tempo e elimina definitivamente os maus odores.",
    tecnicas: [
      "Limpeza de Sifão",
      "Desobstrução com Cabo Especial",
      "Hidrojateamento de Pequeno Porte",
      "Limpeza Química Controlada",
    ],
    palavrasChave: [
      "desentupidora de ralo",
      "ralo entupido",
      "desentupir ralo",
      "ralo de box",
      "ralo de garagem",
      "ralo de área externa",
      "desentupimento de ralo",
      "serviço de desentupimento de ralo",
      "ralo não escoa água",
    ],
    iconePrincipal: <Droplets size={28} />,
  },
  "video-especao": {
    tituloCompleto: "Vídeo Inspeção",
    nomeVariacoes: [
      "vídeo inspeção",
      "videoscopia",
      "câmera de inspeção",
      "inspeção de tubulação",
      "diagnóstico por câmera",
      "vídeo inspeção de esgoto",
    ],
    descricaoCurta:
      "Diagnóstico preciso com câmera de videoscopia. Identificamos rachaduras, obstruções e problemas na tubulação sem quebra-quebra.",
    descricaoLonga:
      "A vídeo inspeção é a tecnologia mais avançada para diagnóstico de problemas em tubulações. Utilizamos câmeras de alta resolução que percorrem todo o interior da tubulação, identificando exatamente o ponto de obstrução, rachaduras, infiltrações, objetos presos e qualquer outro problema. Com esse diagnóstico preciso, podemos recomendar a melhor solução sem intervenções desnecessárias ou gastos extras com quebra-quebra.",
    beneficios: [
      {
        titulo: "Diagnóstico Preciso",
        descricao: "Identificação exata do problema",
        icone: <Camera size={24} />,
      },
      {
        titulo: "Economia",
        descricao: "Evita serviços desnecessários",
        icone: <BadgeCheck size={24} />,
      },
      {
        titulo: "Prevenção",
        descricao: "Identifique problemas futuros",
        icone: <ShieldCheck size={24} />,
      },
    ],
    sintomas: [
      "entupimentos recorrentes",
      "mau cheiro sem causa aparente",
      "infiltrações inexplicáveis",
      "esgoto retornando",
      "barulhos na tubulação",
    ],
    diferencial:
      "Disponibilizamos a gravação da inspeção para você ver exatamente o estado da sua tubulação. Transparência total e embasamento técnico para qualquer decisão de reparo.",
    tecnicas: [
      "Videoscopia de Alta Definição",
      "Inspeção Colorida",
      "Mapeamento de Tubulação",
      "Relatório Técnico Detalhado",
    ],
    palavrasChave: [
      "vídeo inspeção",
      "videoscopia",
      "inspeção de tubulação",
      "câmera para ver entupimento",
      "diagnóstico de entupimento",
      "inspeção de esgoto",
      "câmera de inspeção",
      "videoscopia residencial",
      "inspeção de encanamento",
    ],
    iconePrincipal: <Camera size={28} />,
  },
  "limpeza-de-caixa-de-gordura": {
    tituloCompleto: "Limpeza de Caixa de Gordura",
    nomeVariacoes: [
      "limpeza de caixa de gordura",
      "caixa de gordura entupida",
      "limpar caixa de gordura",
      "serviço de caixa de gordura",
      "desentupir caixa de gordura",
      "limpeza de gordura",
      "manutenção caixa de gordura",
    ],
    descricaoCurta:
      "Limpeza completa de caixa de gordura para residências, restaurantes, condomínios e empresas. Elimine mau cheiro e evite multas.",
    descricaoLonga:
      "A caixa de gordura é essencial para o bom funcionamento do sistema de esgoto, acumulando resíduos gordurosos que se não forem removidos periodicamente causam entupimentos, mau cheiro e podem gerar multas para condomínios e estabelecimentos comerciais. Realizamos a limpeza completa com equipamento de sucção a vácuo, removendo toda a gordura acumulada e resíduos sólidos. Serviço rápido e higienizado, com descarte ambientalmente correto dos resíduos.",
    beneficios: [
      {
        titulo: "Evite Multas",
        descricao: "Regularize seu estabelecimento",
        icone: <ShieldCheck size={24} />,
      },
      {
        titulo: "Elimine Mau Cheiro",
        descricao: "Acabe com odores da cozinha",
        icone: <Filter size={24} />,
      },
      {
        titulo: "Prevenção",
        descricao: "Evite entupimentos futuros",
        icone: <CheckCircle size={24} />,
      },
    ],
    sintomas: [
      "mau cheiro na cozinha",
      "ralo da cozinha entope",
      "água escoa devagar",
      "gordura saindo pelo ralo",
      "entupimentos frequentes",
    ],
    diferencial:
      "Realizamos a limpeza com caminhão equipado com sistema de sucção potente e fazemos a higienização da caixa com produtos específicos, além de orientar sobre a periodicidade ideal para manutenção preventiva.",
    tecnicas: [
      "Sucção a Vácuo",
      "Higienização Química",
      "Descarte Ambiental Correto",
      "Limpeza de Tubulação",
    ],
    palavrasChave: [
      "limpeza de caixa de gordura",
      "caixa de gordura",
      "limpeza de gordura",
      "serviço de limpeza de caixa de gordura",
      "caixa de gordura entupida",
      "limpeza de caixa de gordura preço",
      "como limpar caixa de gordura",
      "manutenção caixa de gordura",
      "limpeza de caixa de gordura restaurante",
      "caixa de gordura residencial",
    ],
    iconePrincipal: <Filter size={28} />,
  },
};

const SolucaoBairroPage: React.FC = () => {
  const params = useParams<{ solucaoSlug: string; bairroSlug: string }>();

  const solucaoSlug = params?.solucaoSlug || "desentupidora";
  const bairroSlug = params?.bairroSlug || "itaim-bibi";

  // Obtém o conteúdo da solução ou usa o padrão (desentupidora)
  const solucaoContent =
    solucaoContentMap[solucaoSlug] || solucaoContentMap["desentupidora"];

  const bairroData = useMemo(() => {
    for (const regiao of SP_REGIONS) {
      const bairro = regiao.bairros.find(b => b.slug === bairroSlug);
      if (bairro) {
        return { nome: bairro.nome, regiao: regiao.nome };
      }
    }
    const fallbackName = bairroSlug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return { nome: fallbackName, regiao: "São Paulo" };
  }, [bairroSlug]);

  // Gera variações de palavras-chave com o bairro
  const generateKeywordVariations = useMemo(() => {
    const baseKeywords = solucaoContent.palavrasChave;
    const variations = [];

    for (const keyword of baseKeywords) {
      variations.push(`${keyword} ${bairroData.nome}`);
      variations.push(`${bairroData.nome} ${keyword}`);
      variations.push(`${keyword} na ${bairroData.regiao}`);
      variations.push(
        `${keyword} em ${bairroData.nome} - ${bairroData.regiao}`
      );
    }

    return [...new Set(variations)];
  }, [solucaoContent.palavrasChave, bairroData]);

  // Gera texto descritivo com o bairro
  const localizedDescription = useMemo(() => {
    return `${solucaoContent.tituloCompleto} em ${bairroData.nome} com atendimento 24h. ${solucaoContent.descricaoCurta} Atendimento prioritário para moradores e comerciantes de ${bairroData.nome} e região da ${bairroData.regiao}.`;
  }, [solucaoContent, bairroData]);

  const localizedLongDescription = useMemo(() => {
    return `${solucaoContent.descricaoLonga} Nosso atendimento em ${bairroData.nome} é diferenciado, com equipes posicionadas estrategicamente na ${bairroData.regiao} para garantir o menor tempo de resposta. Atendemos residências, condomínios, comércios e indústrias em todo ${bairroData.nome} e áreas vizinhas.`;
  }, [solucaoContent, bairroData]);

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["Service", "LocalBusiness"],
      name: `${solucaoContent.tituloCompleto} em ${bairroData.nome}`,
      description: localizedDescription,
      serviceType: solucaoContent.tituloCompleto,
      provider: {
        "@type": "LocalBusiness",
        name: `PROTEC - ${solucaoContent.tituloCompleto}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: bairroData.nome,
          addressRegion: "SP",
          addressCountry: "BR",
        },
        telephone: "+5511948202927",
        priceRange: "R$",
        areaServed: {
          "@type": "Neighborhood",
          name: bairroData.nome,
        },
      },
      areaServed: {
        "@type": "Neighborhood",
        name: bairroData.nome,
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/5511948202927",
        servicePhone: {
          "@type": "ContactPoint",
          telephone: "+5511948202927",
          contactType: "customer service",
        },
      },
    }),
    [solucaoContent, bairroData, localizedDescription]
  );

  const whatsappMessage = `Preciso de ${solucaoContent.tituloCompleto.toLowerCase()} urgente no bairro ${bairroData.nome}`;

  // Gera lista de bairros próximos para SEO
  const bairrosProximos = [
    "Jardim Paulista",
    "Cerqueira César",
    "Pinheiros",
    "Vila Nova Conceição",
    "Moema",
    "Vila Olímpia",
    "Brooklin",
    "Paraíso",
  ];

  return (
    <>
      <Helmet>
        <title>{`${solucaoContent.tituloCompleto} em ${bairroData.nome} - SP | Atendimento 24h | PROTEC`}</title>
        <meta name="description" content={localizedDescription} />
        <meta
          name="keywords"
          content={generateKeywordVariations.slice(0, 20).join(", ")}
        />
        <link
          rel="canonical"
          href={`https://protecdedesentupidora.com.br/solucoes/${solucaoSlug}/${bairroSlug}`}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white selection:bg-secondary/30 flex flex-col">
        <main className="flex-grow">
          {/* Hero Section - Mesmo estilo da Home, hiper localizada */}
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

            {/* Botões: Voltar para Home e Escolher Bairro */}
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

              <Link href={`/solucoes/${solucaoSlug}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-black/60 hover:text-white transition-all"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Escolher Bairro
                </Button>
              </Link>
            </div>

            {/* Breadcrumb */}
            <div className="absolute top-20 left-6 right-6 z-20 flex flex-wrap items-center gap-2 text-xs text-white/70">
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Home className="w-3 h-3" /> Início
              </Link>
              <span>/</span>
              <Link
                href={`/solucoes/${solucaoSlug}`}
                className="hover:text-white transition-colors"
              >
                {solucaoContent.tituloCompleto}
              </Link>
              <span>/</span>
              <span className="text-white font-medium">{bairroData.nome}</span>
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
                    <MapPin className="inline w-3.5 h-3.5 mr-1" /> Atendimento
                    24h na {bairroData.regiao}
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {solucaoContent.tituloCompleto} em{" "}
                    <span className="text-secondary">{bairroData.nome}</span>
                  </h1>

                  <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    {localizedLongDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                      href={`https://wa.me/5511948202927?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-success hover:bg-success/90 text-white font-bold flex items-center justify-center gap-2 h-14 px-8 text-lg shadow-lg shadow-success/20"
                      >
                        <Zap className="w-5 h-5" />
                        Solicitar Técnico Agora
                      </Button>
                    </a>
                    <a href="tel:+5511948202927">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 h-14 px-8 text-lg"
                      >
                        📞 (11) 94820-2927
                      </Button>
                    </a>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-4 pt-6">
                    {[
                      `Atendimento 24h em ${bairroData.nome}`,
                      "Técnico em até 40min",
                      "Orçamento Sem Compromisso",
                      "Garantia por Escrito",
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

          {/* Seção de Sintomas e Problemas Comuns */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div {...fadeIn}>
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-secondary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Sinais de que você precisa de uma{" "}
                      {solucaoContent.tituloCompleto}
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {solucaoContent.sintomas.map((sintoma, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">
                            {sintoma}?
                          </strong>{" "}
                          Em {bairroData.nome}, nosso atendimento é rápido para
                          resolver esse problema.
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  {...fadeIn}
                  className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {solucaoContent.iconePrincipal}
                    <h3 className="text-xl font-bold text-foreground">
                      Por que escolher a PROTEC em {bairroData.nome}?
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        Atuação na {bairroData.regiao} há mais de 10 anos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        Tempo médio de chegada: 40 minutos em {bairroData.nome}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        Bases operacionais próximas à {bairroData.nome}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        Garantia de satisfação em todos os serviços
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Técnicas e Métodos Utilizados */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Nossa Metodologia para {solucaoContent.tituloCompleto} em{" "}
                  {bairroData.nome}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {solucaoContent.diferencial}
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {solucaoContent.tecnicas.map((tecnica, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{tecnica}</h3>
                      <p className="text-xs text-muted-foreground">
                        Aplicado em {bairroData.nome} com equipamentos modernos
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefícios Localizados */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Vantagens de contratar nossa {solucaoContent.tituloCompleto}{" "}
                  em {bairroData.nome}
                </h2>
                <p className="text-muted-foreground">
                  Atendimento localizado com todas as garantias e qualidade
                  PROTEC
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {solucaoContent.beneficios.map((beneficio, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                      {beneficio.icone}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {beneficio.descricao}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Seção de Bairros Atendidos (Linkagem Interna) */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-5xl">
              <motion.div {...fadeIn} className="text-center mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Atendemos também em toda região da {bairroData.regiao}
                </h2>
                <p className="text-muted-foreground">
                  Nossa {solucaoContent.tituloCompleto} está disponível em
                  diversos bairros próximos
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-3">
                {bairrosProximos.map((bairro, idx) => (
                  <Link
                    key={idx}
                    href={`/solucoes/${solucaoSlug}/${bairro.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                      {solucaoContent.tituloCompleto} em {bairro}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final com NAP */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Precisa de {solucaoContent.tituloCompleto} em{" "}
                  {bairroData.nome}?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Atendimento imediato com técnicos a caminho. Ligue agora ou
                  chame no WhatsApp!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <a
                    href={`https://wa.me/5511948202927?text=${encodeURIComponent(whatsappMessage)}`}
                  >
                    <Button
                      size="lg"
                      className="bg-success hover:bg-success/90 text-white font-bold text-lg h-14 px-8"
                    >
                      <WhatsAppIcon size={24} className="mr-2" /> Chamar no
                      WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+5511948202927">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg h-14 px-8"
                    >
                      <Phone className="w-5 h-5 mr-2" /> (11) 94820-2927
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
                  <span>✓ Atendimento 24 horas em {bairroData.nome}</span>
                  <span>✓ Visita técnica gratuita</span>
                  <span>✓ Orçamento sem compromisso</span>
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
