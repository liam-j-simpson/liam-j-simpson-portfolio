import request from 'superagent'

//Get All Projects
export async function getAllProjects() {
  try {
    const res = await request.get('/api/v1/projects')
    return res.body.projects
  } catch (error) {
    console.error({
      message: error?.message,
      //here last, working on error messages with superagent.
    })
    throw {
      
      status:
    }
    
  }
}

//Get Projects By ID
export async function getProjectById() {
  try {
    
  } catch (error) {
    
  }
}

//Add Project
export async function addProject() {
  try {
    
  } catch (error) {
    
  }
}

//Delete Project
export async function deleteProject() {
  try {
    
  } catch (error) {
    
  }
}

//Edit Project
export async function editProject() {
  try {
    
  } catch (error) {
    
  }
}
