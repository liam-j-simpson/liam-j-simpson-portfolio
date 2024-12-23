import { Label } from '@radix-ui/react-label'
import { Button } from '../shadcn/Button'
import { Input } from '../shadcn/Input'
export function Admin() {
  return (
    <>
      <h1 className="text-xl">ADMIN</h1>
      <div>
        <h2 className="text-s">Current Projects</h2>
      </div>
      <form>
        <h2 className="text-s">Create New Project</h2>
        <p className="mb-2.5">
          Fill out the form below to create a new project.
        </p>

        <Label htmlFor="projectName">Project Name</Label>
        <Input id="projectName" placeholder="Project Name"></Input>

        <Label htmlFor="shortDescription">Short Description</Label>
        <Input id="shortDescription" placeholder="Short Description"></Input>

        <Label htmlFor="longDescription">Long Description</Label>
        <Input id="longDescription" placeholder="Long Description"></Input>

        <Label htmlFor="stack">Stack</Label>
        <Input id="stack" placeholder="Stack"></Input>

        <Label htmlFor="date">Date</Label>
        <Input id="date" placeholder="Date"></Input>

        <Button type="submit" className="">
          Submit
        </Button>
      </form>
    </>
  )
}
