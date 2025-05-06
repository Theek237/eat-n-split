import React from "react";
import { useState } from "react";
import Friend from "../components/Friend.jsx";
import AddFriendForm from "./AddFriendForm.jsx";
import Button from "./Button.jsx";

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

function FriendList() {
  const [showAddFriendForm, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleFriendListButton() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddNewFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriend(false);
  }

  return (
    <div className="flex flex-col gap-2.5 max-w-xl">
      {friends.length > 0
        ? friends.map((friend) => <Friend friend={friend} key={friend.id} />)
        : "No friends"}
      {showAddFriendForm && <AddFriendForm onAddFriend={handleAddNewFriend} />}

      <Button onClick={handleFriendListButton}>
        {!showAddFriendForm ? "Add Friend" : "Close"}
      </Button>
    </div>
  );
}

export default FriendList;
