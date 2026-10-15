import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import SectionHeading from './SectionHeading';

export default function JoinCta() {
  const t = useTranslations('LandingPage.join');

  return (
    <section className="flex flex-col items-center gap-7">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="#">{t('register')}</Button>
        <Button href="#" variant="secondary">
          {t('login')}
        </Button>
      </div>
    </section>
  );
}
