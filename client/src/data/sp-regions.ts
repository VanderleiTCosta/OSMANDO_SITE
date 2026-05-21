export interface Bairro {
  nome: string;
  slug: string;
}

export interface Regiao {
  id: string;
  nome: string;
  bairros: Bairro[];
}

export const SP_REGIONS: Regiao[] = [
  {
    id: 'zona-norte',
    nome: 'Zona Norte',
    bairros: [
      { nome: 'Santana', slug: 'santana' },
      { nome: 'Tucuruvi', slug: 'tucuruvi' },
      { nome: 'Casa Verde', slug: 'casa-verde' },
      { nome: 'Vila Maria', slug: 'vila-maria' },
      { nome: 'Freguesia do Ó', slug: 'freguesia-do-o' },
    ],
  },
  {
    id: 'zona-sul',
    nome: 'Zona Sul',
    bairros: [
      { nome: 'Santo Amaro', slug: 'santo-amaro' },
      { nome: 'Moema', slug: 'moema' },
      { nome: 'Vila Mariana', slug: 'vila-mariana' },
      { nome: 'Jabaquara', slug: 'jabaquara' },
      { nome: 'Ipiranga', slug: 'ipiranga' },
    ],
  },
  {
    id: 'zona-leste',
    nome: 'Zona Leste',
    bairros: [
      { nome: 'Tatuapé', slug: 'tatuape' },
      { nome: 'Mooca', slug: 'mooca' },
      { nome: 'Penha', slug: 'penha' },
      { nome: 'Itaquera', slug: 'itaquera' },
      { nome: 'Vila Prudente', slug: 'vila-prudente' },
    ],
  },
  {
    id: 'zona-oeste',
    nome: 'Zona Oeste',
    bairros: [
      { nome: 'Pinheiros', slug: 'pinheiros' },
      { nome: 'Lapa', slug: 'lapa' },
      { nome: 'Butantã', slug: 'butanta' },
      { nome: 'Perdizes', slug: 'perdizes' },
      { nome: 'Vila Madalena', slug: 'vila-madalena' },
    ],
  },
  {
    id: 'centro',
    nome: 'Centro',
    bairros: [
      { nome: 'Sé', slug: 'se' },
      { nome: 'República', slug: 'republica' },
      { nome: 'Bela Vista', slug: 'bela-vista' },
      { nome: 'Consolação', slug: 'consolacao' },
      { nome: 'Liberdade', slug: 'liberdade' },
    ],
  },
];