import React from "react";
import { RouterView } from "./routes";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="/">Task One</Link>
        <Link to="task-two">Task Two</Link>
        <Link to="chat">Chat</Link>
      </div>
      <RouterView />
    </div>
  );
}
