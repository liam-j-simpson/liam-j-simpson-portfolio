import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'

export function useDeleteProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => {
      return api.deleteProject(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
