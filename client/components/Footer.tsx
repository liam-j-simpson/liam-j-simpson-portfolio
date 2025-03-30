import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <h2 className="~text-hs/hxs pt-6 border-black border-t leading-none">
        {`LET'S WORK TOGETHER`}
      </h2>
      <div className="grid grid cols-1 md:grid-cols-2 gap-6 pb-6">
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
