export function CopyToClipboard({
  url,
  text,
  cta,
}: {
  url: string
  text: string
  cta: string
}) {
  return (
    <div className="flex flex-wrap">
      <button
        className="flex pr-3 underline mb-1.5"
        onClick={() => navigator.clipboard.writeText(text)}
      >
        <p className="underline">{text}</p>
      </button>
      <button className="rounded-full outline outline-1 px-3 mb-1.5">
        <a href={url}>
          <p>{cta}</p>
        </a>
      </button>
    </div>
  )
}
