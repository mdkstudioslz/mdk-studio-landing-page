import { useState } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";
import { FormWpp } from "./FormWpp";
import { useTranslation } from "react-i18next";

const ModalForm = ({ buttonText, buttonClassName, icon = true }) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const iconSize = 30;

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={buttonClassName || "relative z-10 px-8 py-4 text-lg font-medium text-white rounded-full bg-brand-secondary/10 border border-brand-secondary/50 overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:bg-brand-secondary/20 transition-all duration-300 group inline-flex items-center"}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-accent opacity-0 group-hover:opacity-20 transition duration-300 blur-sm"></span>
        <span className="relative z-10 text-white font-semibold flex items-center gap-3">
          {buttonText || t("modalForm.buttonLabel")}
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-5 h-5 transition-transform duration-300 transform group-hover:rotate-90 fill-white"
            >
              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
            </svg>
          )}
        </span>
        <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-brand-secondary/80 transition duration-500" />
      </button>

      {showModal && createPortal(
        <div className="fixed inset-0 z-[100] flex justify-center items-center bg-black/60 backdrop-blur-md px-4">
          <div className="glass-effect rounded-3xl p-8 md:p-12 w-full max-w-4xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden animate-fade-in">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-white text-3xl md:text-5xl font-display font-medium tracking-tight">
                {t("modalForm.serviceInfoTitle")}
              </h3>
              <button className="text-gray-500 hover:text-white transition-colors duration-300" onClick={handleModalClose}>
                <IoCloseCircle size={iconSize} />
              </button>
            </div>
            <div className="relative z-10">
              <FormWpp
                onSuccess={() => setShowSuccessModal(true)}
                onClose={handleModalClose}
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {showSuccessModal && createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-[110] px-4">
          <div className="glass-effect border border-brand-accent/20 rounded-2xl p-8 max-w-sm w-full animate-fade-in relative overflow-hidden text-center shadow-[0_0_40px_rgba(16,185,129,0.2)]">
            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />
            <h2 className="text-2xl font-display font-medium text-white mb-2 relative z-10">
              {t("modalForm.successTitle")}
            </h2>
            <p className="text-brand-accent relative z-10">
              {t("modalForm.successMessage")}
            </p>
            <div className="mt-8 relative z-10">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-brand-accent text-black font-semibold py-3 px-4 rounded-xl hover:bg-brand-accent/80 transition-all duration-300"
              >
                {t("modalForm.closeButton")}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

ModalForm.propTypes = {
  buttonText: PropTypes.node,
  buttonClassName: PropTypes.string,
  icon: PropTypes.bool,
};

export default ModalForm;
