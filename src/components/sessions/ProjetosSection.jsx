import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import data from '/data.json';

const ProjetosSection = () => {
  const { t } = useTranslation();

  const projetos = data.Projetos.map(projeto => ({
    name: projeto.empresa,
    image: projeto.imagem,
    link: projeto.link,
  }));

  return (
    <section id="projects" className="bg-black py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-16 tracking-tight"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="flex flex-col w-full mt-20 border-t border-white/10 text-left">
          {projetos.map((projeto, index) => (
            <motion.a
              key={index}
              href={projeto.link || '#'}
              target={projeto.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex items-center justify-between py-12 md:py-16 border-b border-white/10 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center px-4 md:px-8 w-full justify-between lg:justify-start">
                <div className="flex items-center">
                  <span className="text-gray-600 font-display text-xl md:text-2xl mr-8 font-light hidden md:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-secondary group-hover:to-brand-accent transition-all duration-500 uppercase tracking-tighter">
                    {projeto.name}
                  </h3>
                </div>

                {/* Mobile image fallback */}
                <div className="lg:hidden opacity-50 group-hover:opacity-100 transition-opacity duration-300 ml-4">
                   <img
                    src={projeto.image}
                    alt={projeto.name}
                    className="h-12 sm:h-16 object-contain"
                  />
                </div>
              </div>

              {/* Reveal Image on hover for Desktop */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 scale-95 group-hover:scale-100 transition-all duration-700 ease-out hidden lg:block">
                <img
                  src={projeto.image}
                  alt={projeto.name}
                  className="h-40 xl:h-56 object-contain drop-shadow-[0_20px_50px_rgba(139,92,246,0.3)]"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosSection;