import React from "react";

export const Toggle = ({ onChange, value }) => {
  return (
    <label className="switch">
      <input onChange={onChange} checked={value} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};
export const SideBar = ({ setToggle, toggle }) => {
  const { isTodos, isComments, isPost, isUsers, isPhotos, isAlbums } = toggle;

  return (
    <>
      <div className="todo-list-main">
        <h2>Todos</h2>
        <Toggle
          value={isTodos}
          onChange={(e) =>
            setToggle({
              isComments: false,
              isPost: false,
              isUsers: false,
              isPhotos: false,
              isAlbums: false,
              isTodos: !isTodos,
            })
          }
        />
      </div>
      <div className="comments-list-main">
        <h2>Comments</h2>

        <Toggle
          value={isComments}
          onChange={(e) =>
            setToggle({
              isComments: !isComments,
              isPost: false,
              isUsers: false,
              isPhotos: false,
              isAlbums: false,
              isTodos: false,
            })
          }
        />
      </div>
      <div className="users-list-main">
        <h2>Users</h2>
        <Toggle
          value={isUsers}
          onChange={(e) =>
            setToggle({
              isComments: false,
              isPost: false,
              isUsers: !isUsers,
              isPhotos: false,
              isAlbums: false,
              isTodos: false,
            })
          }
        />
      </div>
      <div className="post-list-main">
        <h2>Post</h2>
        <Toggle
          value={isPost}
          onChange={(e) =>
            setToggle({
              isComments: false,
              isPost: !isPost,
              isUsers: false,
              isPhotos: false,
              isAlbums: false,
              isTodos: false,
            })
          }
        />
      </div>
      <div className="photos-list-main">
        <h2>Photos</h2>
        <Toggle
          value={isPhotos}
          onChange={(e) =>
            setToggle({
              isComments: false,
              isPost: false,
              isUsers: false,
              isPhotos: !isPhotos,
              isAlbums: false,
              isTodos: false,
            })
          }
        />
      </div>
      <div className="albums-list-main">
        <h2>Albums</h2>
        <Toggle
          value={isAlbums}
          onChange={(e) =>
            setToggle({
              isComments: false,
              isPost: false,
              isUsers: false,
              isPhotos: false,
              isAlbums: !isAlbums,
              isTodos: false,
            })
          }
        />
      </div>
    </>
  );
};
