import { AddProject } from '../AddProject'
import { useViewProjects } from '../../api'
import { ViewProject } from '../AdminViewProject'

export function Admin() {
  const { isPending, isError, error, data } = useViewProjects()
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
        <div>
          <ViewProject data={data} />
        </div>

        <AddProject />
      </>
    )
  }
}
