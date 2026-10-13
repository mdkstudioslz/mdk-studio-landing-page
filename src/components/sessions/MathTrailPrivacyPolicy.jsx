import { useEffect, useMemo, useState } from 'react';
import {
  FiShield,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiEyeOff,
  FiLock,
  FiTrash2,
  FiSmile,
  FiRefreshCw,
  FiMail,
  FiChevronRight
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const sectionIcons = [
  FiDatabase,   // Coleta
  FiCpu,        // Uso
  FiCloud,      // Terceiros / Infra
  FiEyeOff,     // Anúncios / Não comercialização
  FiLock,       // Segurança
  FiTrash2,     // Direitos / Exclusão
  FiSmile,      // Crianças e Jovens
  FiRefreshCw,  // Atualizações
  FiMail        // Contato
];

const MathTrailPrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = useMemo(() => {
    const translatedSections = t('mathtrailPrivacy.sections', { returnObjects: true });
    return Array.isArray(translatedSections) ? translatedSections : [];
  }, [t]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* ── Ambient Background Glows ─────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-24">
        {/* ── Header / Editorial Hero ─────────────────────────── */}
        <header className="border-b border-white/10 pb-16 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              MathTrail · Google Play Store
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
              {t('mathtrailPrivacy.heroTitle1')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {t('mathtrailPrivacy.heroTitle2')}
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed mb-6 [&_b]:text-white [&_b]:font-medium"
              dangerouslySetInnerHTML={{ __html: t('mathtrailPrivacy.heroSubtitle') }}
            />

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
              <span>{t('mathtrailPrivacy.lastUpdated')} <strong className="text-gray-400 font-normal">{t('mathtrailPrivacy.lastUpdatedDate')}</strong></span>
              <span>•</span>
              <span>Versão 1.0</span>
              <span>•</span>
              <span>MDK Studio</span>
            </div>
          </div>

          {/* Lead Summary */}
          <div className="mt-10 border-l-2 border-emerald-400/80 pl-6 py-2">
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-medium mb-1">
              {t('mathtrailPrivacy.quickSummaryLabel')}
            </p>
            <p
              className="text-base sm:text-lg text-gray-300 font-light leading-relaxed [&_b]:text-white [&_b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: t('mathtrailPrivacy.quickSummaryText') }}
            />
          </div>
        </header>

        {/* ── Main Layout: Sidebar Navigation + Flowing Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Desktop Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-6 pr-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                  Navegação no Documento
                </p>
                <nav className="space-y-1">
                  {Array.isArray(sections) && sections.map((sec, idx) => {
                    const isCurrent = activeSection === sec.id;
                    const num = String(idx + 1).padStart(2, '0');
                    return (
                      <button
                        key={sec.id || idx}
                        onClick={() => scrollTo(sec.id)}
                        className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                          isCurrent
                            ? 'text-emerald-400 font-medium bg-emerald-500/10 border-l-2 border-emerald-400 pl-2.5'
                            : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <span className="truncate">
                          <span className="text-gray-600 font-mono text-xs mr-2">{num}.</span>
                          {sec.title}
                        </span>
                        {isCurrent && <FiChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Contact box badge */}
              <div className="pt-6 border-t border-white/5 text-xs text-gray-500 space-y-2">
                <p>Precisa de suporte jurídico ou técnico?</p>
                <a
                  href="mailto:contato@mdkstudio.com.br"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <FiMail className="w-3.5 h-3.5" />
                  contato@mdkstudio.com.br
                </a>
              </div>
            </div>
          </aside>

          {/* Main Editorial Content Stream (No boxy cards) */}
          <main className="lg:col-span-8 space-y-16">
            {Array.isArray(sections) && sections.map((section, sIdx) => {
              const Icon = sectionIcons[sIdx] ?? FiShield;
              const num = String(sIdx + 1).padStart(2, '0');

              return (
                <article
                  key={section.id || sIdx}
                  id={section.id}
                  className="scroll-mt-28 group"
                >
                  {/* Section Title with subtle index indicator */}
                  <div className="flex items-baseline gap-4 pb-4 border-b border-white/10 mb-8">
                    <span className="font-mono text-emerald-400 font-semibold text-lg sm:text-xl shrink-0">
                      {num}.
                    </span>
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-emerald-400/80" />
                      <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Flowing Section Content */}
                  <div className="space-y-8 pl-0 sm:pl-9">
                    {section.items?.map((item, iIdx) => (
                      <div key={iIdx} className="space-y-2">
                        <h3 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base pl-3.5 border-l border-white/10">
                          {item.text}
                          {item.email && (
                            <>
                              {' '}
                              <a
                                href={`mailto:${item.email}`}
                                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
                              >
                                {item.email}
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </main>
        </div>

        {/* ── Bottom Section ───────────────────────────────────── */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MDK Studio. {t('mathtrailPrivacy.footerRights')}</p>
          <div className="flex items-center gap-6">
            <a
              href={`/${currentLang}`}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              mdkstudio.com.br
            </a>
            <span>•</span>
            <span>MathTrail · Google Play Store</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathTrailPrivacyPolicy;
