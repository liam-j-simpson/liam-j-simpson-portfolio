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
  const { name, date, description, tags } = project
  return await db('projects').insert({
    name,
    date,
    description,
    tags,
  })
}

export async function deleteProject(id: number) {
  return await db('projects').where('id', id).del()
}

export async function editProject(id: number, changes: Project) {
  return await db('projects').where('id', id).update(changes)
}
