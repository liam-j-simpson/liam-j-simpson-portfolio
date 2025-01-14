export function ViewProject() {
  return (
    <>
      <h2 className="text-s">Projects</h2>

      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-1/5">
              <h3 className="text-s">Name</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Short Description</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Long Description</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Stack</h3>
            </th>
            <th className="w-1/5">
              <h3 className="text-s">Date</h3>
            </th>
          </tr>
        </thead>
        <tbody className="!text-left">
          {/* MAP OVER PROJECT DATA */}
          <tr>
            <td className="break-words">PAKT</td>
            <td className="break-words">SHORT DESCRIPTION</td>
            <td className="break-words">LONG DESCRIPTION</td>
            <td className="break-words">STACK</td>
            <td className="break-words">21/12/2024</td>
            {/* DELETE BUTTON COMPONENT*/}
            {/* EDIT BUTTON COMPONENT*/}
          </tr>
        </tbody>
      </table>
    </>
  )
}
