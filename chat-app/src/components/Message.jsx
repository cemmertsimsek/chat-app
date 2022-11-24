import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/9393518/pexels-photo-9393518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/9393518/pexels-photo-9393518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Message;
