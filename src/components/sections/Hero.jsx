import { ArrowDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImage from '../../assets/images/hero/widecampus.webp'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f8f6] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 md:px-8 md:py-24 lg:flex lg:min-h-screen lg:items-center lg:px-12 lg:py-0 lg:pt-28 dark:bg-[#102c27]"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-12 md:grid-cols-[1fr_1fr] md:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#52736a] sm:mb-5 sm:text-sm sm:tracking-[0.2em] dark:text-[#9db9ae]"
          >
            Tulas International School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-[2.75rem] font-semibold leading-[1.03] tracking-[-0.045em] text-[#17352f] sm:text-5xl md:text-[3.25rem] lg:text-[4.25rem] xl:text-7xl dark:text-white"
          >
            A place to learn, explore and grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl text-sm leading-6 text-[#5d6b67] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg dark:text-white/60"
          >
            Tulas International School brings together academic learning,
            residential life, sports, activities and experiences in a
            supportive environment in Dehradun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 md:flex-row"
          >
            <a
              href="#about"
              data-cursor="interactive"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#164f45] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore TIS

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#admissions"
              data-cursor="interactive"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#164f45]/20 px-6 py-3.5 text-sm font-medium text-[#164f45] transition-colors duration-200 hover:bg-[#e9efec] dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Admissions
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mt-2 sm:mt-0"
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] sm:rounded-[2rem] md:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={heroImage}
              alt="Tulas International School campus"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102c27]/75 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/85 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52736a] sm:text-xs sm:tracking-[0.16em]">
                Dehradun · India
              </p>

              <p className="mt-1.5 text-base font-medium leading-5 text-[#17352f] sm:mt-2 sm:text-lg sm:leading-6">
                A campus built around learning and life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        data-cursor="interactive"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#70807b] lg:flex dark:text-white/40"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </a>
    </section>
  )
}

export default Hero