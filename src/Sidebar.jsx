import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";
function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar__avatar"
        ></Avatar>
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="search" />
        </div>
        <IconButton className="sidebar__inputButton" variant="outined">
          <RateReviewIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
