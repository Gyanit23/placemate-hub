import { useState } from 'react'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { NAV } from '../data'
import { useLang } from '../i18n'

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  return (
    <header
      className="sticky z-30 border-b-2 border-[#DDE0F5] bg-[#F6F7FF] dark:border-night-line dark:bg-night"
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="wrap flex items-center gap-2 py-3 sm:gap-3">
        <a href="#top" className="mr-auto flex items-center gap-2 font-display text-xl font-extrabold">
          <span
            className="inline-block h-7 w-7 rounded-lg"
            style={{ background: 'conic-gradient(#FF4F8B,#FFC93C,#0FBFA5,#3D6BFF,#FF4F8B)' }}
          />
          PlaceMate Hub
        </a>
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="rounded-full px-3 py-1.5 text-sm font-medium hover:bg-royal-tint dark:hover:bg-royal/20">
              {t(n.label)}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          aria-label="Switch language between English and Hindi"
          className="flex h-10 items-center gap-1.5 rounded-full border-2 border-[#DDE0F5] bg-white px-3 text-sm font-bold dark:border-night-line dark:bg-night-card"
        >
          <Languages size={16} /> {lang === 'en' ? 'हिंदी' : 'English'}
        </button>
        <button
          onClick={() => setDark(!dark)}
          aria-label="Switch light or dark theme"
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#DDE0F5] bg-white dark:border-night-line dark:bg-night-card"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a href="#contact" className="btn hidden !px-4 !py-2 text-sm md:inline-flex">{t('Book a demo')}</a>
        <button onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open} className="grid h-10 w-10 place-items-center xl:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="wrap flex flex-wrap gap-2 pb-4 xl:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="chip">{t(n.label)}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="chip !bg-sun !text-ink">{t('Book a demo')}</a>
        </nav>
      )}
    </header>
  )
}
