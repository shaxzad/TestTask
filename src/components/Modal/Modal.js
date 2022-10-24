import { useState } from "react";
import "./Modal.css";

export const Modal = ({ isOpen, setIsOpen, setUsername, username }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const AddUser = () => {
    if (value && !username) {
      setUsername(value);
      setError(false);
      setIsOpen(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="modal__backdrop">
          <div className="modal__container">
            <input
              type="text"
              value={value}
              placeholder="chat here..."
              className="form-control"
              onChange={({ target }) => setValue(target.value)}
            />
            {error && !username && (
              <p className="text-danger"> You are already added user</p>
            )}
            <button
              onClick={AddUser}
              type="button"
              className="btn btn-secondary"
            >
              Add User
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
