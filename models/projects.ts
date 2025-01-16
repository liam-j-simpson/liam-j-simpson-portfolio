export interface Project {
  name: string
  date: string
  description: string
  stack: string[]
}
export interface ProjectData extends Project {
  id: number
}

export interface ProjectArray {
  data: ProjectData[]
}
