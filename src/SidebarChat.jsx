import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import db from "./firebase";
import "./SidebarChat.css";
function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);
  useEffect(() => {
    console.log("id", id);

    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      className="sidebarChat"
      onClick={() =>
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        )
      }
    >
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        {console.log("Chat info", chatInfo)}

        <p>last message sent </p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
