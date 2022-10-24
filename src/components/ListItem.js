import React from "react";

export const ListItem = ({ Response, title, isShow }) => {
  return (
    <div>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="todos-list">
        {Response?.map((item) => (
          <div>
            {isShow === "todos" && (
              <div>
                <p>Title: {item.title}</p>
              </div>
            )}
            {isShow === "comments" && (
              <div>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Body: {item.body}</p>
              </div>
            )}
            {isShow === "users" && (
              <div>
                <p>Name: {item.name}</p>
                <p>UserName: {item.username}</p>
                <p>Email:{item.email}</p>
              </div>
            )}
            {isShow === "posts" && (
              <div>
                <p>Title: {item.title}</p>
                <p>Body: {item.body}</p>
              </div>
            )}
            {isShow === "photos" && (
              <div>
                <p> Title: {item.title}</p>
                <img  alt="img" src={item.url} />
              </div>
            )}
            {isShow === "albums" && (
              <div>
                <p>Title: {item.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
