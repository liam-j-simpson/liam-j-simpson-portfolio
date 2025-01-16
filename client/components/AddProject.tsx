import { Label } from '@radix-ui/react-label'
import { Button } from '../shadcn/Button'
import { Input } from '../shadcn/Input'
import { useState } from 'react'

export function AddProject() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    stack: [],
    date: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = () => {}

  const handleChangeDate = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleChangeTags = () => {}
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

      <Label htmlFor="stack">Stack</Label>
      <Input
        id="stack"
        name="stack"
        placeholder="Press enter to add stack tag"
        onChange={handleChangeTags}
      ></Input>

      <Label htmlFor="date">Date</Label>
      <Input
        id="date"
        name="date"
        placeholder="Date"
        onChange={handleChangeDate}
      ></Input>

      <Button type="submit">Submit</Button>
    </form>
  )
}
