import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './components/sessions/Home';
import About from './components/sessions/About';
import HowWeWork from './components/sessions/HowWeWork';
import Faq from './components/sessions/Faq';
import { Servicos } from './components/sessions/Servicos';
import ProjetosSection from './components/sessions/ProjetosSection';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const seoData = {
  pt: {
    title: "MDK Studio | Criação de Sites, Apps e Sistemas Web",
    description: "A MDK Studio é especializada no desenvolvimento de aplicativos (mobile), sites de alta conversão, sistemas sob medida e UX/UI Design. Transforme a presença digital da sua empresa.",
    keywords: "desenvolvimento de aplicativos, criação de apps, desenvolvimento mobile, react native, app android ios, criação de sites, desenvolvimento web, sistemas sob medida, ux ui design, agência digital, desenvolvimento de software, mdk studio"
  },
  en: {
    title: "MDK Studio | Mobile Apps & Web Development",
    description: "MDK Studio specializes in mobile app development, custom web systems, high-converting websites, and UX/UI Design. Boost your company's digital presence today.",
    keywords: "mobile app development, custom app creation, app developer, react native, android ios app, website design, web development, custom systems, ux ui design, digital agency, software development, mdk studio"
  },
  es: {
    title: "MDK Studio | Creación de Apps, Sitios y Sistemas",
    description: "MDK Studio se especializa en el desarrollo de aplicaciones móviles (apps), sitios web, sistemas a medida y Diseño UX/UI. Transforme la presencia digital de su empresa.",
    keywords: "desarrollo de aplicaciones, creación de apps, desarrollo mobile, react native, app android ios, creación de sitios web, desarrollo web, sistemas a medida, diseño ux ui, agencia digital, desarrollo de software, mdk studio"
  }
};

function App() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';
  const seo = seoData[currentLang] || seoData.pt;

  useEffect(() => {
    const availableLanguages = ["en", "pt", "es"];
    if (lang && availableLanguages.includes(lang.toLowerCase())) {
      if (i18n.language !== lang.toLowerCase()) {
        i18n.changeLanguage(lang.toLowerCase());
      }
    }
  }, [lang, i18n]);

  const siteUrl = `https://mdkstudio.com.br/${currentLang}`;

  return (
    <>
      <Helmet>
        <html lang={currentLang === 'pt' ? 'pt-BR' : currentLang} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="pt" href="https://mdkstudio.com.br/pt" />
        <link rel="alternate" hrefLang="en" href="https://mdkstudio.com.br/en" />
        <link rel="alternate" hrefLang="es" href="https://mdkstudio.com.br/es" />
        <link rel="alternate" hrefLang="x-default" href="https://mdkstudio.com.br/pt" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="https://mdkstudio.com.br/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MDK Studio — Sites, apps e sistemas sob medida." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://mdkstudio.com.br/og-image.png" />
        <meta name="twitter:image:alt" content="MDK Studio — Sites, apps e sistemas sob medida." />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "MDK Studio",
            "url": siteUrl,
            "logo": "https://mdkstudio.com.br/favicon.webp",
            "image": "https://mdkstudio.com.br/og-image.png",
            "sameAs": [
              "https://www.instagram.com/mdkstudioslz/",
              "https://www.linkedin.com/company/mdk-studioslz/",
              "https://github.com/mdkstudioslz"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-98-98160-0041",
              "contactType": "sales",
              "email": "contato@mdkstudio.com.br",
              "areaServed": "BR",
              "availableLanguage": ["Portuguese", "English", "Spanish"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "São Luís",
              "addressRegion": "MA",
              "addressCountry": "BR"
            },
            "description": seo.description
          })}
        </script>
      </Helmet>
      <Header/>
      <main>
        <Home/>
        <Servicos/>
        <HowWeWork />
        <ProjetosSection />
        <About/>
        <Faq/>
      </main>
      <Footer/>
      <WhatsAppButton />
    </>
  );
}

export default App;
