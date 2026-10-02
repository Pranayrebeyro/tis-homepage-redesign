import { ArrowDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImage from '../../assets/images/hero/widecampus.webp'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f8f6] px-4 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32 md:px-8 md:py-24 lg:flex lg:min-h-screen lg:items-center lg:px-12 lg:py-0 lg:pt-28 dark:bg-[#102c27]"
    >
      <div className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-9 sm:gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14 xl:gap-20">

        {/* Hero Content */}
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#27675b] sm:tracking-[0.24em] dark:text-[#9fd4c8]"
          >
            Tulas International School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-full break-words text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#17352f] sm:text-5xl md:text-[3.25rem] lg:text-[4.25rem] xl:text-7xl dark:text-white"
          >
            A place to learn, explore and grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 w-full max-w-xl break-words text-base leading-7 text-[#5f6f6a] sm:text-lg sm:leading-8 dark:text-white/65"
          >
            Tulas International School brings together academic learning,
            residential life, sports, activities and experiences in a
            supportive environment in Dehradun.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 min-[420px]:flex-row md:flex-row"
          >
            <a
              href="#about"
              data-cursor="interactive"
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-[#164f45] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#123f37] dark:bg-[#d5eee7] dark:text-[#123f37] dark:hover:bg-white"
            >
              Explore TIS
              <ArrowRight size={17} />
            </a>

            <a
              href="#admissions"
              data-cursor="interactive"
              className="inline-flex min-w-0 items-center justify-center rounded-full border border-[#b8c7c2] px-6 py-3.5 text-sm font-medium text-[#17352f] transition-colors duration-200 hover:border-[#164f45] hover:bg-white dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Admissions
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="min-w-0"
        >
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] sm:aspect-[5/4] sm:rounded-[2rem] md:aspect-[5/4] lg:aspect-[5/4]">
            <img
              src={heroImage}
              alt="Tulas International School campus"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
                Dehradun · India
              </p>

              <p className="mt-1 text-xs font-medium sm:text-sm">
                A campus built around learning and life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Scroll Indicator */}
      <a
        href="#about"
        data-cursor="interactive"
        className="absolute bottom-8 left-12 hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#64736f] lg:flex dark:text-white/50"
      >
        Scroll to explore
        <ArrowDown size={15} />
      </a>
    </section>
  )
}

export default Hero