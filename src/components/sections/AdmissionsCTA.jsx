import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      className="bg-[#f7f8f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 dark:bg-[#0d2420]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#dce8e3] px-6 py-12 sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-20 lg:py-20 dark:bg-[#173b35]"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52736a] sm:text-sm sm:tracking-[0.2em] dark:text-[#9db9ae]">
            Admissions
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#17352f] sm:mt-5 sm:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
            Begin the next chapter of your learning journey.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#5f716b] sm:mt-6 sm:text-base sm:leading-7 dark:text-white/60">
            Get in touch with Tulas International School to learn more about
            the school, its learning environment and the admissions process.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
            <a
              href="#contact"
              data-cursor="interactive"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#164f45] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Enquire Now

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#home"
              data-cursor="interactive"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#164f45]/20 px-6 py-3.5 text-sm font-medium text-[#164f45] transition-colors duration-200 hover:bg-white/60 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Back to top
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AdmissionsCTA