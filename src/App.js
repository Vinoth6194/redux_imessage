import React from "react";
import "./App.css";
import Imessage from "./Imessage";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return <div className="app">{user ? <Imessage /> : "You need to Login"}</div>;
}

export default App;
