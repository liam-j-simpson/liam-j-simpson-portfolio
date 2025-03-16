import { ProjectArray } from 'models/projects'
import { Link } from 'react-router-dom'

export function ProjectCards({ data }: ProjectArray) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="mb-12">
            <h2 className="~text-hs/hxs mb-1 lg:mb-3">{item.name}</h2>

            <ul className="flex flex-wrap">
              {Array.isArray(item.tags) &&
                item.tags.map((item) => (
                  <li key={item}>
                    <div className="rounded-full px-3 outline outline-1 mb-3 mr-3">
                      {item}
                    </div>
                  </li>
                ))}
            </ul>
            <p className="mb-3">{item.summary}</p>
            <Link to={`/${item.id}`}>
              <img src={item.thumbnail} alt="represents the project" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
