import { PageLoader } from '../authentication/PageLoader'
import { PageError } from '../authentication/PageError'
import { useGetAllProjects } from '../hooks/useGetProject'
import { ProjectCards } from '../ProjectCards'

export function Projects() {
  const { isPending, isError, data } = useGetAllProjects()
  if (isPending) {
    return <PageLoader />
  }
  if (isError) {
    return <PageError />
  }
  if (data) {
    return (
      <>
        <h1 className="~text-hm/hl pt-12 pb-8 lg:~text-hl/hxl lg:py-0">PROJECTS</h1>
        <div>
          <ProjectCards data={data} />
        </div>
      </>
    )
  }
}
