import { EditProject, Project } from 'models/projects'
import db from './connection'

export async function getAllProjects() {
  const projects = await db('projects').select()
  const updatedProjects = projects.map((project) => {
    return {
      ...project,
      tags: JSON.parse(project.tags),
      gallery: JSON.parse(project.gallery),
    }
  })
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
  const tagsJson = Array.isArray(tags)
    ? JSON.stringify(tags)
    : JSON.stringify([tags])
  const galleryJson = JSON.stringify(gallery)

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
  changes: EditProject,
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
