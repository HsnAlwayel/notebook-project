import React, { useState } from "react";
import Modal from "react-modal";

//Icon
import { GrClose } from "react-icons/gr";

// Stores
import notesStore from "../../stores/noteStore";

//Styles
import { CreateButtonStyled } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const NoteModal = ({ isOpen, closeModal, oldNote, notebook }) => {
  const [note, setNote] = useState(
    oldNote
      ? oldNote
      : {
          title: "",
          body: "",
        }
  );

  const handleChange = (event) =>
    setNote({ ...note, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    notesStore[oldNote ? "updateNote" : "createNote"](note, notebook);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <GrClose style={{ marginBottom: "2vh" }} size="2vw" onClick={closeModal}>
        close
      </GrClose>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Title</label>
            <input
              required
              type="text"
              name="title"
              className="form-control"
              onChange={handleChange}
              value={note.title}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Body</label>
          <input
            required
            type="text"
            name="body"
            className="form-control"
            onChange={handleChange}
            value={note.body}
          />
        </div>
        <CreateButtonStyled type="submit" className="btn btn-primary">
          {oldNote ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NoteModal;
