import ModalForm from '../content/ModalForm';
import data from '/data.json';
import { useTranslation } from 'react-i18next';

export const Servicos = () => {
  const { t } = useTranslation();

  return (
    <section id="servicos" aria-labelledby="services-title" className="bg-black text-white py-20 sm:py-24 px-6 sm:px-12 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 id="services-title" className="text-4xl sm:text-5xl font-display font-semibold tracking-tight">{t('services.title')}</h2>
          <p className="mt-5 text-gray-400 text-lg leading-relaxed">{t('services.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mt-12">
          {data.Servicos.map(({ key }) => (
            <article key={key} className="border-t border-white/10 py-8 sm:py-10">
              <h3 className="text-2xl font-display font-medium mb-3">{t(`services.items.${key}.type`)}</h3>
              <p className="max-w-md text-gray-400 leading-relaxed">{t(`services.items.${key}.description`)}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <ModalForm
            buttonText={t('services.contact')}
            icon={false}
            buttonClassName="relative inline-flex items-center overflow-hidden rounded-lg border border-brand-accent/50 bg-brand-accent/10 px-6 py-3 text-sm transition-colors hover:bg-brand-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
          />
        </div>
      </div>
    </section>
  );
};
