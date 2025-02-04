import { Input } from '../shadcn/Input'
import { useState } from 'react'
import { Project } from 'models/projects'
import { useAddProject } from './hooks/useAddProject'

export function AddProject() {
  const addProjectMutation = useAddProject()

  const [form, setForm] = useState<Project>({
    name: '',
    summary: '',
    description: '',
    tags: [],
    url: '',
    date: '',
  })
  const [thumbnail, setThumbnail] = useState<File[]>([])
  const [gallery, setGallery] = useState<File[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', `${form.name}`)
    formData.append('summary', `${form.summary}`)
    formData.append('description', `${form.description}`)
    formData.append('url', `https://${form.url}`)
    formData.append('date', `${form.date}`)
    form.tags.forEach((tag) => {
      formData.append('tags', tag)
    })
    if (thumbnail.length !== 0) {
      formData.append('thumbnail', thumbnail[0])
    }
    if (gallery.length !== 0) {
      gallery.forEach((item) => {
        formData.append('gallery', item)
      })
    }

    addProjectMutation.mutate(formData)
    setForm({
      name: '',
      summary: '',
      description: '',
      tags: [],
      url: '',
      date: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleChangeTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newTags = e.currentTarget.value
      setForm({ ...form, tags: [...form.tags, newTags] })
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

  return (
    <form
      onSubmit={handleSubmit}
      className="pb-6"
      action="/"
      method="post"
      encType="multipart/form-data"
    >
      <h2 className="text-l border-black border-t-2">Add Project</h2>
      <p className="mb-3">Fill out the form below to add a project.</p>

      <div className="grid grid-cols-9 gap-3 pb-24">
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
        <div>
          <Input
            id="name"
            name="name"
            aria-label="Project Name"
            placeholder="Enter project name"
            onChange={handleChange}
            value={form.name}
            className="px-3"
          ></Input>
        </div>
        <div>
          <input
            type="file"
            name="thumbnail"
            onChange={handleChangeThumbnail}
            accept="image/*"
          ></input>
        </div>

        <div>
          <Input
            id="summary"
            name="summary"
            aria-label="Summary"
            placeholder="Enter summary"
            onChange={handleChange}
            value={form.summary}
            className="px-3"
          ></Input>
        </div>
        <div>
          <Input
            id="description"
            name="description"
            aria-label="Description"
            placeholder="Enter description"
            onChange={handleChange}
            value={form.description}
            className="px-3"
          ></Input>
        </div>
        <div>
          <input
            type="file"
            name="gallery"
            onChange={handleChangeGallery}
            accept="image/*"
            multiple
          ></input>
        </div>
        <div>
          <Input
            className="px-3"
            id="tags"
            name="tags"
            aria-label="Tags"
            placeholder="Submit with <Enter>"
            onKeyDown={handleChangeTags}
          ></Input>
          <p>{form.tags}</p>
        </div>
        <div>
          <Input
            id="url"
            name="url"
            aria-label="URL"
            placeholder="Enter url"
            onChange={handleChange}
            value={form.url}
            className="px-3"
          ></Input>
        </div>
        <div>
          <Input
            id="date"
            name="date"
            aria-label="Date"
            type="date"
            placeholder="Date"
            onChange={handleChange}
            value={form.date}
            className="px-3"
          ></Input>
        </div>
        <div>
          <button
            type="submit"
            className="rounded-full px-6 outline mb-3 mr-3 bg-[#304637] text-[#E7E6E0]"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
