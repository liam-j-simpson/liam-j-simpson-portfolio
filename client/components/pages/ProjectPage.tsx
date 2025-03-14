import { useParams } from 'react-router-dom'
import { useGetProject } from '../hooks/useGetProject'
import { PageLoader } from '../authentication/PageLoader'
import { PageError } from '../authentication/PageError'

export function ProjectPage() {
  const { id } = useParams()
  const { isPending, isError, data } = useGetProject(id)
  if (isPending) {
    return <PageLoader />
  }
  if (isError) {
    return <PageError />
  }
  if (data) {
    return (
      <>
        <h1 className="~text-hm/hl lg:~text-hl/hxl">
          {data.name.toUpperCase()}
        </h1>
        <ul className="flex flex-wrap">
          {Array.isArray(data.tags) &&
            data.tags.map((item: string) => (
              <li key={item}>
                <button className="rounded-full px-6 outline outline-1 mb-3 mr-3">
                  {item}
                </button>
              </li>
            ))}
        </ul>
        {data.date ? (
          <h2 className="mb-3">{`Status: Deployed on ${data.date}`}</h2>
        ) : (
          <h2>Status: Project in Development.</h2>
        )}
        <p className="mb-3">{data.description}</p>
        {data.url && (
          <a href={data.url}>
            <button className="rounded-full px-6 outline outline-1 outline-[#304637] bg-[#304637] text-[#E7E6E0] mr-3">
              Live Site
            </button>
          </a>
        )}
        {data.repo && (
          <a href={data.repo}>
            <button className="rounded-full px-6 outline outline-1 outline-[#304637] bg-[#304637] text-[#E7E6E0] mr-3">
              GitHub Repo
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
