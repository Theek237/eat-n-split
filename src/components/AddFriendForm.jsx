import React from "react";
import Button from "./Button";

function AddFriendForm() {
  return (
    <div className="w-[300px] bg-violet-100 p-4 rounded-lg shadow-md mt-4">
      <form className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">
          🧑‍🤝‍🧑 Friend name
        </label>
        <input
          type="text"
          id="name"
          className="p-1 border border-gray-300 bg-white rounded"
        />
        <label htmlFor="url" className="font-semibold">
          🖼️ Image URL
        </label>
        <input
          type="url"
          id="url"
          className="p-1 border border-gray-300 rounded bg-white"
        />

        <Button>Add</Button>
      </form>
    </div>
  );
}

export default AddFriendForm;
