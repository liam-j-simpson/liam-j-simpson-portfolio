import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <div className="grid grid cols-1 border-black border-t-2 md:grid-cols-2 gap-12 py-6">
        <div>
          <p>+64211855651</p>
          <p>liamsimpsondesign@gmail.com</p>
        </div>
        <div className="mt-1 gap-x-3">
          <NavLink to="/">
            <p>Projects</p>
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}
