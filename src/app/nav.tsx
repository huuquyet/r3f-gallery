'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems: { label: string; type?: string; link?: string }[] = [
  { label: 'Gallery', type: 'gallery' },
  { label: 'Carousel', type: 'carousel' },
  { label: 'Horizontal', type: 'horizontal' },
  { label: 'Github', link: 'https://github.com/huuquyet/r3f-gallery' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <div className="fixed flex flex-row min-h-16 p-2 text-center z-[1]">
      {navItems.map(({ label, type, link }) => (
        <div key={label}>
          {type ? (
            <Link href={`/${type}`} className={`p-2 ${pathname === `/${type}` ? 'underline' : ''}`}>
              {label}
            </Link>
          ) : (
            <Link href={link!} rel="noopener" target="_blank">
              {label}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
