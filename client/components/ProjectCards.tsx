import { ProjectArray, ProjectData } from 'models/projects'
import { Link } from 'react-router-dom'

export function ProjectCards({ data }: ProjectArray) {
  return (
    <>
      <ul>
        {data.map((item: ProjectData) => (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
              <h2 className="text-s mb-3">{item.name}</h2>

              <ul className="flex">
                {item.tags.map((item) => (
                  <li key={item}>
                    <button className="rounded-full px-6 outline mb-3 mr-3">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              <p className="mb-3">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
