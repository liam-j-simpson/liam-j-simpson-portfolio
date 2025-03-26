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

        <h2 className="mb-3">
          Status:
          {data.date ? ` Deployed on ${data.date}` : ' Project in Development.'}
        </h2>

        <ul className="flex flex-wrap">
          {data.tags &&
            data.tags.map((element: string, index: number) => (
              <li key={index}>
                <div className="rounded-full px-6 outline outline-1 mb-3 mr-3">
                  <p>{element}</p>
                </div>
              </li>
            ))}
        </ul>
        <p className="mb-3">{data.description}</p>

        {data.url && (
          <a href={data.url}>
            <button className="rounded-full px-6 outline outline-1 outline-[#304637] bg-[#304637] text-[#E7E6E0] mr-3">
              <p>Live Site</p>
            </button>
          </a>
        )}
        {data.repo && (
          <a href={data.repo}>
            <button className="rounded-full px-6 outline outline-1 outline-[#304637] bg-[#304637] text-[#E7E6E0] mr-3">
              <p>GitHub Repo</p>
            </button>
          </a>
        )}
        <ul>
          {data.gallery.map((element: string, index: number) => (
            <li key={index}>
              <img src={element} alt="project gallery" className="my-12" />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
