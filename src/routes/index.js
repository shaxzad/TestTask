import { Routes, Route } from "react-router-dom";
import { Todos } from "../pages/Todos";
import { Interface } from "../pages/Interface";
import { Chat } from "../pages/Chat";
import { TableList } from "../pages/Table";
import {ChartView} from "../pages/chartView"

export const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/task-two" element={<Interface />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/table-list" element={<TableList />} />
      <Route path="/ChartView" element={<ChartView />} />
    </Routes>
  );
};
