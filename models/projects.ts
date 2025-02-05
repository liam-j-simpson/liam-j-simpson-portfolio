export interface Project {
  name: string
  summary: string
  description: string
  tags: string[]
  url?: string
  date: string
}
export interface ProjectData extends Project {
  thumbnail: string
  gallery?: string[]
  id: number
}
export interface ProjectArray {
  data: ProjectData[]
}
