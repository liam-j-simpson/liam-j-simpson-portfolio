export interface Project {
  name: string
  sort: string
  summary: string
  description: string
  tags: string[]
  url?: string
  repo?: string
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

export interface MulterFiles {
  [key: string]: Express.Multer.File[]
}
