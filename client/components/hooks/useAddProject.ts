import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'
import { Project } from 'models/projects.ts'

export function useAddProject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (project: Project) => {
      return api.addProject(project)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
