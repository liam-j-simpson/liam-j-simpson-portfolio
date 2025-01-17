import {
  EditProject,
  Project,
  ProjectArray,
  ProjectData,
} from 'models/projects'
import { useDeleteProject } from './hooks/useDeleteProject'
import { useState } from 'react'
import { useEditProject } from './hooks/useEditProject'
import { Input } from '../shadcn/Input'

export function ManageProjects({ data }: ProjectArray) {
  const deleteMutation = useDeleteProject()
  const editMutation = useEditProject()

  const [changes, setChanges] = useState<Project>({
    name: '',
    description: '',
    tags: [],
    date: '',
  })
  console.log('changes', changes)
  const newChanges: EditProject = {}
  if (changes.name !== '') {
    newChanges.name = changes.name
  }
  if (changes.description !== '') {
    newChanges.description = changes.description
  }
  if (changes.tags.length > 0) {
    newChanges.tags = changes.tags
  }
  if (changes.date !== '') {
    newChanges.date = changes.date
  }

  const [editId, setEditId] = useState<number>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setChanges({ ...changes, [name]: value })
  }

  function handleDelete(id: number) {
    deleteMutation.mutate(id)
  }

  function handleEdit(id: number) {
    setEditId(id)
  }

  const handleChangeTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newTags = e.currentTarget.value
      setChanges({ ...changes, tags: [...changes.tags, newTags] })
      e.currentTarget.value = ''
    }
  }
  function handleSave(id: number, newChanges: EditProject) {
    editMutation.mutate({ id: id, changes: newChanges })
    setEditId(undefined)
    setChanges({ name: '', description: '', tags: [], date: '' })
  }

  return (
    <>
      <h2 className="text-s">Manage Projects</h2>

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
                  {item.id === editId ? (
                    <Input
                      id="name"
                      name="name"
                      placeholder={item.name}
                      onChange={handleChange}
                    ></Input>
                  ) : (
                    item.name
                  )}
                </td>
                <td className="break-words">
                  {item.id === editId ? (
                    <Input
                      id="description"
                      name="description"
                      placeholder={item.description}
                      onChange={handleChange}
                    ></Input>
                  ) : (
                    item.description
                  )}
                </td>
                <td className="break-words">
                  {item.id === editId ? (
                    <Input
                      id="tags"
                      name="tags"
                      placeholder="add some tags"
                      onKeyDown={handleChangeTags}
                    ></Input>
                  ) : (
                    item.tags
                  )}
                </td>
                <td className="break-words">
                  {item.id === editId ? (
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      placeholder={item.date}
                      onChange={handleChange}
                    ></Input>
                  ) : (
                    item.date
                  )}
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
                    onClick={() => handleSave(item.id, newChanges)}
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
