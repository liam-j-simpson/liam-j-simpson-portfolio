import { useParams } from 'react-router-dom'
import { useGetProject } from '../hooks/useGetProject'

export function ProjectPage() {
  const { id } = useParams()
  const { isPending, isError, error, data } = useGetProject(Number(id))
  console.log(data)
  if (isPending) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }
  if (data) {
    return (
      <>
        <h1 className="text-xl">{data.name}</h1>
        <p className="mb-3">{data.date}</p>
        <ul className="flex">
          {data.tags.map((item: string) => (
            <li key={item}>
              <button className="rounded-full px-6 outline mb-3 mr-3">
                {item}
              </button>
            </li>
          ))}
        </ul>
        <h2 className="text-s mb-3">{data.description}</h2>
        <p className="mb-3">body copy</p>
        <h1 className="text-xl">image gallery</h1>
      </>
    )
  }
}
