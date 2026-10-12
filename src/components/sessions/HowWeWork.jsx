import { useTranslation } from 'react-i18next';
import { MessageSquare, ClipboardList, Code2, Rocket } from 'lucide-react';

const steps = [
  { key: 'discovery', Icon: MessageSquare },
  { key: 'planning', Icon: ClipboardList },
  { key: 'development', Icon: Code2 },
  { key: 'delivery', Icon: Rocket },
];

const HowWeWork = () => {
  const { t } = useTranslation();

  return (
    <section id="how-we-work" aria-labelledby="how-we-work-title" className="bg-brand-dark text-white py-24 px-6 sm:px-12 scroll-mt-28 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-brand-accent text-xs font-medium uppercase tracking-[0.2em] mb-4">{t('howWeWork.eyebrow')}</p>
          <h2 id="how-we-work-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight">{t('howWeWork.title')}</h2>
          <p className="mt-6 text-gray-400 text-lg font-light leading-relaxed">{t('howWeWork.description')}</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {steps.map(({ key, Icon }, index) => (
            <li key={key} className="border-t border-white/15 pt-6">
              <div className="flex items-center justify-between mb-8">
                <span aria-hidden="true" className="font-display text-4xl font-light text-brand-secondary">{String(index + 1).padStart(2, '0')}</span>
                <Icon aria-hidden="true" className="w-6 h-6 text-brand-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-medium mb-4">{t(`howWeWork.steps.${key}.title`)}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{t(`howWeWork.steps.${key}.description`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWork;
