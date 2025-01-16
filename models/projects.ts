export interface Project {
  name: string
  date: string
  description: string
  tags: string[]
}
export interface ProjectData extends Project {
  id: number
}

export interface ProjectArray {
  data: ProjectData[]
}
