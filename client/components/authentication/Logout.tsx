import { useAuth0 } from '@auth0/auth0-react'

export function Logout() {
  const { logout, isAuthenticated } = useAuth0()
  if (isAuthenticated) {
    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    )
  }
}
