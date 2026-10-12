import React from 'react';
import logo from '../../assets/image.webp';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : 'pt';

  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 pt-16 pb-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Col 1: Brand & Description & Socials */}
        <div className="flex flex-col space-y-6">
          <a href={`/${currentLang}#home`} className="inline-block">
            <img className="h-10 w-auto" src={logo} alt="MDK Studio Logo" />
          </a>
          <p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/mdkstudioslz/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/mdk-studioslz/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="https://github.com/mdkstudioslz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Col 2: Contact Info */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{t('form.contactUs')}</h4>
          <div className="space-y-4 text-sm font-light">
            <div className="flex items-start space-x-3 group">
              <FaEnvelope className="w-4 h-4 text-gray-500 group-hover:text-brand-accent mt-1 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 uppercase tracking-wider">{t('form.email.title')}</span>
                <a href="mailto:contato@mdkstudio.com.br" className="text-white group-hover:text-brand-accent transition-colors break-all">
                  contato@mdkstudio.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <FaPhone className="w-4 h-4 text-gray-500 group-hover:text-brand-accent mt-1 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 uppercase tracking-wider">{t('form.phone.title')}</span>
                <a href="tel:+5598981600041" className="text-white group-hover:text-brand-accent transition-colors">
                  {t('form.phone.number')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <a href={`/${currentLang}#servicos`} className="hover:text-brand-accent transition-colors duration-200">{t('header.services')}</a>
            </li>
            <li>
              <a href={`/${currentLang}#projects`} className="hover:text-brand-accent transition-colors duration-200">{t('header.gallery')}</a>
            </li>
            <li>
              <a href={`/${currentLang}#about`} className="hover:text-brand-accent transition-colors duration-200">{t('header.about')}</a>
            </li>
            <li>
              <a href={`/${currentLang}#FAQ`} className="hover:text-brand-accent transition-colors duration-200">{t('header.faq')}</a>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{t('footer.legal')}</h4>
          <div className="space-y-1 text-sm font-light">
            <p>MDK Studio LTDA</p>
            <p>CNPJ: 31.979.470/0001-72</p>
          </div>
          <ul className="space-y-2 text-sm font-light">
            <li>
              <a href={`/${currentLang}/privacy-policy`} className="hover:text-brand-accent transition-colors duration-200">
                {t('footer.privacyPolicy')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} MDK Studio. {t('footer.rights')}</p>
        <p className="font-light">São Luís - MA, Brasil</p>
      </div>
    </footer>
  );
};

export default Footer;
