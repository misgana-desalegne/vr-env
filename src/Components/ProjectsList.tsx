import { Fragment } from "react";

function ProjectsList() {
  let itmes = ["Mancity", "United", "Lendon is born", "Another Item"];
  return (
    <>
      <h1>List</h1>
      {itmes.length === 0 && <p>No Item found!</p>}
      <ul className="list-group">
        {itmes.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectsList;
