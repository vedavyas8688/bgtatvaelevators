import { LuArrowLeft, LuArrowRight, LuArrowUpRight, LuMapPin } from 'react-icons/lu'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { getProjectBySlug, projects } from '../components/sections/projects/projectsData'

export default function ProjectDetail({ slug }) {
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F5F3EC] text-[#0F2B45]">
        <SiteNavbar />
        <section className="grid min-h-[75vh] place-items-center px-5 py-32 text-center">
          <div>
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Project not found</p>
            <h1 className="mb-0 mt-5 text-[clamp(48px,8vw,90px)] font-medium leading-none tracking-[-.05em]">That project is not here.</h1>
            <a href="/projects" className="editorial-cta mt-8">Return to projects <span aria-hidden="true"><LuArrowLeft /></span></a>
          </div>
        </section>
        <SiteFooter />
      </main>
    )
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="project-detail-page min-h-screen bg-[#F8F7F1] text-[#0F2B45]">
      <SiteNavbar />

      <header className="px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40 lg:px-[clamp(48px,7vw,110px)]">
        <div className="mx-auto max-w-[1440px]">
          <a href="/projects#project-library" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-[#0F2B45]/65 transition-colors hover:text-[#EB9B34]">
            <LuArrowLeft aria-hidden="true" /> All projects
          </a>
          <div className="mt-12 grid items-end gap-9 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#EB9B34]">
                <span>{project.type}</span>
                <span className="h-px w-8 bg-[#EB9B34]/60" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-[#0F2B45]/60"><LuMapPin />{project.location}</span>
              </div>
              <h1 className="mb-0 mt-5 max-w-[1050px] text-[clamp(52px,8vw,112px)] font-medium leading-[.88] tracking-[-.06em]">{project.title}</h1>
            </div>
            <div className="border-l border-[#EB9B34] pl-5 lg:mb-2">
              <p className="m-0 text-[15px] leading-[1.7] text-[#0F2B45]/70">{project.brief}</p>
              <time className="mt-5 block text-[11px] font-semibold uppercase tracking-[.16em]">Completed {project.year}</time>
            </div>
          </div>
        </div>
      </header>

      <figure className="mx-3 mb-0 mt-2 h-[62vh] min-h-[480px] overflow-hidden rounded-[26px] sm:mx-5 sm:rounded-[34px] lg:h-[78vh] lg:min-h-[680px]">
        <img src={project.image} alt={`${project.title} completed elevator project`} className="size-full object-cover" />
      </figure>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-[clamp(48px,7vw,110px)] lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Project overview</p>
            <dl className="mt-7 border-t border-[#0F2B45]/15">
              {[['Location', project.location], ['Category', project.type], ['Completion', project.year], ...project.details.map((value, index) => [`Specification ${String(index + 1).padStart(2, '0')}`, value])].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[1fr_1.2fr] gap-5 border-b border-[#0F2B45]/15 py-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#0F2B45]/50">{label}</dt>
                  <dd className="m-0 text-[13px] font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">The idea</p>
            <h2 className="mb-0 mt-5 max-w-[820px] text-[clamp(38px,5vw,66px)] font-medium leading-[1.02] tracking-[-.045em]">Movement designed as part of the architecture.</h2>
            <p className="mb-0 mt-8 max-w-[760px] text-[17px] leading-[1.8] text-[#0F2B45]/70 sm:text-[19px]">{project.response}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-3 px-3 sm:px-5 lg:grid-cols-2">
        {project.gallery.map((image, index) => (
          <figure key={image} className="m-0 h-[440px] overflow-hidden rounded-[24px] sm:h-[580px] lg:h-[720px] lg:rounded-[30px]">
            <img src={image} alt={`${project.title} project detail ${index + 1}`} loading="lazy" className="size-full object-cover" />
          </figure>
        ))}
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-[clamp(48px,7vw,110px)] lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-3 lg:gap-16">
          {[
            ['01', 'The challenge', project.challenge],
            ['02', 'Our response', project.response],
            ['03', 'The outcome', project.outcome],
          ].map(([number, title, copy]) => (
            <article key={title} className="border-t border-[#0F2B45]/15 pt-6">
              <span className="text-[11px] font-semibold text-[#EB9B34]">{number}</span>
              <h2 className="mb-0 mt-8 text-[28px] font-medium tracking-[-.025em]">{title}</h2>
              <p className="mb-0 mt-4 text-[15px] leading-[1.75] text-[#0F2B45]/68">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0F2B45] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-[clamp(48px,7vw,110px)]">
        <div className="mx-auto grid max-w-[1240px] items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Next project · {nextProject.type}</p>
            <h2 className="mb-0 mt-5 max-w-[850px] text-[clamp(44px,6.5vw,88px)] font-medium leading-[.94] tracking-[-.05em]">{nextProject.title}</h2>
          </div>
          <a href={`/projects/${nextProject.slug}`} className="inline-flex size-16 items-center justify-center rounded-full bg-[#EB9B34] text-[#0F2B45] transition-transform hover:scale-105 sm:size-20" aria-label={`View ${nextProject.title}`}>
            <LuArrowUpRight className="size-7" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="flex min-h-[460px] flex-col items-center justify-center bg-[#EB9B34] px-5 py-20 text-center text-[#0F2B45]">
        <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em]">Planning a project?</p>
        <h2 className="mb-0 mt-5 max-w-[900px] text-[clamp(44px,6vw,82px)] font-medium leading-[.96] tracking-[-.05em]">Let’s shape the journey together.</h2>
        <a href="/contact" className="editorial-cta editorial-cta--center mt-8">Start a conversation <span aria-hidden="true"><LuArrowRight /></span></a>
      </section>

      <SiteFooter />
    </main>
  )
}
