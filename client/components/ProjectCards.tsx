import { ProjectArray, ProjectData } from 'models/projects'

export function ProjectCards({ data }: ProjectArray) {
  return (
    <>
      <ul>
        {data.map((item: ProjectData) => (
          <li key={item.id}>
            <h2 className="text-s mb-2.5">{item.name}</h2>

            <ul>
              <li>
                <button className="rounded-full px-5 outline mb-2.5 mr-2.5">
                  <p>{item.stack}</p>
                </button>
                <button className="rounded-full px-5 outline mb-2.5 mr-2.5">
                  <p>{item.stack}</p>
                </button>
              </li>
            </ul>

            <p className="mb-2.5">{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
