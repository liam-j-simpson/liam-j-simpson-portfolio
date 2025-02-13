import { Project } from 'models/projects'
import { connectToDb } from './connection'
import { ObjectId } from 'mongodb'

//GET PROJECTS COLLECTION
export async function getProjectsCollection() {
  const db = await connectToDb()
  const collection = db.collection('projects')
  return collection
}

// GET ALL PROJECTS
export async function getAllProjects() {
  const collection = await getProjectsCollection()
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
  const collection = await getProjectsCollection()
  try {
    return await collection.findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(`Error getting Project:${id}, ${error}`)
  }
}

// CREATE PROJECT
export async function addProject(
  project: Project,
  thumbnail: string | undefined,
  gallery: string | undefined,
) {
  const { name, date, summary, description, url, tags } = project

  const collection = await getProjectsCollection()
  collection.insertOne({
    name,
    date,
    summary,
    description,
    url,
    tags,
    thumbnail,
    gallery,
  })
}

// DELETE PROJECT
export async function deleteProject(id: string) {
  const collection = await getProjectsCollection()
  return await collection.deleteOne({ _id: new ObjectId(id) })
  // return await db('projects').where('id', id).del()
}

//EDIT PROJECT
export async function editProject(
  id: string,
  changes: Project,
  thumbnail: string | undefined,
  gallery: string | undefined,
) {
  const allChanges = { changes, thumbnail, gallery }
  const collection = await getProjectsCollection()
  collection.updateOne({ _id: new ObjectId(id) }, { $set: allChanges })
}
