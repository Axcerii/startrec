import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import ScrollTrack from '../ui/ScrollTrack';

export default function HeaderHero() {
  const t = useTranslations('LandingPage');

  return (
    <header>
      {/* 200vh track: the video goes from 16:9 to 4:3 while the hero stays pinned */}
      <ScrollTrack className="h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <video
            className="hero-video max-w-none object-cover"
            src="/landing/hero_video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute -inset-x-8 -bottom-3.5 h-[194px] bg-linear-to-t from-page from-30% to-transparent blur-[9px]" />

          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-start px-[18px] lg:px-[50px]">
            <h1 className="max-w-[940px] text-h1">{t('title')}</h1>
            <p className="-mt-1 max-w-[538px] text-muted">{t('subtitle')}</p>
            <Button href="#" className="mt-16">
              {t('cta')}
            </Button>
          </div>
        </div>
      </ScrollTrack>
    </header>
  );
}
