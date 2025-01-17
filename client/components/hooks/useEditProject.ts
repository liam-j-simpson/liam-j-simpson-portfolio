import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'
import { EditProject } from 'models/projects.ts'

export function useEditProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, changes }: { id: number; changes: EditProject }) => {
      return api.editProject(id, changes)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
