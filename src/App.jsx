import React from "react";
import FriendList from "./components/FriendList";
import Button from "./components/Button";

function App() {
  return (
    <div className="container mx-auto flex flex-col p-4 gap-4">
      <FriendList />
    </div>
  );
}

export default App;
