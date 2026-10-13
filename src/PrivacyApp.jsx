import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PrivacyHeader from './components/common/PrivacyHeader';
import PrivacyPolicy from './components/sessions/PrivacyPolicy';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const PrivacyApp = () => {
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

  const pageUrl = `https://mdkstudio.com.br/${currentLang}/privacy-policy`;

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{t('privacy.pageTitle')}</title>
        <meta name="description" content={t('privacy.metaDescription')} />
        <meta name="keywords" content={t('privacy.keywords')} />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical Link */}
        <link rel="canonical" href={pageUrl} />

        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="pt" href="https://mdkstudio.com.br/pt/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://mdkstudio.com.br/en/privacy-policy" />
        <link rel="alternate" hrefLang="es" href="https://mdkstudio.com.br/es/privacy-policy" />
        <link rel="alternate" hrefLang="x-default" href="https://mdkstudio.com.br/pt/privacy-policy" />
      </Helmet>
      <PrivacyHeader />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PrivacyApp;
