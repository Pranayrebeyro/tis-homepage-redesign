import { motion } from 'framer-motion'

const highlights = [
  {
    value: '22',
    suffix: ' acres',
    label: 'Pollution-free campus',
  },
  {
    value: '16+',
    suffix: '',
    label: 'Olympic sports',
  },
  {
    value: '24/7',
    suffix: '',
    label: 'Medical assistance',
  },
  {
    value: '6:1',
    suffix: '',
    label: 'Student-teacher ratio',
  },
]

function Stats() {
  return (
    <section className="bg-[#164f45] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/15 lg:grid-cols-4 lg:divide-y-0">
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
            }}
            className={`px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-4 ${
              index === 0 ? 'lg:border-l-0' : ''
            }`}
          >
            <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {item.value}

              <span className="text-base font-medium text-white/60 sm:text-lg">
                {item.suffix}
              </span>
            </p>

            <p className="mt-2 max-w-[150px] text-xs leading-5 text-white/65 sm:mt-3 sm:text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats