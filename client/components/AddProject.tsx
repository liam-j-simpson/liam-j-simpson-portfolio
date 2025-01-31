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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addProjectMutation.mutate(form)
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

  return (
    <form onSubmit={handleSubmit} className="pb-6">
      <h2 className="text-l border-black border-t-2">Add Project</h2>
      <p className="mb-3">Fill out the form below to add a project.</p>

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
