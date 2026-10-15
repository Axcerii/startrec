import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SocialLinks from './SocialLinks';

// Horizontal center of each clapperboard stripe, in % of the band width.
const STRIPE_POSITIONS = ['19%', '56.25%', '93.75%'];

export default function Footer() {
  const t = useTranslations('LandingPage');

  return (
    <footer>
      <div className="flex flex-col items-center gap-10 px-[34px] pb-6 lg:min-h-[297px] lg:justify-between">
        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <Image src="/landing/logo.png" alt={t('nav.logoAlt')} width={275} height={157} />

          <div className="flex flex-col items-center gap-8 lg:w-[630px] lg:flex-row lg:justify-between">
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-button lg:w-[430px] lg:justify-between lg:gap-0">
              <li>
                <a href="#about">{t('nav.about')}</a>
              </li>
              <li>
                <a href="#contact">{t('nav.contact')}</a>
              </li>
              <li>
                <a href="#team">{t('footer.usQuestion')}</a>
              </li>
            </ul>

            <div className="flex flex-col gap-2.5">
              <p className="p-2.5">{t('footer.follow')}</p>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 whitespace-nowrap">
          <a href="#" className="text-caption text-tertiary">
            {t('footer.legal')}
          </a>
          <a href="#" className="text-caption text-tertiary">
            {t('footer.terms')}
          </a>
          <p className="text-h5">{t('footer.rights')}</p>
          <p className="text-h5">{t('footer.copyright')}</p>
        </div>
      </div>

      {/* Clapperboard band */}
      <div className="relative aspect-[1440/241] overflow-hidden bg-brand">
        {STRIPE_POSITIONS.map((left) => (
          <div
            key={left}
            style={{ left }}
            className="absolute top-[93.4%] aspect-[520/158] w-[36.1%] -translate-x-1/2 -translate-y-1/2 -rotate-[26.1deg] bg-on-brand"
          />
        ))}
      </div>
    </footer>
  );
}
