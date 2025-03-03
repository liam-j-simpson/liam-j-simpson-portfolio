import { Copy } from '@phosphor-icons/react'
export function Contact() {
  return (
    <>
      <h1 className="text-xl">CONTACT</h1>

      <p className="mb-6">{`Get in touch `}</p>
      <div className="flex">

      <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
        Call +64 211855651
      </button>
      <Copy size={20} />
      </div>

      <div className="flex">
      <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
        Email contact@liamsimpson.co.nz
      </button>
      <Copy size={20} />
    </div>
      <h2 className="text-s">Trajectory</h2>
      <p className="mb-6">
        Im looking for opportunities were I can combine my creative and coding
        skills to develop innovative products.
      </p>
      <h2 className="text-s">Journey</h2>
      <p className="mb-6">
        Starting my training in AKL with a bachelor of industrial design.
      </p>
      <h2 className="text-s">Values</h2>
      <p className="mb-6">
        I have a strong value for nature, both spending time in it and thinking
        about how we can preserve it.
      </p>

      <img
        src="../../../images/liam-simpson-headshot.jpg"
        alt="Liam Simpson, designer and software developer"
      ></img>
    </>
  )
}
