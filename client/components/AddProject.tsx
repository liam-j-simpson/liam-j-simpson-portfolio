import { Label } from '@radix-ui/react-label'
import { Button } from '../shadcn/Button'
import { Input } from '../shadcn/Input'

export function AddProject() {
  return (
    <form>
      <h2 className="text-s">Add Project</h2>
      <p className="mb-2.5">Fill out the form below to add a project.</p>

      <Label htmlFor="projectName">Project Name</Label>
      <Input id="projectName" placeholder="Enter project name"></Input>

      <Label htmlFor="description">Description</Label>
      <Input id="description" placeholder="Enter description"></Input>

      <Label htmlFor="stack">Stack</Label>
      <Input id="stack" placeholder="Press enter to add stack tag"></Input>

      <Label htmlFor="date">Date</Label>
      <Input id="date" placeholder="Date"></Input>

      <Button type="submit">Submit</Button>
    </form>
  )
}
