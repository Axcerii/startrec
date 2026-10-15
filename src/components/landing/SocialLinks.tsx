import Image from 'next/image';

const SOCIAL_NETWORKS = [
  { name: 'Instagram', icon: '/landing/icons/instagram.svg', href: '#' },
  { name: 'TikTok', icon: '/landing/icons/tiktok.svg', href: '#' },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-start justify-between ${className}`}>
      {SOCIAL_NETWORKS.map((network) => (
        <li key={network.name}>
          <a href={network.href} aria-label={network.name}>
            <Image src={network.icon} alt="" width={32} height={32} />
          </a>
        </li>
      ))}
    </ul>
  );
}
