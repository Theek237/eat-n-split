import React from "react";
import "./main.css";

function Friend({ name, imgUrl, balance }) {
  return (
    <>
      <div className="friend-container">
        <div className="left-side">
          <img src={imgUrl} alt="Image" />
        </div>
        <div className="right-side">
          <div className="name">{name}</div>
          <div className="balance">
            {balance > 0
              ? `${name} owes you ${balance}`
              : balance < 0
              ? `You owes ${name} ${Math.abs(balance)}`
              : `You and ${name} are even`}
          </div>
        </div>
        <div>
          <button>Select</button>
        </div>
      </div>
    </>
  );
}

export default Friend;
