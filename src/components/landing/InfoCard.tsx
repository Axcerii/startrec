import Image from 'next/image';

export type InfoCardContent = {
  title: string;
  text: string;
};

type InfoCardProps = InfoCardContent & {
  icon: string;
  variant?: 'light' | 'dark';
  className?: string;
};

const VARIANT_CLASSES = {
  light: 'rounded-[18px] bg-card text-on-brand shadow-card',
  dark: 'card-notched bg-on-brand text-foreground',
};

export default function InfoCard({ icon, title, text, variant = 'light', className = '' }: InfoCardProps) {
  return (
    <article
      className={`flex h-full min-h-[455px] w-full max-w-[324px] flex-col items-center gap-4 px-10 py-[52px] ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {/* Icons are drawn in black: inverted on the dark card */}
      <Image src={icon} alt="" width={75} height={75} className={variant === 'dark' ? 'invert' : ''} />
      <div className="flex w-full flex-col gap-6">
        <h3 className="text-center text-h4">{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
