import { NavLink, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Logout } from '../authentication/Logout'
import { Profile } from '../authentication/Profile'
import { Footer } from '../Footer'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      <nav className="mx-5 mt-3 pb-1 border-black border-b-2 lg:mx-10 flex items-end justify-between">
        <div>
          <NavLink to="/">
            <h1 className="~text-hs/hxs pr-3 leading-none break-keep">
              Liam Simpson
            </h1>
          </NavLink>
        </div>
        <div className="flex mt-1 gap-x-3">
          <NavLink to="/">Projects </NavLink>
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

      <main className=" mx-5 lg:mx-10 my-3">
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
