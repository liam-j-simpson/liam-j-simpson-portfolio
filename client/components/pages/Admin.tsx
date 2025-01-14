import { AddProject } from '../AddProject'
import { ViewProject } from '../ViewProject'

export function Admin() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <h1 className="text-xl">ADMIN</h1>
      <div>
        <ViewProject />
      </div>

      <AddProject onSubmit={handleSubmit} />
      {/* PROP DRILLING THE ONSUBMIT FUNCTION */}
    </>
  )
}
