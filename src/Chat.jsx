import React, { useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatName } from "./features/chatSlice";
function Chat() {
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="chat">
      {/* chat header */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat messages */}
      <div className="chat__messages">
        <Message />
      </div>

      {/* chat input */}
      <div className="chat__input">
        <form>
          <input
            type="text"
            placeholder="iMessage"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon></MicNoneIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
