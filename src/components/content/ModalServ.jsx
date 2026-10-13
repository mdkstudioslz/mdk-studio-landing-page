import { useState } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ModalServ = ({ servico, onClose }) => {

    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);

    const key = servico.key;
    const tipo = t(`services.items.${key}.type`);
    const descricao = t(`services.items.${key}.description`);

    const handleModalClose = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <>
            <button
                className="group flex items-center gap-2 text-sm md:text-base font-semibold text-gray-400 hover:text-brand-accent transition-all duration-300 uppercase tracking-widest mt-2"
                onClick={() => setShowModal(true)}
            >
                {t("services.readMore")}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="stroke-current group-hover:translate-x-2 transition-transform duration-300">
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M5 12h14M12 5l7 7-7 7"
                    ></path>
                </svg>
            </button>

            {showModal && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-500 px-4">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 w-full max-w-2xl border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] animate-fade-in relative overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <h3 className="text-white text-3xl md:text-5xl font-display font-medium pr-8">
                                {tipo}
                            </h3>
                            <button onClick={handleModalClose} className="text-gray-500 hover:text-white transition-colors duration-300 absolute right-0 top-0">
                                <IoCloseCircle size={32} />
                            </button>
                        </div>
                        <div 
                            className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed relative z-10"
                            dangerouslySetInnerHTML={{ __html: descricao }}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

ModalServ.propTypes = {
  servico: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalServ;
