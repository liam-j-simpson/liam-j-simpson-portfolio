import { useParams } from 'react-router-dom'
import { useGetProject } from '../hooks/useGetProject'
import { PageLoader } from '../authentication/PageLoader'

export function ProjectPage() {
  const { id } = useParams()
  const { isPending, isError, error, data } = useGetProject(id)
  if (isPending) {
    return <PageLoader />
  }
  if (isError) {
    return (
      <>
        <h2>Error: {error.message}</h2>
        <h1>Error</h1>
      </>
    )
  }
  if (data) {
    return (
      <>
        <h1 className="text-xl">{data.name.toUpperCase()}</h1>
        <ul className="flex">
          {Array.isArray(data.tags) &&
            data.tags.map((item: string) => (
              <li key={item}>
                <button className="rounded-full px-6 outline outline-1 mb-3 mr-3">
                  {item}
                </button>
              </li>
            ))}
        </ul>
        <p className="mb-3">{`Deployed on ${data.date}`}</p>
        <p className="mb-3">{data.description}</p>
        {data.url && (
          <a href={data.url}>
            <button className="rounded-full px-6 outline my-12 mr-3">
              View Live
            </button>
          </a>
        )}
        <ul>
          {data.gallery.map((item: string) => (
            <li key={item}>
              <img src={item} alt="project gallery" className="my-12" />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
