import { AddProject } from '../AddProject'
import { useViewProjects } from '../../api'
import { ViewProject } from '../ViewProject'
import { ProjectData } from 'models/projects'

export function Admin() {
  const { isPending, isError, error, data } = useViewProjects()
  console.log('query state:', data)
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
        {data.map((item: ProjectData) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
        <div>
          <ViewProject />
        </div>

        <AddProject />
      </>
    )
  }
}
