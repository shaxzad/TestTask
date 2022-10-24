import React, { useEffect, useState } from "react";
import { Users } from "../components/Users";
import { AddUser } from "../components/AddUser";
import axios from "axios";

export const  Todos =() => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState({
    isAdding: false,
    isDeleting: false,
    isFetching: false,
  });
  const { isFetching, isAdding, isDeleting } = loading;

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading({
      ...loading,
      isFetching: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setLoading({
          ...loading,
          isFetching: false,
        });
        const data = res.data.splice(0, 10);
        setTodoList(data);
      })
      .catch((error) => console.log(error));
  };

  const onAdd = async (name) => {
    setLoading({
      ...loading,
      isAdding: true,
    });
    await axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: name,
      })
      .then((res) => {
        setLoading({
          ...loading,
          isAdding: false,
        });
        setTodoList((todoList) => [...todoList, res.data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, title) => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        title: title,
      })
      .then((res) => {
        const result = todoList.map((obj) =>
          obj.id === res.data.id ? res.data : obj
        );
        setTodoList(result);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    setLoading({
      ...loading,
      isDeleting: true,
    });
    await axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setLoading({
          ...loading,
          isDeleting: false,
        });
        const removeitem = todoList.filter((item) => item.id !== id);
        setTodoList(removeitem);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="todos">
      <AddUser isAdding={isAdding} onAdd={onAdd} />
      <div>
        <h1>Todo List</h1>
      </div>
      {isFetching ? (
        "Loading ..."
      ) : (
        <div>
          {todoList.map((item) => (
            <Users
              isDeleting={isDeleting}
              id={item.id}
              key={item.id}
              title={item.title}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
