import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
function Message({
  id,
  contents: { displayName, photo, email, message, timestamp },
}) {
  return (
    <div className="message">
      <Avatar src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
}

export default Message;
