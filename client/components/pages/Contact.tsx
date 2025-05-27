import { CopyToClipboard } from '../CopyToClipboard'

export function Contact() {
  return (
    <section>
      <>
        <h1 className="~text-hm/hl pt-12 pb-8 lg:~text-hl/hxl lg:py-0">
          CONTACT
        </h1>

        <h2 className="~text-hs/hxs mb-1">TRAJECTORY</h2>
        <p className="mb-6">
          {`I've recently entered the tech scene after a six year career in the creative industry. Creative thinking is a core part of my skillset and I intend on using this to turn unique ideas into innovative tech products.   
          `}
        </p>

        <h2 className="~text-hs/hxs mb-1">VALUES</h2>
        <p className="mb-6">
          {`I believe we have a responsibility to be thoughtfull about what we
          create, both digital and physical. The impact a product will
          have on it's users or the environment should always be considered.`}
        </p>

        <h2 className="~text-hs/hxs mb-1">GET IN TOUCH</h2>
        <p className="mb-6">
          {`I'm looking for opportunities within tech companies where I can provide innovative thinking and technical skills. If you'd like to get in touch, please call or email me.`}
        </p>

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
        <img
          className="my-10"
          src="../../../images/liam-simpson-headshot.jpg"
          alt="Liam Simpson, designer and software developer"
        ></img>
      </>
    </section>
  )
}
