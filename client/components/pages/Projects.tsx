import { useGetAllProjects } from '../hooks/useGetProject'

export function Projects() {
  const { isPending, isError, error, data } = useGetAllProjects()
  if (isPending) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }
  if (data) {
    return (
      <>
        {/* <Link>
    <ProjectListItem>
    </Link> */}

        <h1 className="text-xl">PROJECTS</h1>
        <h2 className="text-s mb-2.5">PAKT</h2>
        <button className="rounded-full px-5 outline mb-2.5 mr-2.5">
          <p>React</p>
        </button>
        <button className="rounded-full px-5 outline mb-2.5 mr-2.5">
          <p>React</p>
        </button>
        <p className="mb-2.5">
          This is a personal project that’s currently in progress. The goal is
          to create a web application that assists users with packing for
          outdoor adventures. I have plans to implement weather APIs and other
          features that allow for a more targeted gear list that’s specific to
          the user.
        </p>
      </>
    )
  }
}
