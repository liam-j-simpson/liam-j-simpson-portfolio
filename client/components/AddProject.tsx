import { Label } from '@radix-ui/react-label'
import { Button } from '../shadcn/Button'
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
    <form onSubmit={handleSubmit}>
      <h2 className="text-s">Add Project</h2>
      <p className="mb-2.5">Fill out the form below to add a project.</p>

      <Label htmlFor="name">Project Name</Label>
      <Input
        id="name"
        name="name"
        placeholder="Enter project name"
        onChange={handleChange}
      ></Input>

      <Label htmlFor="description">Description</Label>
      <Input
        id="description"
        name="description"
        placeholder="Enter description"
        onChange={handleChange}
      ></Input>

      <Label htmlFor="tags">Tags</Label>
      <Input
        id="tags"
        name="tags"
        placeholder="Press enter to add tag"
        onKeyDown={handleChangeTags}
      ></Input>
      <p>{form.tags}</p>

      <Label htmlFor="date">Date</Label>
      <Input
        id="date"
        name="date"
        type="date"
        placeholder="Date"
        onChange={handleChange}
      ></Input>

      <Button type="submit">Submit</Button>
    </form>
  )
}
