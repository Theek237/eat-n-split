import React from "react";
import Button from "./Button";

function SplitBillForm() {
  //   const { name } = friend;
  return (
    <div className="w-[400px] bg-violet-100 p-4 rounded-lg shadow-md">
      <form className="flex flex-col gap-2">
        <h2 className="text-lg font-bold mb-2 uppercase">
          Split a bill with name
        </h2>
        <label className="font-semibold">💰 Bill value</label>
        <input
          type="text"
          className="p-1 border border-gray-300 rounded bg-white"
        />
        <label className="font-semibold">🧍 Your expense</label>
        <input
          type="text"
          className="p-1 border border-gray-300 rounded bg-white"
        />
        <label className="font-semibold">🧑‍🤝‍🧑 name's expense</label>
        <input
          type="text"
          disabled
          className="p-1 border border-gray-300 rounded bg-white "
        />
        <label className="font-semibold">🤑 Who is paying the bill</label>
        <select className="p-1 border border-gray-300 rounded bg-white">
          <option value="user">You</option>
          <option value="friend">name</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

export default SplitBillForm;
