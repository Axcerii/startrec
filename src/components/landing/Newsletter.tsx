import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';

export default function Newsletter() {
  const t = useTranslations('LandingPage.newsletter');

  return (
    <section id="contact" className="flex flex-col items-center gap-[46px] py-[60px]">
      <SectionHeading title={t('title')} subtitle={t('subtitle')} />

      <div className="flex w-full flex-col items-center gap-[33px] px-5">
        <form className="flex w-full max-w-[502px] items-center gap-4">
          <input
            type="email"
            name="email"
            required
            placeholder={t('placeholder')}
            aria-label={t('placeholder')}
            className="h-[38px] min-w-0 flex-1 rounded-lg bg-surface-subtle px-3 py-2 text-on-brand placeholder:text-placeholder"
          />
          <Button type="submit" size="sm">
            {t('submit')}
          </Button>
        </form>

        <SocialLinks className="gap-[53px]" />
      </div>
    </section>
  );
}
