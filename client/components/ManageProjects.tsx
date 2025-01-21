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
import React from 'react'

export function ManageProjects({ data }: ProjectArray) {
  const deleteMutation = useDeleteProject()
  const editMutation = useEditProject()

  const [editId, setEditId] = useState<number>()
  const [changes, setChanges] = useState<Project>({
    name: '',
    description: '',
    tags: [],
    date: '',
  })
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
      <h2 className="text-s pb-5">Manage Projects</h2>

      <div className="grid grid-cols-6 gap-4 pb-5">
        <div>
          <h3 className="text-s">Project Name</h3>
        </div>
        <div>
          <h3 className="text-s">Description</h3>
        </div>
        <div>
          <h3 className="text-s">Tags</h3>
        </div>
        <div>
          <h3 className="text-s">Date</h3>
        </div>
        <div></div>
        <div></div>

        {data.map((item: ProjectData) => (
          <React.Fragment key={item.id}>
            <div className="break-words">
              {item.id === editId ? (
                <Input
                  id="name"
                  name="name"
                  defaultValue={item.name}
                  onChange={handleChange}
                />
              ) : (
                item.name
              )}
            </div>
            <div className="break-words">
              {item.id === editId ? (
                <Input
                  id="description"
                  name="description"
                  defaultValue={item.description}
                  onChange={handleChange}
                />
              ) : (
                item.description
              )}
            </div>
            <div className="break-words">
              {item.id === editId ? (
                <Input
                  id="tags"
                  name="tags"
                  placeholder="Submit tags with <Enter>"
                  onKeyDown={handleChangeTags}
                />
              ) : (
                <button className="rounded-full px-5 outline mb-2.5 mr-2.5">
                  {item.tags}
                </button>
              )}
            </div>
            <div className="break-words">
              {item.id === editId ? (
                <Input
                  id="date"
                  name="date"
                  type="date"
                  defaultValue={item.date}
                  onChange={handleChange}
                />
              ) : (
                item.date
              )}
            </div>
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
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
