export interface ProjectData extends Project {
  id: number
}

export interface Project {
  name: string
  date: string
  short_description: string
  long_description: string
  stack: string[]
}
