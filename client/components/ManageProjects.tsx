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
    summary: '',
    description: '',
    tags: [],
    url: '',
    date: '',
  })

  const newChanges: EditProject = {}
  if (changes.name !== '') {
    newChanges.name = changes.name
  }
  if (changes.summary !== '') {
    newChanges.summary = changes.summary
  }
  if (changes.description !== '') {
    newChanges.description = changes.description
  }
  if (changes.tags.length > 0) {
    newChanges.tags = changes.tags
  }
  if (changes.url !== '') {
    newChanges.url = changes.url
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
    setChanges({
      name: '',
      summary: '',
      description: '',
      tags: [],
      url: '',
      date: '',
    })
  }

  return (
    <>
      <h2 className="text-l pb-3">Manage Projects</h2>

      <div className="grid grid-cols-8 gap-3 pb-24">
        <div>
          <h3 className="text-s">Project Name</h3>
        </div>
        <div>
          <h3 className="text-s">Summary</h3>
        </div>
        <div>
          <h3 className="text-s">Description</h3>
        </div>
        <div>
          <h3 className="text-s">Tags</h3>
        </div>
        <div>
          <h3 className="text-s">URL</h3>
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
                  id="summary"
                  name="summary"
                  defaultValue={item.summary}
                  onChange={handleChange}
                />
              ) : (
                item.summary
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
                <>
                  <Input
                    id="tags"
                    name="tags"
                    placeholder="Submit with <Enter>"
                    onKeyDown={handleChangeTags}
                  />
                  <ul>
                    {item.tags.map((item) => (
                      <li key={item}>
                        <button className="rounded-full px-6 outline mb-3 mr-3">
                          {item}
                          <button className="pl-2">x</button>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <ul>
                  {item.tags.map((item) => (
                    <li key={item}>
                      <button className="rounded-full px-6 outline mb-3 mr-3">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="break-words">
              {item.id === editId ? (
                <Input
                  id="url"
                  name="url"
                  defaultValue={item.url}
                  onChange={handleChange}
                />
              ) : (
                item.url
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

            {item.id !== editId && (
              <div>
                <button
                  aria-label="edit project"
                  value="edit"
                  onClick={() => handleEdit(item.id)}
                  className="rounded-full px-6 outline mb-3 mr-3"
                >
                  Edit
                </button>
              </div>
            )}

            {item.id === editId && (
              <div>
                <button
                  aria-label="save changes"
                  value="save"
                  onClick={() => handleSave(item.id, newChanges)}
                  className="rounded-full px-6 outline mb-3 mr-3"
                >
                  Save
                </button>
              </div>
            )}

            <div>
              <button
                aria-label="delete project"
                value="delete"
                onClick={() => handleDelete(item.id)}
                className="rounded-full px-6 outline mb-3 mr-3"
              >
                Delete
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
