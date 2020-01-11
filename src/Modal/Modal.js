import React from "react";
import "./Modal.css";

let Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-body">
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <span onClick={closeModal} className="modalClose">
            &#x02717;
          </span>

          <h1>Todo List</h1>
        </span>
        <p>&copy; Made by Nikita Dvortsov</p>
      </div>
    </div>
  );
};

export default Modal;
