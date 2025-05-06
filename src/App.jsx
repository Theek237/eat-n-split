import React, { useState } from "react";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectButtonClicked(friend) {
    setSelectedFriend(friend);
    console.log("friend ==> ", friend.name);
  }
  return (
    <div className="container mx-auto flex items-center justify-center gap-30 p-4 max-h-screen">
      <FriendList
        onSelectButtonClicked={handleSelectButtonClicked}
        selectedFriend={selectedFriend}
      />
      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
