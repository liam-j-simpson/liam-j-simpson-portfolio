import { Project } from 'models/projects'
import db from './connection'

export async function getAllProjects() {
  console.log('🔍 Starting getAllProjects database query')
  const projects = await db('projects').select()
  const updatedProjects = projects.map((project) => {
    return {
      ...project,
      tags: JSON.parse(project.tags),
      gallery: JSON.parse(project.gallery),
    }
  })
  console.log('🔄 Processed projects:', updatedProjects)
  return updatedProjects
}

export async function getProjectById(id: number) {
  const project = await db('projects').where({ id }).select().first()
  const updatedProject = {
    ...project,
    tags: JSON.parse(project.tags),
    gallery: JSON.parse(project.gallery),
  }
  return updatedProject
}

export async function addProject(
  project: Project,
  thumbnail: string | undefined,
  gallery: string | undefined,
) {
  const { name, date, summary, description, url, tags } = project
  const galleryJson = JSON.stringify(gallery)

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
    gallery: galleryJson,
  })
}

export async function deleteProject(id: number) {
  return await db('projects').where('id', id).del()
}

export async function editProject(
  id: number,
  changes: Project,
  thumbnail: string | undefined,
  gallery: string | undefined,
) {
  const { name, date, summary, description, url, tags } = changes
  const galleryJson = JSON.stringify(gallery)

  if (tags !== undefined) {
    const tagsJson = Array.isArray(tags)
      ? JSON.stringify(tags)
      : JSON.stringify([tags])

    return await db('projects').where('id', id).update({
      name,
      date,
      summary,
      description,
      url,
      tags: tagsJson,
      thumbnail,
      gallery: galleryJson,
    })
  } else
    await db('projects').where('id', id).update({
      name,
      date,
      summary,
      description,
      url,
      tags,
      thumbnail,
      gallery: galleryJson,
    })
}
