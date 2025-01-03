export interface ProjectData extends Project {
  id: number
}

export interface Project {
  name: string
  date: string
  shortDescription: string
  longDescription: string
  stack: string[]
}
