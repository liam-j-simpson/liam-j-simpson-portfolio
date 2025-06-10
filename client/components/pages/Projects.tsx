import { PageLoader } from '../authentication/PageLoader'
import { PageError } from '../authentication/PageError'
import { useGetAllProjects } from '../hooks/useGetProject'
import { ProjectCards } from '../ProjectCards'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function Projects() {
  useGSAP(() => {
    gsap.from('.Heading', {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
      y: 5,
    })
  })

  const { isPending, isError, data } = useGetAllProjects()
  if (isPending) {
    return <PageLoader />
  }
  if (isError) {
    return <PageError />
  }
  if (data) {
    return (
      <section>
        <>
          <h1 className="Heading ~text-hm/hl pt-12 pb-8 lg:~text-hl/hxl lg:py-0">
            PROJECTS
          </h1>
          <div>
            <ProjectCards data={data} />
          </div>
        </>
      </section>
    )
  }
}
