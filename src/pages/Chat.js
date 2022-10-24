import { useEffect, useState } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import { ChatList } from "../components/ChatList/ChatList";
import "./Style.css";
import { ChatBox } from "../components/ChatBox/ChatBox";
import Tour from "reactour";
import { Modal } from "../components/Modal/Modal";

export const Chat = () => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [chats, setChats] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    const pusher = new Pusher("3539a6557f6f381c89a6", {
      cluster: "mt1",
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (data) => {
      setChats([...chats, data]);
      setText("");
    });
  }, [chats]);

  const handleTextChange = (e) => {
    if (e.keyCode === 13) {
      if (username && text) {
        const payload = {
          username: username,
          message: text,
        };
        axios.post("http://localhost:5000/message", payload);
      } else {
        setError(true);
      }
    } else {
      setText(e?.target?.value);
    }
  };

  const tourConfig = [
    {
      selector: ".step_1",
      content: "Please Add User",
    },
    {
      selector: ".step_2",
      content: "Thank you",
    },
  ];

  return (
    <div className="Chat-App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Chat App</h1>
      </header>
      <div className="user-addication">
        <h2 className="App-title"> User: {username}</h2>
        <button
          disabled={username ? true : false}
          onClick={() => {
            setTourOpen(true);
            setIsOpen(!isOpen);
          }}
          type="button"
          className="btn btn-secondary addbtn"
        >
          Add User
        </button>
      </div>
      <div className="chatBox">
        <ChatList chats={chats} />
        <ChatBox
          text={text}
          error={error}
          username={username}
          handleTextChange={handleTextChange}
        />
      </div>
      <Tour
        disableFocusLock={true}
        onRequestClose={() => setTourOpen(false)}
        steps={tourConfig}
        isOpen={tourOpen}
        rounded={5}
        accentColor={"#6736DD"}
      />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setUsername={setUsername}
          username={username}
        />
      )}
    </div>
  );
};
