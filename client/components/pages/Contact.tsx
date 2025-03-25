import { Copy } from '@phosphor-icons/react'
export function Contact() {
  return (
    <>
      <h1 className="~text-hm/hl lg:~text-hl/text-hxl">CONTACT</h1>

      <h2 className="~text-hs/hxs mb-1 lg:mb-3">Trajectory</h2>
      <p className="mb-6">
        {`I've recently entered the tech scene after a six year career in the creative industry. Creative thinking is a core part of my skillset and I intend on using this to turn unique ideas into innovative tech products.   
          `}
      </p>

      <h2 className="~text-hs/hxs mb-1 lg:mb-3">Values</h2>
      <p className="mb-6">
        {`I believe we have a responsibility to be thoughtfull about what we
          create, both digital and physical. The impact a product will
          have on it's users or the environment should always be considered.`}
      </p>

      <h2 className="~text-hs/hxs mb-1 lg:mb-3">Get In Touch</h2>
      <p className="mb-6">
        {`I'm looking for opportunities within tech companies where I can provide innovative thinking and technical skills. If you'd like to get in touch, please call or email me.`}
      </p>
      <div className="flex flex-wrap bg-mint-500">
        <p>Phone +64211855651</p>
        <button
          className="rounded-full px-3 outline outline-1 mb-3 mr-3 mx-3"
          onClick={() => navigator.clipboard.writeText('+64211855651')}
        >
          <Copy size={15} />
        </button>
        <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
          <a href="tel:+64211855651">Call</a>
        </button>
      </div>

      <div className="flex flex-wrap">
        <p>Email liamsimpsondesign@gmail.com</p>
        <button
          className="rounded-sm px-3 outline outline-1 mb-3 mr-3 mx-3"
          onClick={() =>
            navigator.clipboard.writeText('liamsimpsondesign@gmail.com')
          }
        >
          <Copy size={15} />
        </button>
        <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
          <a href="mailto:liamsimpsondesign@gmail.com">Email</a>
        </button>
      </div>

      <img
        className="my-10"
        src="../../../images/liam-simpson-headshot.jpg"
        alt="Liam Simpson, designer and software developer"
      ></img>
    </>
  )
}
