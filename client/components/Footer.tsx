import { NavLink } from 'react-router-dom'
import { CopyToClipboard } from './CopyToClipboard'

export function Footer() {
  return (
    <>
      <h2 className="~text-hs/hxs pt-6 pb-3 border-black border-t">
        {`LET'S WORK TOGETHER`}
      </h2>
      <div className="grid grid cols-1 md:grid-cols-2 gap-6 pb-6">
        <div>
          <CopyToClipboard
            url="tel:+64211855651"
            text="+64211855651"
            cta="Call"
          />
          <CopyToClipboard
            url="mailto:liamsimpsondesign@gmail.com"
            text="liamsimpsondesign@gmail.com"
            cta="Email"
          />
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
