import { Copy } from '@phosphor-icons/react'
export function Contact() {
  return (
    <>
      <h1 className="text-xl">CONTACT</h1>
      <div className="mb-12">
        <div className="flex">
          Phone +64211855651
          <button
            className="rounded-full px-3 outline outline-1 mb-3 mr-3 mx-3"
            onClick={() => navigator.clipboard.writeText('+64211855651')}
          >
            <Copy size={20} />
          </button>
          <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
            <a href="tel:+64211855651">Call</a>
          </button>
        </div>

        <div className="flex">
          Email contact@liamsimpson.co.nz
          <button
            className="rounded-full px-3 outline outline-1 mb-3 mr-3 mx-3"
            onClick={() =>
              navigator.clipboard.writeText('contact@liamsimpson.co.nz')
            }
          >
            <Copy size={20} />
          </button>
          <button className="rounded-full px-3 outline outline-1 mb-3 mr-3">
            <a href="mailto:contact@liamsimpson.co.nz">Email</a>
          </button>
        </div>
      </div>

      <div className="mb-12">
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
          I have a strong value for nature, both spending time in it and
          thinking about how we can preserve it.
        </p>
      </div>

      <img
        className="mb-12"
        src="../../../images/liam-simpson-headshot.jpg"
        alt="Liam Simpson, designer and software developer"
      ></img>
    </>
  )
}
