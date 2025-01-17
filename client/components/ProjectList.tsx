import { ProjectArray, ProjectData } from 'models/projects'
import { useDeleteProject } from './hooks/useDeleteProject'

export function ProjectList({ data }: ProjectArray) {
  const deleteMutation = useDeleteProject()

  function handleDelete(id: number) {
    deleteMutation.mutate(id)
  }
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
              <h3 className="text-s">Tags</h3>
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
                <td className="break-words">{item.tags}</td>
                <td className="break-words">{item.date}</td>
                <button>Edit</button>
                <button
                  aria-label="delete project"
                  value="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}
