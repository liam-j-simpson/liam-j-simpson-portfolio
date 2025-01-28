import { useAuth0 } from '@auth0/auth0-react'

export function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log In</button>
  }
}
