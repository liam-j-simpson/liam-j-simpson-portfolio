import { ProjectArray, ProjectData } from 'models/projects'
import { useDeleteProject } from './hooks/useDeleteProject'
import { useState } from 'react'

export function ProjectList({ data }: ProjectArray) {
  const deleteMutation = useDeleteProject()

  function handleDelete(id: number) {
    deleteMutation.mutate(id)
  }
  const [editId, setEditId] = useState<number>()

  function handleEdit(id: number) {
    setEditId(id)
  }

  function handleSave(id: number) {
    setEditId(undefined)
    
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
                <td className="break-words">
                  {item.id === editId ? 'edit' : item.name}
                </td>
                <td className="break-words">
                  {item.id === editId ? 'edit' : item.description}
                </td>
                <td className="break-words">
                  {item.id === editId ? 'edit' : item.tags}
                </td>
                <td className="break-words">
                  {item.id === editId ? 'edit' : item.date}
                </td>
                <button
                  aria-label="delete project"
                  value="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                {item.id !== editId && (
                  <button
                    aria-label="edit project"
                    value="edit"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                )}
                {item.id === editId && (
                  <button
                    aria-label="save changes"
                    value="save"
                    onClick={() => handleSave(item.id)}
                  >
                    Save
                  </button>
                )}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}
