import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import useTheme from '../../hooks/useTheme'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus', href: '#campus' },
  { label: 'Admissions', href: '#admissions' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-3 mt-3 flex min-h-[60px] items-center justify-between rounded-full border border-black/10 bg-white/90 px-4 shadow-sm backdrop-blur-xl sm:mx-5 sm:mt-4 sm:px-5 dark:border-white/10 dark:bg-[#102c27]/90">
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Tulas International School home"
          data-cursor="interactive"
          className="flex min-w-0 items-center gap-2.5"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#164f45] text-xs font-semibold text-white sm:h-10 sm:w-10 sm:text-sm">
            TIS
          </div>

          <div className="block">
            <p className="text-[10px] font-semibold tracking-wide text-[#17352f] sm:text-sm dark:text-white">
              TULAS
            </p>

            <p className="text-[6px] tracking-[0.14em] text-[#64736f] sm:text-[10px] sm:tracking-[0.2em] dark:text-white/50">
              INTERNATIONAL SCHOOL
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor="interactive"
              className="text-sm font-medium text-[#42534e] transition-colors duration-200 hover:text-[#164f45] dark:text-white/70 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            data-cursor="interactive"
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#42534e] transition-colors hover:bg-[#edf2ef] dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="#admissions"
            data-cursor="interactive"
            className="rounded-full bg-[#164f45] px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Enquire Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#42534e] dark:border-white/10 dark:text-white"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#42534e] dark:border-white/10 dark:text-white"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-3 mt-2 rounded-3xl border border-black/10 bg-white p-4 shadow-xl backdrop-blur-xl sm:mx-5 sm:p-5 lg:hidden dark:border-white/10 dark:bg-[#102c27]">
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                data-cursor="interactive"
                className="rounded-2xl px-4 py-3.5 text-sm font-medium text-[#42534e] transition-colors hover:bg-[#f0f4f2] dark:text-white/75 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={closeMenu}
              data-cursor="interactive"
              className="mt-2 rounded-2xl bg-[#164f45] px-4 py-3.5 text-center text-sm font-medium text-white"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar