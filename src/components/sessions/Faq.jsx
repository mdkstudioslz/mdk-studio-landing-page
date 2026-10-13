import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = t('faqs.questions', { returnObjects: true });

  return (
    <section id="FAQ" className="bg-black text-white py-24 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-16 tracking-tight"
        >
          {t('faqs.title')}
        </motion.h2>

        <div className="border-t border-white/10">
          {questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.01]"
              >
                <button
                  onClick={() => handleClick(index)}
                  className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl sm:text-2xl font-light tracking-tight group-hover:text-brand-accent transition-colors duration-300 pr-6">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-brand-accent group-hover:bg-brand-accent/10 transition-all duration-300 text-gray-400 group-hover:text-brand-accent">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center"
                    >
                      {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-gray-400 font-light text-base sm:text-lg leading-relaxed max-w-3xl">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
