// External dependencies
import { ObjectId } from 'mongodb'

// Class Implementation

export default class MongoProjectData {
  constructor(
    public name: string,
    public summary: string,
    public description: string,
    public tags: string[],
    public date: string,
    publicthumbnail: string,
    public url?: string,
    public gallery?: string[],
    public id?: ObjectId,
  ) {}
}

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
