export interface ProjectDb {
  name: string
  thumbnail: string
  date: string
  summary: string
  description: string
  url?: string
  tags: string[]
}

export interface Project {
  name: string
  thumbnail: Blob
  date: string
  summary: string
  description: string
  url?: string
  tags: string[]
}

export interface EditProject {
  name?: string
  thumbnail?: Blob
  date?: string
  summary?: string
  description?: string
  url?: string
  tags?: string[]
}
export interface ProjectData extends Project {
  id: number
}

export interface ProjectArray {
  data: ProjectData[]
}
