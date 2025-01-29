import { useAuth0 } from '@auth0/auth0-react'

export function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/admin',
      },
    })
  }

  if (!isAuthenticated) {
    return <button onClick={handleLogin}>Log In</button>
  }
}
