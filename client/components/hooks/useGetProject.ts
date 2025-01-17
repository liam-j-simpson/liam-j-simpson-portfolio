import { useQuery } from '@tanstack/react-query'
import * as api from '../../api.ts'

export function useGetAllProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await api.getAllProjects()
      return response
    },
  })
}

export function useGetProject(id: number) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      const response = await api.getProject(id)
      return response
    },
  })
}
