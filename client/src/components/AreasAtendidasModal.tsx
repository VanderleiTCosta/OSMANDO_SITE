import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useLocation } from 'wouter';
import { X, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobile, setIsMobile] = useState(false);

  // Detecta dispositivo mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Previne scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      handleClose();
      setLocation(`/solucoes/${solucaoSlug}/bairro/${bairroSlug}`);
    },
    [handleClose, setLocation, solucaoSlug]
  );

  // Fecha ao clicar no overlay
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 sm:backdrop-blur-sm"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 300,
              duration: 0.3
            }}
            className="relative w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]"
          >
            {/* Header do Modal - Mobile First */}
            <header className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 bg-white sm:bg-gray-50">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                {regiaoSelecionada ? (
                  <button
                    onClick={handleBackToRegioes}
                    className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary active:bg-gray-200"
                    aria-label="Voltar para regiões"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                  </button>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                  </div>
                )}
                <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                  {regiaoSelecionada 
                    ? isMobile 
                      ? regiaoSelecionada.nome.split(' ')[0]
                      : `Bairros na ${regiaoSelecionada.nome}`
                    : 'Atendimento em SP'}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 -mr-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-100"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </header>

            {/* Corpo do Modal - Scrollable com otimização mobile */}
            <div className="overflow-y-auto p-4 sm:p-5 custom-scrollbar">
              {!regiaoSelecionada ? (
                <div className="space-y-2 sm:space-y-3">
                  {SP_REGIONS.map((regiao, index) => (
                    <motion.button
                      key={regiao.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelectRegiao(regiao)}
                      className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group focus:outline-none focus:ring-2 focus:ring-primary active:bg-primary/10"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        <span className="font-semibold text-gray-800 group-hover:text-primary text-sm sm:text-base">
                          {regiao.nome}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs text-gray-400">
                          {regiao.bairros.length} {regiao.bairros.length === 1 ? 'bairro' : 'bairros'}
                        </span>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {/* Indicador de quantidade */}
                  <div className="mb-3 pb-2 border-b border-gray-100">
                    <p className="text-xs text-gray-500">
                      {regiaoSelecionada.bairros.length} bairros atendidos
                    </p>
                  </div>
                  
                  {regiaoSelecionada.bairros.map((bairro, index) => (
                    <motion.button
                      key={bairro.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                      onClick={() => handleNavigateToBairro(bairro.slug)}
                      className="w-full text-left p-3 sm:p-3.5 rounded-lg border border-gray-100 hover:border-primary hover:bg-primary/5 hover:text-primary font-medium text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary active:bg-primary/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base">{bairro.nome}</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer com CTA rápido (mobile) */}
            <div className="sticky bottom-0 p-4 border-t border-gray-100 bg-white sm:hidden">
              <a href="https://wa.me/5511948202927" className="block">
                <button className="w-full py-3 bg-success text-white font-bold rounded-lg flex items-center justify-center gap-2 text-sm active:scale-98 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.032 2.001c-5.516 0-10 4.484-10 10 0 1.852.505 3.589 1.383 5.086L2.001 22l5.003-1.315c1.472.848 3.145 1.316 5.028 1.316 5.516 0 10-4.484 10-10s-4.484-10-10-10z" />
                  </svg>
                                  Falar com Especialista
                                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(AreasAtendidasModal);