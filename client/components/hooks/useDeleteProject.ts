import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useDeleteProject() {
  const queryClient = useQueryClient()
  const { user, getAccessTokenSilently } = useAuth0()
  return useMutation({
    mutationFn: async (id: number) => {
      const accessToken = await getAccessTokenSilently()
      if (!user?.sub) throw new Error('User not authenticated')
      return await api.deleteProject(id, accessToken)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
