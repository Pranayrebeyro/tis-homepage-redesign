import { ArrowUpRight } from 'lucide-react'
import Reveal from '../animation/Reveal'
import learningImage from '../../assets/images/students/learning.webp'

function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 dark:bg-[#102c27]"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
            <img
              src={learningImage}
              alt="Students learning at Tulas International School"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[4/5]"
            />

            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-5 sm:py-4 dark:bg-[#173b35]/90">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#52736a] sm:text-xs dark:text-[#9db9ae]">
                Learning
              </p>

              <p className="mt-1 text-xs font-semibold text-[#17352f] sm:text-sm dark:text-white">
                Curiosity in the classroom
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52736a] sm:text-sm sm:tracking-[0.2em] dark:text-[#9db9ae]">
              About TIS
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#17352f] sm:mt-4 sm:text-4xl lg:text-5xl dark:text-white">
              A modern gurukul built around the whole student.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-6 text-[#64736f] sm:mt-6 sm:text-base sm:leading-7 dark:text-white/60">
              Tulas International School is a co-educational residential school
              in Dehradun, affiliated with CBSE. The school combines academic
              learning with opportunities across sports, arts, activities and
              personal development.
            </p>

            <a
              href="#academics"
              data-cursor="interactive"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#164f45] sm:mt-8 dark:text-[#9db9ae]"
            >
              Explore academics

              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#17352f]/10 pt-6 sm:mt-10 sm:gap-6 sm:pt-7 dark:border-white/10">
              <div>
                <p className="text-lg font-semibold text-[#17352f] sm:text-xl dark:text-white">
                  CBSE
                </p>

                <p className="mt-1 text-xs text-[#687772] sm:text-sm dark:text-white/50">
                  Affiliated curriculum
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[#17352f] sm:text-xl dark:text-white">
                  Residential
                </p>

                <p className="mt-1 text-xs text-[#687772] sm:text-sm dark:text-white/50">
                  School environment
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About