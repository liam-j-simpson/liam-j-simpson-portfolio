import { useState } from 'react'

export function CopyToClipboard({
  url,
  text,
  cta,
}: {
  url: string
  text: string
  cta: string
}) {
  const [showMessage, setShowMessage] = useState(false)

  function handleCopy() {
    setShowMessage(true)
    navigator.clipboard.writeText(text)
    setTimeout(() => {
      setShowMessage(false)
    }, 800)
  }

  return (
    <div className="flex flex-wrap">
      {!showMessage ? (
        <>
          <button
            className="flex pr-3 underline mb-1.5"
            onClick={() => handleCopy()}
          >
            <p className="underline">{text}</p>
          </button>
        </>
      ) : (
        <p className="flex pr-3 underline mb-1.5">Copied</p>
      )}
      {
        <button className="rounded-full outline outline-1 px-3 mb-1.5">
          <a href={url}>
            <p>{cta}</p>
          </a>
        </button>
      }
    </div>
  )
}
