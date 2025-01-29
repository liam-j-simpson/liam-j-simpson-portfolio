import { AddProject } from '../AddProject'
import { useGetAllProjects } from '../hooks/useGetProject'
import { ManageProjects } from '../ManageProjects'

export function Admin() {
  const { isPending, isError, error, data } = useGetAllProjects()

  if (isPending) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }

  if (data) {
    return (
      <>
        <h1 className="text-xl">ADMIN</h1>

        <>
          <div>
            <ManageProjects data={data} />
          </div>
          <AddProject />
        </>
      </>
    )
  }
}
