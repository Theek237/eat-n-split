import React from "react";
import "./main.css";
import Friend from "../components/Friend.jsx";
import AddFriendForm from "./AddFriendForm.jsx";
import SplitBillForm from "./SplitBillForm.jsx";

function FriendList() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  console.log(initialFriends);
  return (
    <div className="firendlist-container">
      {initialFriends.length > 0
        ? initialFriends.map((item) => (
            <Friend
              name={item.name}
              imgUrl={item.image}
              balance={item.balance}
            />
          ))
        : "No friends"}
      <AddFriendForm />
      <SplitBillForm />
    </div>
  );
}

export default FriendList;
