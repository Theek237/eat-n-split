import React from "react";
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
    <div className="flex flex-col gap-2.5 max-w-xl">
      {initialFriends.length > 0
        ? initialFriends.map((item) => (
            <Friend
              key={item.id} // Added key prop
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
