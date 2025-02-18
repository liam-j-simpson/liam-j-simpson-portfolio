import { Project } from '../../models/projects'
import { connectToDb } from './connection'
import { ObjectId } from 'mongodb'

//GET PROJECTS COLLECTION
export async function connectProjectCollection() {
  const db = await connectToDb()
  const collection = db.collection('projects')
  return collection
}

// GET ALL PROJECTS
export async function getAllProjects() {
  const collection = await connectProjectCollection()
  try {
    const projects = await collection.find({}).toArray()
    const projectsWithId = projects.map((project) => {
      const { _id, ...rest } = project
      return { id: _id, ...rest }
    })
    return projectsWithId
  } catch (error) {
    throw new Error(`Error getting projects, ${error}`)
  }
}

// GET ONE PROJECT
export async function getProjectById(id: string) {
  const collection = await connectProjectCollection()
  try {
    const project = await collection.findOne({ _id: new ObjectId(id) })
    return project
  } catch (error) {
    throw new Error(`Error getting project:${id}, ${error}`)
  }
}

// CREATE PROJECT
export async function addProject(project: Project) {
  const collection = await connectProjectCollection()
  try {
    collection.insertOne(project)
  } catch (error) {
    throw new Error(`Error creating project, ${error}`)
  }
}

//EDIT PROJECT
export async function editProject(id: string, changes: Project) {
  const collection = await connectProjectCollection()
  try {
    collection.updateOne({ _id: new ObjectId(id) }, { $set: changes })
  } catch (error) {
    throw new Error(`Error editing project:${id}, ${error}`)
  }
}

// DELETE PROJECT
export async function deleteProject(id: string) {
  const collection = await connectProjectCollection()
  try {
    return await collection.deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(`Error deleting project:${id}, ${error}`)
  }
}
