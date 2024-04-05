'use client'

import { Link, useLocation } from 'wouter'

const navItems: { label: string; slug?: string; link?: string }[] = [
  { label: 'Cards', slug: 'cards' },
  { label: 'Carousel', slug: 'carousel' },
  { label: 'Horizontal', slug: 'horizontal' },
  { label: 'Github', link: 'https://github.com/huuquyet/r3f-gallery' },
]

export default function Header() {
  const [pathname] = useLocation()

  return (
    <header className="header">
      <ul>
        {navItems.map(({ label, slug, link }) => (
          <li key={label}>
            {slug ? (
              <Link to={`/${slug}`} className={pathname === `/${slug}` ? 'active' : undefined}>
                {label}
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

const ExtLink = (props: any) => <a {...props} rel="noopener" target={props.target || '_blank'} />
