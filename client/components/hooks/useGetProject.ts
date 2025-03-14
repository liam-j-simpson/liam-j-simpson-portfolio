import { useQuery } from '@tanstack/react-query'
import * as api from '../../api.ts'

export function useGetAllProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await api.getAllProjects()
      response.sort(function (a, b) {
        return b.sort - a.sort
      })
      return response
    },
  })
}

export function useGetProject(id: string | undefined) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      const response = await api.getProject(id)
      return response
    },
  })
}
