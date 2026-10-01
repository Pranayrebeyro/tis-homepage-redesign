import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import campusImage from '../../assets/images/campus/campus.png'

function Campus() {
  return (
    <section
      id="campus"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 dark:bg-[#102c27]"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52736a] sm:text-sm sm:tracking-[0.2em] dark:text-[#9db9ae]">
            Campus Life
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#17352f] sm:mt-4 sm:text-4xl lg:text-5xl dark:text-white">
            An environment designed for learning and living.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] sm:min-h-[460px] sm:rounded-[2rem]"
          >
            <img
              src={campusImage}
              alt="Tulas International School campus"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102c27]/80 via-transparent to-transparent" />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/85 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52736a] sm:text-xs sm:tracking-[0.16em]">
                Campus
              </p>

              <h3 className="mt-1.5 text-xl font-semibold text-[#17352f] sm:mt-2 sm:text-2xl">
                Space to discover more
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#61716c] sm:text-sm sm:leading-6">
                A campus environment that brings academics, activities,
                recreation and residential life together.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="rounded-[1.75rem] bg-[#164f45] p-6 text-white sm:rounded-[2rem] sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-white/60 sm:text-sm">
                  01
                </span>

                <ArrowUpRight size={19} />
              </div>

              <div className="mt-12 sm:mt-20">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Sports
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
                  Opportunities across a wide range of sporting activities
                  form an important part of student life at TIS.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[1.75rem] bg-[#eef2ef] p-6 sm:rounded-[2rem] sm:p-7 dark:bg-[#173b35]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-[#82908c] sm:text-sm dark:text-white/40">
                  02
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-[#164f45] dark:text-[#9db9ae]"
                />
              </div>

              <div className="mt-12 sm:mt-20">
                <h3 className="text-xl font-semibold text-[#17352f] sm:text-2xl dark:text-white">
                  Facilities
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#687772] sm:text-sm sm:leading-6 dark:text-white/55">
                  The campus brings together learning, recreation and
                  residential facilities in one environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Campus