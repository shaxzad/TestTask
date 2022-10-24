import React, { useState } from "react";
import "../index.css"

export const Users = ({ title, id, onEdit, onDelete ,isDeleting}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteId, setDeleteid] =  useState(null)
  const [value, setValue] =  useState(null)

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
    setDeleteid(id)
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, value);
    setIsEdit(!isEdit);
  };

  return (
    <div className="user-main">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input onChange={({target}) => setValue(target.value)} placeholder="title" name="title" defaultValue={title} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{title}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button className="Delete" onClick={handleDelete}>{(isDeleting &&  (deleteId === id) ) ? "Loading ..." : "Delete"}</button>
          </div>
        </div>
      )}
    </div>
  );
};
