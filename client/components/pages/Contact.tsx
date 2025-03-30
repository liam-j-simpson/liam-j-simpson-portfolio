export function Contact() {
  return (
    <>
      <h1 className="~text-hm/hl pb-24 pt-12 lg:~text-hl/hxl lg:py-0">
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
      <div className="flex flex-wrap">
        <button
          className="flex pr-3 underline pb-3"
          onClick={() => navigator.clipboard.writeText('+64211855651')}
        >
          <p>+64211855651 </p>
        </button>

        <button className="rounded-full outline outline-1 px-3 mb-3">
          <a href="tel:+64211855651">
            <p>Call</p>
          </a>
        </button>
      </div>

      <div className="flex flex-wrap">
        <button
          className="flex pr-3 underline pb-3"
          onClick={() =>
            navigator.clipboard.writeText('liamsimpsondesign@gmail.com')
          }
        >
          <p className="underline">liamsimpsondesign@gmail.com</p>
        </button>
        <button className="rounded-full outline outline-1 px-3 mb-3">
          <a href="mailto:liamsimpsondesign@gmail.com">
            <p>Email</p>
          </a>
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
