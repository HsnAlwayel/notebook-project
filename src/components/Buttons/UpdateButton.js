import React, { useState } from "react";

//Components
import NoteModal from "../../modals/NoteModal"
import NotebookModal from "../../modals/NotebookModal"

// Styling
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ note, notebook }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>;
            {notebook ? (
                <NotebookModal isOpen={isOpen} closeModal={closeModal} oldNotebook={notebook} />
            ) : (
                    <NoteModal isOpen={isOpen} closeModal={closeModal} oldNote={note} />
                )
            }
        </>
    )
};

export default UpdateButton;