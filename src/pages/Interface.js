import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem } from "../components/ListItem";
import { SideBar } from "../components/SideBar";

export const Interface = () => {
  const [todosData, setTodosData] = useState();
  const [commentsData, setCommentsData] = useState();
  const [userData, setUserData] = useState();
  const [postsData, setPostData] = useState();
  const [photosData, setPhotosData] = useState();
  const [albumsData, setAlbumsData] = useState();
  const [toggle, setToggle] = useState({
    isPost: false,
    isComments: false,
    isTodos: false,
    isUsers: false,
    isPhotos: false,
    isAlbums: false,
  });

  const { isTodos, isComments, isPost, isUsers, isPhotos, isAlbums } = toggle;
  useEffect(() => {
    fetchTodos();
    fetchComments();
    fetchUsers();
    fetchPosts();
    fetchPhotos();
    fetchAlbums();
  }, []);

  const fetchTodos = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const data = res.data.splice(0, 10);
        setTodosData(data);
      })
      .catch((error) => console.log(error));
  };
  const fetchComments = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        const data = res.data.splice(0, 10);
        setCommentsData(data);
      })
      .catch((error) => console.log(error));
  };
  const fetchUsers = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => console.log(error));
  };
  const fetchPosts = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const data = res.data.splice(0, 10);
        setPostData(data);
      })
      .catch((error) => console.log(error));
  };

  const fetchPhotos = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const data = res.data.splice(0, 10);
        setPhotosData(data);
      })
      .catch((error) => console.log(error));
  };
  const fetchAlbums = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        const data = res.data.splice(0, 10);
        setAlbumsData(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="grid">
      <div className="col-1">
        <SideBar setToggle={setToggle} toggle={toggle} />
      </div>
      <div className="col-2">
        {isTodos && (
          <ListItem Response={todosData} title="Todos List" isShow={"todos"} />
        )}
        {isComments && (
          <ListItem
            Response={commentsData}
            title="Comments List"
            isShow={"comments"}
          />
        )}
        {isUsers && (
          <ListItem Response={userData} title="Users List" isShow={"users"} />
        )}
        {isPost && (
          <ListItem Response={postsData} title="Post List" isShow={"posts"} />
        )}
        {isPhotos && (
          <ListItem
            Response={photosData}
            title="Photos List"
            isShow={"photos"}
          />
        )}
        {isAlbums && (
          <ListItem
            Response={albumsData}
            title="Albums List"
            isShow={"albums"}
          />
        )}
      </div>
    </div>
  );
};
