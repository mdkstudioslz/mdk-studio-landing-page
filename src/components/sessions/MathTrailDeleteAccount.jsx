import { useEffect } from 'react';
import {
  FiTrash2,
  FiSmartphone,
  FiCloud,
  FiMail,
  FiCheckCircle,
  FiShield,
  FiClock,
  FiHelpCircle
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const MathTrailDeleteAccount = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const step1Items = t('mathtrailDeleteAccount.step1Items', { returnObjects: true }) || [];
  const step2Items = t('mathtrailDeleteAccount.step2Items', { returnObjects: true }) || [];
  const dataDeletedList = t('mathtrailDeleteAccount.dataDeletedList', { returnObjects: true }) || [];
  const dataRetainedList = t('mathtrailDeleteAccount.dataRetainedList', { returnObjects: true }) || [];

  const mailtoLink = `mailto:contato@mdkstudio.com.br?subject=${t('mathtrailDeleteAccount.emailSubject')}&body=${t('mathtrailDeleteAccount.emailBody')}`;

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* ── Ambient Background Glows ─────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-rose-500/10 via-emerald-500/5 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-24">
        {/* ── Header ─────────────────────────────────────────── */}
        <header className="border-b border-white/10 pb-16 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              {t('mathtrailDeleteAccount.heroBadge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
              {t('mathtrailDeleteAccount.heroTitle1')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-amber-400">
                {t('mathtrailDeleteAccount.heroTitle2')}
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed mb-6 [&_b]:text-white [&_b]:font-medium"
              dangerouslySetInnerHTML={{ __html: t('mathtrailDeleteAccount.heroSubtitle') }}
            />

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
              <span>{t('mathtrailDeleteAccount.lastUpdated')} <strong className="text-gray-400 font-normal">{t('mathtrailDeleteAccount.lastUpdatedDate')}</strong></span>
              <span>•</span>
              <span>MathTrail (com.mathtrail)</span>
              <span>•</span>
              <span>Desenvolvedor: MDK Studio</span>
            </div>
          </div>

          {/* Lead Summary */}
          <div className="mt-10 border-l-2 border-rose-400/80 pl-6 py-2">
            <p className="text-xs uppercase tracking-widest text-rose-400 font-medium mb-1">
              {t('mathtrailDeleteAccount.summaryTitle')}
            </p>
            <p
              className="text-base sm:text-lg text-gray-300 font-light leading-relaxed [&_b]:text-white [&_b]:font-semibold"
              dangerouslySetInnerHTML={{ __html: t('mathtrailDeleteAccount.summaryText') }}
            />
          </div>
        </header>

        {/* ── Section 1: How to request deletion ──────────────── */}
        <section className="space-y-12 mb-20">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight flex items-center gap-3">
              <FiTrash2 className="w-6 h-6 text-rose-400" />
              {t('mathtrailDeleteAccount.stepsTitle')}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {t('mathtrailDeleteAccount.stepsSubtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1: Local Data */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-medium text-white flex items-center gap-2">
                <FiSmartphone className="w-5 h-5 text-emerald-400" />
                {t('mathtrailDeleteAccount.step1Title')}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {t('mathtrailDeleteAccount.step1Desc')}
              </p>
              <ul className="space-y-2.5 pl-4 border-l border-white/10">
                {step1Items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono text-xs mt-1">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2: Cloud Account */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-medium text-white flex items-center gap-2">
                <FiCloud className="w-5 h-5 text-cyan-400" />
                {t('mathtrailDeleteAccount.step2Title')}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {t('mathtrailDeleteAccount.step2Desc')}
              </p>
              <ul className="space-y-2.5 pl-4 border-l border-white/10">
                {step2Items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono text-xs mt-1">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Direct Mail Button */}
              <div className="pt-4">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-rose-500/20"
                >
                  <FiMail className="w-4 h-4" />
                  {t('mathtrailDeleteAccount.emailButton')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Data Handling & Retention ────────────── */}
        <section className="space-y-12 mb-20">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight flex items-center gap-3">
              <FiShield className="w-6 h-6 text-emerald-400" />
              {t('mathtrailDeleteAccount.dataHandlingTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Deleted Data */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                {t('mathtrailDeleteAccount.dataDeletedTitle')}
              </h3>
              <ul className="space-y-2.5 pl-4 border-l border-rose-500/20">
                {dataDeletedList.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <FiCheckCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retained Data */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                {t('mathtrailDeleteAccount.dataRetainedTitle')}
              </h3>
              <ul className="space-y-2.5 pl-4 border-l border-white/10">
                {dataRetainedList.map((item, idx) => (
                  <li key={idx} className="text-gray-400 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Section 3: Timeframe & Support ──────────────────── */}
        <section className="border-t border-white/10 pt-12 space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiClock className="w-5 h-5 text-amber-400" />
              {t('mathtrailDeleteAccount.timeframeTitle')}
            </h3>
            <p
              className="text-gray-400 text-sm sm:text-base leading-relaxed pl-7 [&_b]:text-white [&_b]:font-medium"
              dangerouslySetInnerHTML={{ __html: t('mathtrailDeleteAccount.timeframeText') }}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiHelpCircle className="w-5 h-5 text-cyan-400" />
              {t('mathtrailDeleteAccount.contactSupportTitle')}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base pl-7">
              {t('mathtrailDeleteAccount.contactSupportText')}{' '}
              <a
                href="mailto:contato@mdkstudio.com.br"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 font-medium"
              >
                {t('mathtrailDeleteAccount.contactEmail')}
              </a>
            </p>
          </div>
        </section>

        {/* ── Footer Link ──────────────────────────────────────── */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MDK Studio. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href={`/${currentLang}/mathtrail/privacy-policy`}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              Política de Privacidade do MathTrail
            </a>
            <span>•</span>
            <a
              href={`/${currentLang}`}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              mdkstudio.com.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathTrailDeleteAccount;
