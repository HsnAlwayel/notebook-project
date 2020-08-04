import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import notebookStore from "../../stores/notebookStore"



const NotebookItem = ({ notebook }) => {

    return (
        <div>
            <Link to={`/${notebook.id}`}>
                <p>{notebook.name}</p>
            </Link>
        </div>
    );
};

export default observer(NotebookItem);
