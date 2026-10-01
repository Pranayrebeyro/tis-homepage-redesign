function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#102c27] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 border-b border-white/10 pb-9 sm:gap-10 sm:pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#164f45]">
                TIS
              </div>

              <div>
                <p className="text-sm font-semibold tracking-wide">
                  TULAS
                </p>

                <p className="text-[9px] tracking-[0.16em] text-white/50 sm:text-[10px] sm:tracking-[0.2em]">
                  INTERNATIONAL SCHOOL
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/55 sm:text-sm">
              A learning environment where academics, activities and
              residential life come together.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs">
              Explore
            </p>

            <div className="mt-3 flex flex-col gap-2.5 sm:mt-4 sm:gap-3">
              <a
                href="#about"
                data-cursor="interactive"
                className="text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
              >
                About
              </a>

              <a
                href="#academics"
                data-cursor="interactive"
                className="text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
              >
                Academics
              </a>

              <a
                href="#campus"
                data-cursor="interactive"
                className="text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
              >
                Campus
              </a>

              <a
                href="#admissions"
                data-cursor="interactive"
                className="text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
              >
                Admissions
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs">
              TIS
            </p>

            <div className="mt-3 flex flex-col gap-2.5 text-xs text-white/70 sm:mt-4 sm:gap-3 sm:text-sm">
              <span>Dehradun, India</span>
              <span>Co-educational residential school</span>
              <span>CBSE affiliated</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 pt-6 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:pt-7 sm:text-xs">
          <p>© 2026 Tulas International School. All rights reserved.</p>

          <p>Homepage redesign</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer