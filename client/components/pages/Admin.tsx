import { AddProject } from '../AddProject'
import { PageError } from '../authentication/PageError'
import { PageLoader } from '../authentication/PageLoader'
import { useGetAllProjects } from '../hooks/useGetProject'
import { ManageProjects } from '../ManageProjects'

export function Admin() {
  const { isPending, isError, data } = useGetAllProjects()

  if (isPending) {
    return <PageLoader />
  }
  if (isError) {
    return <PageError />
  }

  if (data) {
    return (
      <section className="enter">
        <>
          <h1 className="~text-hm/hl pt-12 pb-8 lg:~text-hl/hxl lg:py-0">
            ADMIN
          </h1>
          <ManageProjects data={data} />
          <AddProject />
        </>
      </section>
    )
  }
}
