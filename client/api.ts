import { EditProject, Project } from 'models/projects'
import request from 'superagent'

//Get All Projects
export async function getAllProjects() {
  try {
    const res = await request.get('/api/v1/projects')
    return res.body.projects
  } catch (error) {
    console.error(error)
  }
}

//Get Projects By ID
export async function getProject(id: number) {
  try {
    const res = await request.get(`/api/v1/projects/${id}`)
    return res.body.project
  } catch (error) {
    console.error(error)
  }
}

//Add Project
export async function addProject(project: Project, accessToken: string) {
  try {
    const res = await request
      .post('/api/v1/projects/')
      .set('Authorization', `Bearer ${accessToken}`)
      .send(project)
    return res.body
  } catch (error) {
    console.error(error)
    throw error
  }
}

//Delete Project
export async function deleteProject(id: number, token: string) {
  try {
    await request
      .delete(`/api/v1/projects/${id}`)
      .set('Authorization', `Bearer ${token}`)
  } catch (error) {
    console.error(error)
  }
}

//Edit Project
export async function editProject(
  id: number,
  formData: EditProject,
  accessToken: string,
) {
  try {
    await request
      .patch(`/api/v1/projects/${id}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send(formData)
  } catch (error) {
    console.error(error)
    throw error
  }
}
