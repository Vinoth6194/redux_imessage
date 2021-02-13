import React from "react";
import "./App.css";
import Imessage from "./Imessage";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
