import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <div className="grid grid cols-1 border-black border-t-2 md:grid-cols-2 gap-12 py-6">
        <div>
          <h2 className="~text-hs/hxs mb-1 lg:mb-3">
            Lets work together, get in touch.
          </h2>
          <p className="~text-ps">+64211855651</p>
          <p>liamsimpsondesign@gmail.com</p>
        </div>

        <div className="flex-col mt-1 gap-x-3">
          <div>
            <NavLink to="/">
              <p>Projects</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
