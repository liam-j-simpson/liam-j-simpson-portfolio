import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'

export function useEditProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => {
      return api.editProject(id, changes)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
