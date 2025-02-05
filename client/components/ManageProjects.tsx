import { Project, ProjectArray, ProjectData } from 'models/projects'
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
  const [gallery, setGallery] = useState<File[]>([])
  const [thumbnail, setThumbnail] = useState<File[]>([])

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

  const handleChangeThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setThumbnail(Array.from(e.target.files))
    }
  }

  const handleChangeGallery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGallery(Array.from(e.target.files))
    }
  }

  function handleSave(id: number) {
    const formData = new FormData()
    if (changes.name !== '') {
      formData.append('name', `${changes.name}`)
    }
    if (changes.summary !== '') {
      formData.append('summary', `${changes.summary}`)
    }
    if (changes.description !== '') {
      formData.append('description', `${changes.description}`)
    }
    if (changes.tags.length > 0) {
      changes.tags.forEach((tag) => {
        formData.append('tags', tag)
      })
    }

    if (changes.url !== '') {
      formData.append('url', `${changes.url}`)
    }
    if (changes.date !== '') {
      formData.append('date', `${changes.date}`)
    }
    if (thumbnail.length !== 0) {
      formData.append('thumbnail', thumbnail[0])
    }
    if (gallery.length !== 0) {
      gallery.forEach((item) => {
        formData.append('gallery', item)
      })
    }
    editMutation.mutate({ id: id, formData })
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
      <h2 className="text-l pb-3 border-black border-t-2">Manage Projects</h2>

      <div className="grid grid-cols-10 gap-3 pb-24">
        <div>
          <h3 className="text-s">Project Name</h3>
        </div>
        <div>
          <h3 className="text-s">Thumbnail</h3>
        </div>
        <div>
          <h3 className="text-s">Summary</h3>
        </div>
        <div>
          <h3 className="text-s">Description</h3>
        </div>
        <div>
          <h3 className="text-s">Gallery</h3>
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
                <input
                  type="file"
                  name="thumbnail"
                  onChange={handleChangeThumbnail}
                  accept="image/*"
                ></input>
              ) : (
                <img src={item.thumbnail} alt="project thumbnail"></img>
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
                <input
                  type="file"
                  name="thumbnail"
                  onChange={handleChangeGallery}
                  accept="image/*"
                  multiple
                ></input>
              ) : (
                <ul>
                  {item.gallery.map((item) => (
                    <li key={item}>
                      <img src={item} alt="project gallery" className="mb-1" />
                    </li>
                  ))}
                </ul>
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
                  className="rounded-full px-6 outline mb-3 mr-3 bg-[#304637] text-[#E7E6E0]"
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
                  onClick={() => handleSave(item.id)}
                  className="rounded-full px-6 outline mb-3 mr-3 bg-[#304637] text-[#E7E6E0]"
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
                className="rounded-full px-6 outline mb-3 mr-3 bg-[#ED642E] text-[#E7E6E0]"
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
