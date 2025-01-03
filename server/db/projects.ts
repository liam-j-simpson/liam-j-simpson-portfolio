import db from './connection'

export async function getProjects() {
  const projects = await db('projects').select()
  return projects
}

//  get all projects

// get one project

// post / create a new project

// put / update a project

// delete a project
