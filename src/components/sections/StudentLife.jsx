import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import clubsImage from '../../assets/images/students/clubs.webp'
import sportsImage from '../../assets/images/students/sports.png'

const experiences = [
  'Sports',
  'Arts & Creativity',
  'Technology',
  'Leadership',
  'Clubs & Activities',
  'Community',
]

function StudentLife() {
  return (
    <section className="bg-[#17352f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9db9ae] sm:text-sm sm:tracking-[0.2em]">
              Student Life
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:mt-4 sm:text-4xl lg:text-5xl">
              Learning continues beyond the classroom.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:mt-6 sm:text-base sm:leading-7">
              Students have opportunities to discover interests, participate
              in activities and develop skills through experiences beyond
              their academic curriculum.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
              <div className="group overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={sportsImage}
                  alt="Students participating in sports at Tulas International School"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={clubsImage}
                  alt="Student activities at Tulas International School"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <div className="border-t border-white/15">
            {experiences.map((experience, index) => (
              <motion.a
                key={experience}
                href="#admissions"
                data-cursor="interactive"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group flex min-h-[62px] items-center justify-between border-b border-white/15 py-4"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                  <span className="text-[10px] text-white/35 sm:text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="text-base font-medium text-white/90 transition-colors duration-200 group-hover:text-white sm:text-xl lg:text-2xl">
                    {experience}
                  </span>
                </div>

                <ArrowRight
                  size={17}
                  className="ml-4 shrink-0 text-white/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white sm:h-[19px] sm:w-[19px]"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentLife