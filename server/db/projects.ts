import { Project } from 'models/projects'
import db from './connection'

// GET ALL PROJECTS
export async function getAllProjects() {
  try {
    const projects = await db('projects').select()
    return projects
  } catch (error) {
    throw new Error(`Error getting projects, ${error}`)
  }
}

// GET ONE PROJECT
export async function getProjectById(id: string) {
  try {
    const project = await db('projects').where('id', id).first().select()
    return project
  } catch (error) {
    throw new Error(`Error getting project:${id}, ${error}`)
  }
}

// CREATE PROJECT
export async function addProject(project: Project) {
  try {
    const newProject = await db('projects').insert(project)
    return newProject
  } catch (error) {
    throw new Error(`Error creating project, ${error}`)
  }
}

//EDIT PROJECT
export async function editProject(id: string, changes: Project) {
  try {
    const editProject = await db('projects').where('id', id).update(changes)
    return editProject
  } catch (error) {
    throw new Error(`Error editing project:${id}, ${error}`)
  }
}

// DELETE PROJECT
export async function deleteProject(id: string) {
  try {
    const deleteProject = await db('projects').where('id', id).del()
    return deleteProject
  } catch (error) {
    throw new Error(`Error deleting project:${id}, ${error}`)
  }
}
