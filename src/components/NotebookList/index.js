import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import notebookStore from "../../stores/notebookStore"
import NotebookItem from "../NotebookItem";

const NotebookList = () => {
    const [query, setQuery] = useState("")
    const notebookList = (notebookStore.notebooks
        .filter((notebook) => notebook.name.toLowerCase().includes(query.toLowerCase())))
        .map((notebook) => (
            <NotebookItem
                notebook={notebook}
                key={notebook.id}
            />
        ));
    return (
        <div>
            <h1>List</h1>
            {notebookList}
        </div>
    )
}


export default NotebookList;