import { useGetAllProjects } from '../hooks/useGetProject'
import { ProjectCards } from '../ProjectCards'

export function Projects() {
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
        <h1 className="text-xl">PROJECTS</h1>
        <div>
          <ProjectCards data={data} />
        </div>
      </>
    )
  }
}
