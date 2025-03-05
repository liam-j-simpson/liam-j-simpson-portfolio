import { ProjectArray } from 'models/projects'
import { Link } from 'react-router-dom'

export function ProjectCards({ data }: ProjectArray) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="mb-12">
            <Link to={`/${item.id}`}>
              <h2 className="~text-hs/hxs mb-3">{item.name}</h2>

              <ul className="flex flex-wrap">
                {Array.isArray(item.tags) &&
                  item.tags.map((item) => (
                    <li key={item}>
                      <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
                        {item}
                      </button>
                    </li>
                  ))}
              </ul>
              <p className="mb-3">{item.summary}</p>
              <img src={item.thumbnail} alt="represents the project" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
