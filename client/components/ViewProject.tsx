// import { ProjectData } from 'models/projects'

import { Project, ProjectArray, ProjectData } from "models/projects";

export function ViewProject() {
  return (
    <>
      <h2 className="text-s">Projects</h2>

      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-1/5">
              <h3 className="text-s">Name</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Short Description</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Long Description</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Stack</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Date</h3>
            </th>
          </tr>
        </thead>
        <tbody className="!text-left">
          {/* {data.map((project) => (
            <tr key={project.id}>
              <td className="break-words">{project.name}</td>
              <td className="break-words">{project.shortDescription}</td>
              <td className="break-words">{project.longDescription}</td>
              <td className="break-words">{project.stack}</td>
              <td className="break-words">{project.date}</td>
              DELETE BUTTON COMPONENT
              EDIT BUTTON COMPONENT
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  )
}
