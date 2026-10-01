import { ArrowUpRight } from 'lucide-react'
import Reveal from '../animation/Reveal'

const academicAreas = [
  {
    number: '01',
    title: 'CBSE Curriculum',
    description:
      'A structured curriculum focused on academic learning, reasoning and analytical thinking.',
  },
  {
    number: '02',
    title: 'Innovative Learning',
    description:
      'Project-based and art-integrated approaches encourage creativity and critical thinking.',
  },
  {
    number: '03',
    title: 'Technology',
    description:
      'Digital classrooms, VR-based experiences and online assessment tools support learning.',
  },
  {
    number: '04',
    title: 'Experiential Learning',
    description:
      'Educational trips, science quests, seminars and other activities connect learning with experience.',
  },
]

function Academics() {
  return (
    <section
      id="academics"
      className="bg-[#f7f8f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 dark:bg-[#0d2420]"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#52736a] sm:text-sm sm:tracking-[0.2em] dark:text-[#9db9ae]">
                Academics
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#17352f] sm:mt-4 sm:text-4xl lg:text-5xl dark:text-white">
                Learning built around curiosity, reasoning and experience.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#64736f] dark:text-white/55">
              TIS follows the CBSE course structure while incorporating
              technology, project-based learning and practical experiences.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-[#17352f]/10 sm:mt-14 dark:border-white/10">
          {academicAreas.map((area, index) => (
            <Reveal key={area.number} delay={index * 0.05}>
              <a
                href="#admissions"
                data-cursor="interactive"
                className="group grid gap-4 border-b border-[#17352f]/10 py-6 sm:grid-cols-[60px_1fr_40px] sm:items-center sm:gap-5 sm:px-3 sm:py-7 lg:grid-cols-[80px_1fr_40px] lg:px-5 dark:border-white/10 dark:hover:bg-white/5"
              >
                <span className="text-xs font-medium text-[#82908c] sm:text-sm">
                  {area.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#17352f] sm:text-2xl dark:text-white">
                    {area.title}
                  </h3>

                  <p className="mt-1.5 max-w-xl text-xs leading-5 text-[#687772] sm:mt-2 sm:text-sm sm:leading-6 dark:text-white/55">
                    {area.description}
                  </p>
                </div>

                <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#17352f]/10 text-[#164f45] transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-[#164f45] group-hover:text-white sm:flex dark:border-white/10 dark:text-[#9db9ae]">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academics