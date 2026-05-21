import React, { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'wouter';
import { X, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import { SP_REGIONS, Regiao } from '../data/sp-regions';

interface AreasAtendidasModalProps {
  isOpen: boolean;
  onClose: () => void;
  solucaoSlug: string;
}

const AreasAtendidasModal: React.FC<AreasAtendidasModalProps> = ({
  isOpen,
  onClose,
  solucaoSlug,
}) => {
  const [, setLocation] = useLocation();
  const [regiaoSelecionada, setRegiaoSelecionada] = useState<Regiao | null>(null);

  const handleClose = useCallback(() => {
    setRegiaoSelecionada(null);
    onClose();
  }, [onClose]);

  const handleSelectRegiao = useCallback((regiao: Regiao) => {
    setRegiaoSelecionada(regiao);
  }, []);

  const handleBackToRegioes = useCallback(() => {
    setRegiaoSelecionada(null);
  }, []);

  const handleNavigateToBairro = useCallback(
    (bairroSlug: string) => {
      // Pré-fecha o modal para percepção instantânea de performance
      handleClose();
      // Navega para a landing page local específica
      setLocation(`/solucoes/${solucaoSlug}/bairro/${bairroSlug}`);
    },
    [handleClose, setLocation, solucaoSlug]
  );

  // Evita re-cálculos de UI caso o modal esteja fechado
  const modalContent = useMemo(() => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
        <div 
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header do Modal */}
          <header className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              {regiaoSelecionada ? (
                <button
                  onClick={handleBackToRegioes}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Voltar para regiões"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
              ) : (
                <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
              )}
              <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                {regiaoSelecionada ? `Bairros na ${regiaoSelecionada.nome}` : 'Selecione a Região'}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </header>

          {/* Corpo do Modal - Scrollable */}
          <div className="overflow-y-auto p-5 custom-scrollbar">
            {!regiaoSelecionada ? (
              <ul className="space-y-3">
                {SP_REGIONS.map((regiao) => (
                  <li key={regiao.id}>
                    <button
                      onClick={() => handleSelectRegiao(regiao)}
                      className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <span className="font-semibold text-gray-800 group-hover:text-primary">
                        {regiao.nome}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regiaoSelecionada.bairros.map((bairro) => (
                  <li key={bairro.slug}>
                    <button
                      onClick={() => handleNavigateToBairro(bairro.slug)}
                      className="w-full text-left p-3 rounded-lg border border-gray-100 hover:border-primary hover:bg-primary/5 hover:text-primary font-medium text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {bairro.nome}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }, [isOpen, regiaoSelecionada, handleClose, handleSelectRegiao, handleBackToRegioes, handleNavigateToBairro]);

  return modalContent;
};

export default React.memo(AreasAtendidasModal);