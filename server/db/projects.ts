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

export async function addProject(project: Project) {
  const { name, date, short_description, long_description, stack } = project
  return await db('projects').insert({
    name,
    date,
    short_description,
    long_description,
    stack,
  })
}

export async function deleteProject(id: number) {
  return await db('projects').where('id', id).del()
}

// put / update a project
