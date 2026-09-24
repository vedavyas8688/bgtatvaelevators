import { useState } from 'react'
import { LuArrowUpRight, LuMapPin } from 'react-icons/lu'
import { projectFilters, projects } from './projectsData'

export default function ProjectLibrarySection() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((project) => project.type === active)

  return (
    <section id="project-library" className="scroll-mt-[105px] px-[clamp(20px,5vw,76px)] py-[clamp(80px,9vw,135px)]">
      <header className="mx-auto flex max-w-[1440px] items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">Project library</p>
          <h2 className="mb-0 mt-3 text-[clamp(48px,5vw,76px)] font-medium leading-none tracking-[-.045em]">Built for Bengaluru.</h2>
        </div>
        <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-[#F5F3EC] p-1.5" role="tablist">
          {projectFilters.map((filter) => (
            <button key={filter} type="button" role="tab" aria-selected={active === filter} onClick={() => setActive(filter)} className={`min-h-[40px] shrink-0 rounded-full px-4 text-[12px] font-medium ${active === filter ? 'bg-[#0F2B45] text-white' : 'text-[#0F2B45] hover:bg-[#F5F3EC]'}`}>
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto mt-14 grid max-w-[1440px] gap-x-7 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <a key={project.slug} href={`/projects/${project.slug}`} className="group block text-[#0F2B45] no-underline" aria-label={`View ${project.title} project`}>
            <article>
              <figure className="relative m-0 h-[440px] overflow-hidden rounded-[26px] bg-[#F5F3EC] max-sm:h-[380px]">
                <img src={project.image} alt={project.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.1em] backdrop-blur-md">{project.type}</span>
                <span className="absolute bottom-4 right-4 grid size-12 translate-y-2 place-items-center rounded-full bg-[#EB9B34] text-[#0F2B45] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <LuArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </figure>
              <div className="mt-5 flex justify-between text-[11px] uppercase tracking-[.1em]">
                <span className="inline-flex items-center gap-1.5"><LuMapPin />{project.location}</span>
                <time>{project.year}</time>
              </div>
              <h3 className="mb-0 mt-4 text-[30px] font-medium leading-[1.12] transition-colors group-hover:text-[#EB9B34]">{project.title}</h3>
              <p className="mb-0 mt-3 text-[15px] leading-[1.65] text-[#0F2B45]/75">{project.brief}</p>
              <p className="mb-0 mt-5 border-t border-[#0F2B45]/10 pt-4 text-[11px] font-medium uppercase tracking-[.08em]">{project.details.join(' · ')}</p>
            </article>
          </a>
        ))}
      </div>
    </section>
  )
}
