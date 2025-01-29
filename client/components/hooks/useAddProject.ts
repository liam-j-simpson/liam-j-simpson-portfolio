import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'
import { Project } from 'models/projects.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useAddProject() {
  const queryClient = useQueryClient()
  const { user, getAccessTokenSilently } = useAuth0()

  return useMutation({
    mutationFn: async (project: Project) => {
      if (!user?.sub) {
        throw new Error('User not authenticated')
      }
      const accessToken = await getAccessTokenSilently()

      return await api.addProject(project, accessToken)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
