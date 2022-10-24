import { Routes, Route } from "react-router-dom";
import { Todos } from "../pages/Todos";
import { Interface } from "../pages/Interface";
import { Chat } from "../pages/Chat";

export const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/task-two" element={<Interface />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};
