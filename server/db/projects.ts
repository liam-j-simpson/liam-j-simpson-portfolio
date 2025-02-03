import { EditProject, Project } from 'models/projects'
import db from './connection'

export async function getAllProjects() {
  const projects = await db('projects').select()
  const updatedProjects = projects.map((project) => {
    return { ...project, tags: JSON.parse(project.tags) }
  })
  return updatedProjects
}

export async function getProjectById(id: number) {
  const project = await db('projects').where({ id }).select().first()
  const updatedProject = { ...project, tags: JSON.parse(project.tags) }
  return updatedProject
}

export async function addProject(project: Project, thumbnail) {
  const { name, date, summary, description, url, tags } = project
  const tagsJson = Array.isArray(tags)
    ? JSON.stringify(tags)
    : JSON.stringify([tags])
  return await db('projects').insert({
    name,
    date,
    summary,
    description,
    url,
    tags: tagsJson,
    thumbnail,
  })
}

export async function deleteProject(id: number) {
  return await db('projects').where('id', id).del()
}

export async function editProject(id: number, changes: EditProject) {
  const { name, date, summary, description, url, tags } = changes
  if (tags !== undefined) {
    const tagsJson = JSON.stringify(tags)
    return await db('projects').where('id', id).update({
      name,
      date,
      summary,
      description,
      url,
      tags: tagsJson,
    })
  } else await db('projects').where('id', id).update(changes)
}
