import React, { useState } from "react";

// Styling
import { UpdateButtonStyled } from "./styles";

//Icon
import { FiEdit2 } from "react-icons/fi";

// Components
import NoteModal from "../modals/NoteModal";
import NotebookModal from "../modals";

const UpdateButton = ({ oldNote, notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>
        Edit <FiEdit2 />
      </UpdateButtonStyled>
      {notebook ? (
        <NotebookModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldNotebook={notebook}
        />
      ) : (
        <NoteModal oldNote={oldNote} closeModal={closeModal} isOpen={isOpen} />
      )}
    </>
  );
};

export default UpdateButton;
