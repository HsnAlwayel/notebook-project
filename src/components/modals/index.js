//React
import React, { useState } from "react";

//Modal
import Modal from "react-modal";

//Stores
import notebookStore from "../../stores/notebookStore";

//Icon
import { GrClose } from "react-icons/gr";

//Styles
import { AddButtonStyled } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "40%",
    color: "black",
  },
};

const NotebookModal = ({ isOpen, closeModal, oldNotebook, vendor }) => {
  const [notebook, setNotebook] = useState(
    oldNotebook ?? {
      name: "",
    }
  );

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore[oldNotebook ? "updateNotebook" : "createNotebook"](
      notebook,
      vendor
    );
    closeModal();
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div>
          <GrClose
            style={{ marginBottom: "2vh" }}
            size="2vw"
            onClick={closeModal}
          >
            close
          </GrClose>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Notebook Name</label>
                <input
                  value={notebook.name}
                  required
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <AddButtonStyled type="submit" className="btn btn-primary">
              Create
            </AddButtonStyled>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default NotebookModal;
