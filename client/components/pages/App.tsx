import { NavLink, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Logout } from '../authentication/Logout'
import { Profile } from '../authentication/Profile'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      <nav className="mx-10 mt-3 flex justify-between border-black border-b-2">
        <div>
          <NavLink to="/">
            <h1 className="text-s">Liam Simpson</h1>
          </NavLink>
        </div>
        <div className="flex gap-x-6">
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/admin">Admin</NavLink>
              <Profile />
              <Logout />
            </>
          )}
        </div>
      </nav>

      <main className="mx-10 my-3">
        <Outlet />
      </main>
    </>
  )
}

export default App
