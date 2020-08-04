import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//Stores
import notebookStore from "../../stores/notebookStore";

//Components
import NotebookItem from "../NotebookItem";

//Buttons
import AddButton from "../../Buttons/AddButton";

const NotebookList = () => {
  const [query, setQuery] = useState("");
  const notebookList = notebookStore.notebooks
    .filter((notebook) =>
      notebook.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} key={notebook.id} />);
  return (
    <div>
      <AddButton />
      <h1>List</h1>
      {notebookList}
    </div>
  );
};

export default observer(NotebookList);
