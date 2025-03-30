import { ProjectArray } from 'models/projects'
import { Link } from 'react-router-dom'

export function ProjectCards({ data }: ProjectArray) {
  return (
    <>
      <ul>
        {data.map((element, index) => (
          <li key={index} className="mb-16">
            <h2 className="~text-hs/hxs mb-1.5">
              {element.name.toUpperCase()}
            </h2>
            <ul className="flex flex-wrap">
              {element.tags &&
                element.tags.map((element, index) => (
                  <li key={index}>
                    <div className="rounded-full px-3 outline outline-1 mb-2 mr-2">
                      <p>{element}</p>
                    </div>
                  </li>
                ))}
            </ul>
            <p className="mb-3">{element.summary}</p>
            <Link to={`/${element.id}`}>
              <img src={element.thumbnail} alt="represents the project" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
