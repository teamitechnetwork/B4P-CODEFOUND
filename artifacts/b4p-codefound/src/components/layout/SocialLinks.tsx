import type { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

export const socialLinks: { name: string; href: string; icon: IconType }[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/b4pcodefound.cause', icon: FaFacebookF },
  { name: 'Instagram', href: 'https://www.instagram.com/b4pcodefound', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/b4pcodefound', icon: FaLinkedinIn },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCag6wU4HaGZlBqbcG6kWThg', icon: FaYoutube },
  { name: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbBYo7T7dmeaJIfdBT1b', icon: FaWhatsapp },
];

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <nav className={`social-links ${className}`.trim()} aria-label="Follow B4P CODEFOUND">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={`B4P CODEFOUND on ${name}`}>
          <Icon aria-hidden="true" />
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </nav>
  );
}