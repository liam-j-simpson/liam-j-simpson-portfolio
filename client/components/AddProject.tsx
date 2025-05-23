import { Input } from '../shadcn/Input'
import { useState } from 'react'
import { Project } from 'models/projects'
import { useAddProject } from './hooks/useAddProject'

export function AddProject() {
  const addProjectMutation = useAddProject()

  const [form, setForm] = useState<Project>({
    name: '',
    sort: '',
    summary: '',
    description: '',
    tags: [],
    url: '',
    repo: '',
    date: '',
  })
  const [thumbnail, setThumbnail] = useState<File[]>([])
  const [gallery, setGallery] = useState<File[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData: FormData = new FormData()
    formData.append('name', form.name)
    formData.append('sort', form.sort)
    formData.append('thumbnail', thumbnail[0])
    formData.append('summary', form.summary)
    formData.append('description', form.description)
    formData.append('date', form.date)

    form.tags?.forEach((item) => {
      formData.append('tags[]', item)
    })

    if (form.url !== '') {
      formData.append(
        'url',
        form.url?.includes('https://') ? form.url : `https://${form.url}`,
      )
    }

    if (form.repo !== '') {
      formData.append(
        'repo',
        form.repo?.includes('https://') ? form.repo : `https://${form.repo}`,
      )
    }

    if (gallery.length !== 0) {
      gallery.forEach((item) => {
        formData.append('gallery', item)
      })
    }

    addProjectMutation.mutate(formData)
    setForm({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleChangeTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newTags = e.currentTarget.value
      setForm({ ...form, tags: [...(form.tags || []), newTags] })
      e.currentTarget.value = ''
    }
  }
  const handleDeleteTag = (index: number) => {
    setForm({ ...form, tags: form.tags.filter((_e, i) => i !== index) })
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
      <h2 className="~text-hs/hxs mb-1 lg:mb-3">Add Project</h2>
      <p className="mb-3">Fill out the form below to add a project.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 p-3 bg-[#F4F3ED] rounded-md">
        <div className="px-3">
          <h3 className="text-hxs mb-1">Name*</h3>
          <Input
            id="name"
            name="name"
            aria-label="Project Name"
            placeholder="Enter project name"
            onChange={handleChange}
            value={form.name}
            required
          ></Input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Sort*</h3>
          <Input
            id="sort"
            name="sort"
            aria-label="Project Sort Number"
            placeholder="Enter sort number"
            onChange={handleChange}
            value={form.sort}
            required
          ></Input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Thumbnail*</h3>
          <input
            type="file"
            name="thumbnail"
            onChange={handleChangeThumbnail}
            accept="image/*"
            required
          ></input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Summary*</h3>
          <Input
            id="summary"
            name="summary"
            aria-label="Summary"
            placeholder="Enter summary"
            onChange={handleChange}
            value={form.summary}
            required
          ></Input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Description*</h3>
          <Input
            id="description"
            name="description"
            aria-label="Description"
            placeholder="Enter description"
            onChange={handleChange}
            value={form.description}
            className="px-3"
            required
          ></Input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Gallery</h3>
          <input
            type="file"
            name="gallery"
            aria-label="Gallery upload"
            onChange={handleChangeGallery}
            accept="image/*"
            multiple
          ></input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Tags</h3>
          <Input
            className="px-3"
            id="tags"
            name="tags"
            aria-label="Tags"
            placeholder="Submit with <Enter>"
            onKeyDown={handleChangeTags}
          ></Input>
          <ul className="flex flex-wrap">
            {form.tags &&
              form.tags.map((element, index) => (
                <li key={index}>
                  <div className="rounded-full px-6 outline my-3 mr-3">
                    {element}
                    <button
                      className="ml-1"
                      onClick={() => handleDeleteTag(index)}
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Live Site</h3>
          <Input
            id="url"
            name="url"
            aria-label="live site url"
            placeholder="Enter url"
            onChange={handleChange}
            value={form.url}
            defaultValue="https://"
            className="px-3"
          ></Input>
        </div>
        <div>
          <h3 className="text-hxs mb-1">GitHub Repo</h3>
          <Input
            id="repo"
            name="repo"
            aria-label="repo url"
            placeholder="Enter repo url"
            onChange={handleChange}
            value={form.repo}
            className="px-3"
          ></Input>
        </div>
        <div className="px-3">
          <h3 className="text-hxs mb-1">Date*</h3>
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
        <div className="px-3">
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
