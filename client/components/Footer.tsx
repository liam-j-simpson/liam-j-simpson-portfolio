import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <h2 className="~text-hs/hxs pt-6 pb-3 border-black border-t">
        {`LET'S WORK TOGETHER`}
      </h2>
      <div className="grid grid cols-1 md:grid-cols-2 gap-6 pb-6">
        <div>
          <div className="flex flex-wrap pb-1.5">
            <button
              className="flex pr-3 underline"
              onClick={() => navigator.clipboard.writeText('+64211855651')}
            >
              <p>+64211855651 </p>
            </button>

            <button className="rounded-full outline outline-1 px-3">
              <a href="tel:+64211855651">
                <p>Call</p>
              </a>
            </button>
          </div>

          <div className="flex flex-wrap">
            <button
              className="flex pr-3 underline"
              onClick={() =>
                navigator.clipboard.writeText('liamsimpsondesign@gmail.com')
              }
            >
              <p className="underline">liamsimpsondesign@gmail.com</p>
            </button>
            <button className="rounded-full outline outline-1 px-3">
              <a href="mailto:liamsimpsondesign@gmail.com">
                <p>Email</p>
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <NavLink to="/" className="pb-1.5">
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
