import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import notebookStore from "../../stores/notebookStore";



const NotebookDetail = () => {
    const { notebookId } = useParams();
    const notebook = notebookStore.notebooks.find((notebook) => notebook.id === +notebookId)
    console.log(notebook.notes.title);
    console.log(notebook.notes.body);
    console.log(notebook.notes);


    if (!notebook) return <Redirect to="/" />

    return (
        <div>
            <Link to="/">
                <p>Back to notebooks</p>
            </Link>
            <h1>{notebook.name}</h1>
            <h3>{notebook.notes[0].title}</h3>
            <p>{notebook.notes[0].body}</p>

        </div>
    );
};

export default observer(NotebookDetail);
