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
    sort: '',
    summary: '',
    description: '',
    tags: [],
    url: '',
    repo: '',
    date: '',
  })
  const [gallery, setGallery] = useState<File[]>([])
  const [thumbnail, setThumbnail] = useState<File[]>([])
  console.log(changes)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
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
      setChanges({ ...changes, tags: [...(changes.tags || []), newTags] })

      e.currentTarget.value = ''
    }
  }

  const handleDeleteTag = (index: number) => {
    setChanges({
      ...changes,
      tags: changes.tags.filter((_e, i: number) => i !== index),
    })
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
    const formData: FormData = new FormData()
    if (changes.name !== '') {
      formData.append('name', `${changes.name}`)
    }
    if (changes.sort !== '') {
      formData.append('sort', `${changes.sort}`)
    }
    if (changes.summary !== '') {
      formData.append('summary', `${changes.summary}`)
    }
    if (changes.description !== '') {
      formData.append('description', `${changes.description}`)
    }
    if (changes.tags) {
      changes.tags.forEach((tag) => {
        formData.append('tags', tag)
      })
    }

    if (changes.url !== '') {
      if (changes.url?.includes('https://')) {
        formData.append('url', `${changes.url}`)
      } else {
        formData.append('url', `https://${changes.url}`)
      }
    }
    if (changes.repo !== '') {
      if (changes.repo?.includes('https://')) {
        formData.append('repo', `${changes.repo}`)
      } else {
        formData.append('repo', `https://${changes.repo}`)
      }
    }
    if (changes.date !== '') {
      formData.append('date', `${changes.date}`)
    }
    if (thumbnail.length !== 0) {
      formData.append('thumbnail', thumbnail[0])
    }
    if (gallery.length > 0) {
      gallery.forEach((item) => {
        formData.append('gallery', item)
      })
    }
    editMutation.mutate({ id: id, formData })
    setEditId(undefined)
    setChanges({
      name: '',
      sort: '',
      summary: '',
      description: '',
      tags: [],
      url: '',
      repo: '',
      date: '',
    })
  }

  return (
    <>
      <h2 className="~text-hs/hxs mb-1 lg:mb-3">Projects</h2>
      <div className="grid grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24">
        {data.map((item: ProjectData) => (
          <React.Fragment key={item.id}>
            <div className="bg-[#F4F3ED] p-6 rounded-md">
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">Project Name</h3>
                    <Input
                      id="name"
                      name="name"
                      defaultValue={item.name}
                      onChange={handleChange}
                      className="py-2 pr-8"
                    />
                  </>
                ) : (
                  <h3 className="text-hxs">{item.name}</h3>
                )}
              </div>
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">Sort Order</h3>
                    <Input
                      id="sort"
                      name="sort"
                      defaultValue={item.sort}
                      onChange={handleChange}
                      className="py-2 pr-8"
                    />
                  </>
                ) : (
                  <p>{item.sort}</p>
                )}
              </div>
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">Thumbnail</h3>
                    <input
                      type="file"
                      name="thumbnail"
                      onChange={handleChangeThumbnail}
                      accept="image/*"
                      className="py-2 pr-8"
                    ></input>
                  </>
                ) : (
                  <img src={item.thumbnail} alt="project thumbnail"></img>
                )}
              </div>
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">Tags</h3>
                    <Input
                      id="tags"
                      name="tags"
                      aria-label="Tags"
                      placeholder="Submit with <Enter>"
                      onKeyDown={handleChangeTags}
                      className="py-2 pr-8"
                    />

                    <ul className="flex flex-wrap">
                      {changes.tags &&
                        changes.tags.map((element, index) => (
                          <li
                            key={index}
                            className="rounded-full px-6 outline my-3 mr-3"
                          >
                            {element}
                            <button
                              className="ml-1"
                              onClick={() => handleDeleteTag(index)}
                            >
                              x
                            </button>
                          </li>
                        ))}
                    </ul>
                  </>
                ) : (
                  <ul className="flex flex-wrap">
                    {item.tags &&
                      item.tags.map((item) => (
                        <li
                          key={item}
                          className="rounded-full px-6 outline mb-3 mr-3"
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">Date</h3>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      defaultValue={item.date}
                      onChange={handleChange}
                      className="py-2 pr-8"
                    />
                  </>
                ) : (
                  `Deployed on ${item.date}`
                )}
              </div>

              <div className="break-words py-3">
                <h3 className="text-hxs">Summary</h3>
                {item.id === editId ? (
                  <>
                    <textarea
                      className="py-2 pl-4 pr-8 field-sizing-content rounded-sm "
                      id="summary"
                      name="summary"
                      defaultValue={item.summary}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </>
                ) : (
                  item.summary
                )}
              </div>

              <div className="break-words py-3">
                <h3 className="text-hxs">Description</h3>
                {item.id === editId ? (
                  <textarea
                    className="py-2 pl-4 pr-8 field-sizing-content rounded-sm"
                    id="description"
                    name="description"
                    defaultValue={item.description}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                ) : (
                  item.description
                )}
              </div>
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">URL</h3>
                    <Input
                      id="url"
                      name="url"
                      aria-label="live site url"
                      placeholder="Enter url"
                      defaultValue={item.url}
                      onChange={handleChange}
                      className="py-2 pr-8"
                    />
                  </>
                ) : (
                  item.url && `Live Site: ${item.url}`
                )}
              </div>

              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs mb-1">GitHub Repo</h3>
                    <Input
                      id="repo"
                      name="repo"
                      aria-label="repo url"
                      placeholder="Enter GitHub repo url"
                      onChange={handleChange}
                      defaultValue={item.repo}
                      className="py-2 pr-8"
                    />
                  </>
                ) : (
                  item.repo && `GitHub Repo: ${item.repo}`
                )}
              </div>
              <div className="break-words py-3">
                {item.id === editId ? (
                  <>
                    <h3 className="text-hxs">Gallery</h3>
                    <input
                      type="file"
                      name="thumbnail"
                      onChange={handleChangeGallery}
                      accept="image/*"
                      className="py-2 pr-8"
                      multiple
                    ></input>
                  </>
                ) : (
                  <ul>
                    {item.gallery &&
                      item.gallery.map((item) => (
                        <li key={item}>
                          <img
                            src={item}
                            alt="project gallery"
                            className="mb-3"
                          />
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {item.id !== editId && (
                <div>
                  <button
                    aria-label="edit project"
                    value="edit"
                    onClick={() => handleEdit(item.id)}
                    className="rounded-full px-6 outline my-3 mr-3 bg-[#304637] text-[#E7E6E0]"
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
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
