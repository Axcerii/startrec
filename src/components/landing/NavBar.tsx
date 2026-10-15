import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import StickyHeader from '../ui/StickyHeader';

export default function NavBar() {
  const t = useTranslations('LandingPage.nav');

  return (
    <StickyHeader>
      <nav className="flex h-[89px] items-center justify-between px-[18px] lg:px-14">
        <Link href="/landing" aria-label={t('home')}>
          <Image src="/landing/logo.png" alt={t('logoAlt')} width={97} height={55} preload />
        </Link>

        <ul className="hidden w-[398px] items-center justify-between text-button lg:flex">
          <li>
            <a href="#about">{t('about')}</a>
          </li>
          <li>
            <a href="#team">{t('us')}</a>
          </li>
          <li>
            <a href="#contact">{t('contact')}</a>
          </li>
        </ul>

        <div className="flex items-center gap-6 lg:w-[323px] lg:justify-between lg:gap-0">
          <Link href="#" className="hidden text-button sm:block">
            {t('connexion')}
          </Link>
          <Button href="#">{t('register')}</Button>
        </div>
      </nav>
    </StickyHeader>
  );
}
