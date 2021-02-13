import React, { useEffect, useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "./features/chatSlice";
import db from "./firebase";
function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };
  useEffect(() => {
    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [chatId]);

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
