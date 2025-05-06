import React, { captureOwnerStack, useState } from "react";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";

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

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleSelectButtonClicked(friend) {
    setSelectedFriend(friend);
    if (friend.id === selectedFriend?.id) {
      setSelectedFriend(null);
    }
  }

  function handleUpdateBalance(amount, friendsExpense, myExpense, whoPaying) {
    let balanceChange = 0;
    if (whoPaying === "user") {
      balanceChange = friendsExpense;
    } else if (whoPaying === "friend") {
      balanceChange = -myExpense;
    }

    const calculatedNewBalance = selectedFriend.balance + balanceChange;
    console.log("selectedFriend.balance ==> ", selectedFriend.balance);

    console.log("calculatedNewBalance ==> ", calculatedNewBalance);

    setFriends((currentFriends) =>
      currentFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: calculatedNewBalance }
          : friend
      )
    );
    setSelectedFriend((prevSelectedFriend) => {
      if (!prevSelectedFriend) return null;
      return {
        ...prevSelectedFriend,
        balance: calculatedNewBalance,
      };
    });
  }

  function handleAddNewFriend(newFriend) {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriendForm(false);
  }

  return (
    <div className="container mx-auto flex items-center justify-center gap-30 p-4 max-h-screen">
      <FriendList
        onSelectButtonClicked={handleSelectButtonClicked}
        selectedFriend={selectedFriend}
        friends={friends}
        handleAddNewFriend={handleAddNewFriend}
      />
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onUpdateBalance={handleUpdateBalance}
        />
      )}
    </div>
  );
}

export default App;
