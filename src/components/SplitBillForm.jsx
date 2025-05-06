import React, { useState } from "react";
import Button from "./Button";

function SplitBillForm({ selectedFriend, onUpdateBalance }) {
  const [amount, setAmount] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendsExpense = amount ? amount - myExpense : "";
  const [whoPaying, setWhoPaying] = useState("user");

  function handleSplitBillFormSubmit(e) {
    e.preventDefault();

    onUpdateBalance(amount, friendsExpense, myExpense, whoPaying);
  }
  return (
    <div className="w-[400px] bg-violet-100 p-4 rounded-lg shadow-md">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSplitBillFormSubmit}
      >
        <h2 className="text-lg font-bold mb-2 uppercase">
          Split a bill with {selectedFriend.name}
        </h2>
        <label className="font-semibold">💰 Bill value</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-1 border border-gray-300 rounded bg-white"
        />
        <label className="font-semibold">🧍 Your expense</label>
        <input
          type="text"
          value={myExpense}
          onChange={(e) =>
            Number(e.target.value) <= amount
              ? setMyExpense(Number(e.target.value))
              : ""
          }
          className="p-1 border border-gray-300 rounded bg-white"
        />
        <label className="font-semibold">
          🧑‍🤝‍🧑 {selectedFriend.name}'s expense
        </label>
        <input
          type="text"
          disabled
          value={friendsExpense}
          className="p-1 border border-gray-300 rounded bg-white "
        />
        <label className="font-semibold">🤑 Who is paying the bill</label>
        <select
          className="p-1 border border-gray-300 rounded bg-white"
          value={whoPaying}
          onChange={(e) => setWhoPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

export default SplitBillForm;
