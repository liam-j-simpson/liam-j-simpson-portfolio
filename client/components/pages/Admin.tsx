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
      <>
        <h1 className="~text-hm/hl lg:~text-hl/hxl">ADMIN</h1>
        <ManageProjects data={data} />
        <AddProject />
      </>
    )
  }
}
