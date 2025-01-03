import { Project } from 'models/projects'
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
  const { name, date, short_description, long_description, stack } = project
  await db('projects').insert({
    name,
    date,
    short_description,
    long_description,
    stack,
  })
  return { success: true, message: `${name} has been successfully created.` }
}

// put / update a project

// delete a project
