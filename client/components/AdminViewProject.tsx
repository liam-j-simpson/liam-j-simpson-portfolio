import { ProjectArray, ProjectData } from 'models/projects'

export function ViewProject({ data }: ProjectArray) {
  console.log('view project data', data)

  return (
    <>
      <h2 className="text-s">Projects</h2>

      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-1/4">
              <h3 className="text-s">Name</h3>
            </th>
            <th className="w-1/4">
              <h3 className="text-s">Description</h3>
            </th>
            <th className="w-1/4">
              <h3 className="text-s">Stack</h3>
            </th>
            <th className="w-1/4">
              <h3 className="text-s">Date</h3>
            </th>
          </tr>
        </thead>
        <tbody className="!text-left">
          {data.map((item: ProjectData) => (
            <>
              <tr key={item.id}>
                <td className="break-words">{item.name}</td>
                <td className="break-words">{item.description}</td>
                <td className="break-words">{item.stack}</td>
                <td className="break-words">{item.date}</td>
                <button>Edit</button>
                <button>Delete</button>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}
