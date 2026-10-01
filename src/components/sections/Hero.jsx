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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-[#27675b] dark:text-[#9fd4c8]"
          >
            Tulas International School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-3xl text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#17352f] sm:text-5xl md:text-[3.25rem] lg:text-[4.25rem] xl:text-7xl dark:text-white"
          >
            A place to learn, explore and grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-7 text-[#5f6f6a] sm:text-lg sm:leading-8 dark:text-white/65"
          >
            Tulas International School brings together academic learning,
            residential life, sports, activities and experiences in a
            supportive environment in Dehradun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 md:flex-row"
          >
            <a
              href="#about"
              data-cursor="interactive"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#164f45] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#123f37] dark:bg-[#d5eee7] dark:text-[#123f37] dark:hover:bg-white"
            >
              Explore TIS
              <ArrowRight size={17} />
            </a>

            <a
              href="#admissions"
              data-cursor="interactive"
              className="inline-flex items-center justify-center rounded-full border border-[#b8c7c2] px-6 py-3.5 text-sm font-medium text-[#17352f] transition-colors duration-200 hover:border-[#164f45] hover:bg-white dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Admissions
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[5/4] md:aspect-[5/4] lg:aspect-[5/4]">
            <img
              src={heroImage}
              alt="Tulas International School campus"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/20 p-4 text-white backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Dehradun · India
              </p>

              <p className="mt-1 text-sm font-medium">
                A campus built around learning and life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

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