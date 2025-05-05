import React from "react";
import { useState } from "react";
import Friend from "../components/Friend.jsx";
import AddFriendForm from "./AddFriendForm.jsx";
import SplitBillForm from "./SplitBillForm.jsx";
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
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddButtonClick() {
    setShowAddFriend((prev) => !prev);
    setSelectedFriend(null);
  }

  function handleAddFriend(newFriend) {
    setFriends((currentFriends) => [...currentFriends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((currentSelected) =>
      currentSelected.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  return (
    <div className="flex ">
      <div className="flex flex-col gap-2.5 max-w-xl">
        {initialFriends.length > 0
          ? friends.map((friend) => (
              <Friend
                friend={friend}
                key={friend.id}
                isSelected={selectedFriend?.id === friend.id}
                onSelection={() => handleSelection(friend)}
              />
            ))
          : "No friends"}
        {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}

        <Button onClick={handleAddButtonClick}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm friend={selectedFriend} key={selectedFriend.id} />
      )}
    </div>
  );
}

export default FriendList;
