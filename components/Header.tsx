import Link from 'next/link';

// ← Vervang met de URL van jouw Kennis Shop (bijv. 'https://jouwbedrijf.kennis.shop')
const KENNIS_SHOP_URL = 'https://jouw-naam.kennis.shop';

const navLinks = [
  { href: '/',          label: 'Home',          extern: false },
  { href: '/over-mij',  label: 'Over mij',      extern: false },
  { href: '/aanbod',    label: 'Aanbod',        extern: false },
  { href: '/contact',   label: 'Contact',       extern: false },
  { href: KENNIS_SHOP_URL, label: 'Mijn cursussen', extern: true },
];

export default function Header() {
  return (
    <header className="bg-wit border-b border-primair/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-primair text-lg">
          [Jouw naam]
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link =>
            link.extern ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                className="bg-primair text-wit px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}
                className="text-tekst hover:text-primair transition-colors">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
