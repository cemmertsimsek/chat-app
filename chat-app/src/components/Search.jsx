import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/9393518/pexels-photo-9393518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="userimg"
        />
        <div className="userChatInfo">
          <span>Alice</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
