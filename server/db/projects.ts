import db from './connection'

export async function getAllProjects() {
  const projects = await db('projects').select()
  return projects
}

export async function getProjectById(id: number) {
  const projects = await db('projects').select().where({ id })
  return projects
}

export async function addProject(project) {
  const { name, date, shortDescription, longDescription, stack } = project
  await db('projects').insert({
    name,
    date,
    shortDescription,
    longDescription,
    stack,
  })
  return { success: true, message: `${name} has been successfully created.` }
}

// put / update a project

// delete a project
