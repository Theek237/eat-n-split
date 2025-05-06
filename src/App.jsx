import React from "react";
import FriendList from "./components/FriendList";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  return (
    <div className="container mx-auto flex items-center justify-center gap-30 p-4 max-h-screen">
      <FriendList />
      <SplitBillForm />
    </div>
  );
}

export default App;
