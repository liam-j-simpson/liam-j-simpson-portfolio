import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../../api.ts'
import { EditProject } from 'models/projects.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useEditProject() {
  const queryClient = useQueryClient()
  const { user, getAccessTokenSilently } = useAuth0()
  return useMutation({
    mutationFn: async ({
      id,
      formData,
    }: {
      id: number
      formData: EditProject
    }) => {
      const accessToken = await getAccessTokenSilently()
      if (!user?.sub) throw new Error('User not authenticated')
      return await api.editProject(id, formData, accessToken)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      })
    },
  })
}
