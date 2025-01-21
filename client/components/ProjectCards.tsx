import { ProjectArray, ProjectData } from 'models/projects'

export function ProjectCards({ data }: ProjectArray) {
  return (
    <>
      <ul>
        {data.map((item: ProjectData) => (
          <li key={item.id}>
            <h2 className="text-s mb-3">{item.name}</h2>

            <ul>
              <li>
                <button className="rounded-full px-6 outline mb-3 mr-3">
                  <p>{item.tags}</p>
                </button>
                <button className="rounded-full px-6 outline mb-3 mr-3">
                  <p>{item.tags}</p>
                </button>
              </li>
            </ul>

            <p className="mb-3">{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
