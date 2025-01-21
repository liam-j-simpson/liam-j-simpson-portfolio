import { Label } from '@radix-ui/react-label'
import { Input } from '../shadcn/Input'
import { useState } from 'react'
import { Project } from 'models/projects'
import { useAddProject } from './hooks/useAddProject'

export function AddProject() {
  const addProjectMutation = useAddProject()

  const [form, setForm] = useState<Project>({
    name: '',
    description: '',
    tags: [],
    date: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addProjectMutation.mutate(form)
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
      <h2 className="text-l">Add Project</h2>
      <p className="mb-3">Fill out the form below to add a project.</p>

      <div className="grid grid-cols-6 gap-4">
        <div>
          <Label htmlFor="name">
            <h3 className="text-s">Project Name</h3>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter project name"
            onChange={handleChange}
            className="px-3"
          ></Input>
        </div>
        <div>
          <Label htmlFor="description">
            <h3 className="text-s">Description</h3>
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="Enter description"
            onChange={handleChange}
            className="px-3"
          ></Input>
        </div>
        <div>
          <Label htmlFor="tags">
            <h3 className="text-s">Tags</h3>
          </Label>
          <Input
            className="px-3"
            id="tags"
            name="tags"
            placeholder="Press enter to add tag"
            onKeyDown={handleChangeTags}
          ></Input>
          <p>{form.tags}</p>
        </div>
        <div>
          <Label htmlFor="date">
            <h3 className="text-s">Date</h3>
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            placeholder="Date"
            onChange={handleChange}
            className="px-3"
          ></Input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  )
}
