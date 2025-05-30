import { NavLink, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Logout } from '../authentication/Logout'
import { Profile } from '../authentication/Profile'
import { Footer } from '../Footer'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      <nav className="mx-6 mt-3 pb-1 border-black border-b lg:mx-12 flex items-end justify-between">
        <div>
          <NavLink to="/">
            <h1 className="~text-hs/hxs leading-none break-keep">
              LIAM SIMPSON
            </h1>
          </NavLink>
        </div>
        <div className="flex gap-x-3">
          <NavLink to="/">
            <p>Projects</p>
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/admin">
                <p>Admin</p>
              </NavLink>
              <Profile />
              <Logout />
            </>
          )}
        </div>
      </nav>
      <main className="mx-6 lg:mx-12">
        <section>
          <Outlet />
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
