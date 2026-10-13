import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PrivacyHeader from './components/common/PrivacyHeader';
import MathTrailDeleteAccount from './components/sessions/MathTrailDeleteAccount';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const MathTrailDeleteAccountApp = () => {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';
  const htmlLang = currentLang === 'pt' ? 'pt-BR' : currentLang;

  useEffect(() => {
    const availableLanguages = ["en", "pt", "es"];
    if (lang && availableLanguages.includes(lang.toLowerCase())) {
      if (i18n.language !== lang.toLowerCase()) {
        i18n.changeLanguage(lang.toLowerCase());
      }
    }
  }, [lang, i18n]);

  const pageUrl = `https://mdkstudio.com.br/${currentLang}/mathtrail/delete-account`;

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{t('mathtrailDeleteAccount.pageTitle')}</title>
        <meta name="description" content={t('mathtrailDeleteAccount.metaDescription')} />
        <meta name="keywords" content={t('mathtrailDeleteAccount.keywords')} />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical Link */}
        <link rel="canonical" href={pageUrl} />

        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="pt" href="https://mdkstudio.com.br/pt/mathtrail/delete-account" />
        <link rel="alternate" hrefLang="en" href="https://mdkstudio.com.br/en/mathtrail/delete-account" />
        <link rel="alternate" hrefLang="es" href="https://mdkstudio.com.br/es/mathtrail/delete-account" />
        <link rel="alternate" hrefLang="x-default" href="https://mdkstudio.com.br/pt/mathtrail/delete-account" />
      </Helmet>
      <PrivacyHeader />
      <main>
        <MathTrailDeleteAccount />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default MathTrailDeleteAccountApp;
