import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
};

const VARIANT_CLASSES = {
  primary: 'border-brand-border bg-brand text-on-brand',
  secondary: 'border-border-strong bg-button-secondary text-foreground',
};

const SIZE_CLASSES = {
  md: 'rounded-xl px-6 py-4',
  sm: 'rounded-lg px-4 py-3',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap border-[0.5px] text-button transition hover:brightness-90 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
