import React from "react";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="container mx-auto flex flex-col p-4 gap-4">
      <FriendList />
      <button className="bg-violet-700 hover:bg-violet-900 text-white font-medium py-2 px-4 rounded h-10 place-self-start">
        Add Friend
      </button>
    </div>
  );
}

export default App;
