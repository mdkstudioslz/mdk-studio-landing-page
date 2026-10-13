import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiEye, FiDatabase, FiTrash2, FiMail, FiAlertCircle, FiLock, FiRefreshCw } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
};

// Icons are mapped by section index — order must match the sections array in the JSON files
const sectionIcons = [FiDatabase, FiEye, FiShield, FiLock, FiTrash2, FiRefreshCw, FiMail];

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = t('privacy.sections', { returnObjects: true });

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
            {t('privacy.heroTitle1')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t('privacy.heroTitle2')}
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-4 [&_b]:text-white [&_b]:font-medium"
            dangerouslySetInnerHTML={{ __html: t('privacy.heroSubtitle') }}
          />

          <p className="text-gray-600 text-sm">
            {t('privacy.lastUpdated')}{' '}
            <span className="text-gray-400">{t('privacy.lastUpdatedDate')}</span>
          </p>
        </motion.div>
      </section>

      {/* ── Quick summary ────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-16"
      >
        <div className="flex gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
          <FiAlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-emerald-400">{t('privacy.quickSummaryLabel')}</strong>{' '}
            <span
              className="[&_b]:text-white [&_b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: t('privacy.quickSummaryText') }}
            />
          </p>
        </div>
      </motion.div>

      {/* ── Sections ─────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
        {sections.map((section, sIdx) => {
          const Icon = sectionIcons[sIdx] ?? FiShield;
          return (
            <motion.div
              key={section.id}
              id={section.id}
              variants={fadeUp}
              custom={sIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-emerald-500/20 transition-colors duration-500"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center gap-4 px-8 py-6 border-b border-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Content */}
              <div className="relative px-8 py-6 space-y-6">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className={iIdx > 0 ? 'pt-6 border-t border-white/5' : ''}>
                    <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-widest mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.text}
                      {item.email && (
                        <>
                          {' '}
                          <a
                            href={`mailto:${item.email}`}
                            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors duration-200"
                          >
                            {item.email}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Footer strip ─────────────────────────────────── */}
      <div className="border-t border-white/10 py-10 text-center px-6">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MDK Studio. {t('privacy.footerRights')} &nbsp;|&nbsp;{' '}
          <a
            href={`/${currentLang}`}
            className="text-gray-500 hover:text-emerald-400 transition-colors duration-200"
          >
            mdkstudio.com.br
          </a>
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Enigma Case · Google Play Store
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
