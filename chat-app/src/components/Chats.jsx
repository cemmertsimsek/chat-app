import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/9393518/pexels-photo-9393518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="userimg"
        />
        <div className="userChatInfo">
          <span>Alice</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
