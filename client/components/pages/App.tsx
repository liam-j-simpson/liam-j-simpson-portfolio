import { NavLink, Outlet } from 'react-router-dom'

function App() {
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
        </div>
      </nav>

      <main className="mx-10 my-3 border-black border-b-2">
        <Outlet />
      </main>

      <footer className="mx-10 my-3">
        <h2 className="text-s">Liam Simpson</h2>
      </footer>
    </>
  )
}

export default App
