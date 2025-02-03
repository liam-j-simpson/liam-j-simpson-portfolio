import { useParams } from 'react-router-dom'
import { useGetProject } from '../hooks/useGetProject'
import { PageLoader } from '../authentication/PageLoader'

export function ProjectPage() {
  const { id } = useParams()
  const { isPending, isError, error, data } = useGetProject(Number(id))
  if (isPending) {
    return <PageLoader />
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }
  if (data) {
    return (
      <>
        <h1 className="text-xl">{data.name.toUpperCase()}</h1>
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
        <p className="mb-3">{data.description}</p>
        {data.url && (
          <a href={data.url}>
            <button className="rounded-full px-6 outline mb-3 mr-3">
              View
            </button>
          </a>
        )}
        <ul>
          {data.gallery.map((item: string) => (
            <li key={item}>
              <img src={item} alt="project gallery" className="mb-6" />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
