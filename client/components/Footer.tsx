import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <div className="grid grid cols-1 md:grid-cols-2 gap-12 pb-6 ">
        <div>
          <h2 className="~text-hs/hxs mb-1 lg:mb-3">
            Lets work together,
            <br />
            get in touch:
          </h2>
          <p className="~text-ps">+64211855651</p>
          <p>liamsimpsondesign@gmail.com</p>
        </div>

        <div className="flex-col mt-1 gap-x-3">
          <div>
            <NavLink to="/">Projects </NavLink>
          </div>
          <div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
