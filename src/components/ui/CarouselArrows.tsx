import Image from 'next/image';

type CarouselArrowsProps = {
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
  className?: string;
};

const ARROW_CLASSES =
  'flex w-[50px] cursor-pointer items-center justify-center rounded-3xl px-2 py-[9px] transition hover:scale-110';

export default function CarouselArrows({
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
  className = '',
}: CarouselArrowsProps) {
  return (
    <div className={`flex items-center gap-[30px] ${className}`}>
      <button type="button" onClick={onPrevious} aria-label={previousLabel} className={ARROW_CLASSES}>
        <Image src="/landing/icons/arrow-left.svg" alt="" width={32} height={32} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={nextLabel}
        className={`${ARROW_CLASSES} bg-button-secondary`}
      >
        <Image src="/landing/icons/arrow-right.svg" alt="" width={32} height={32} />
      </button>
    </div>
  );
}
