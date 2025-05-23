import React, { useState } from "react";
import Button from "./Button";

function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriendFormSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: `${image}?u=${crypto.randomUUID()}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <div className="w-[300px] bg-violet-100 p-4 rounded-lg shadow-md mt-4">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleAddFriendFormSubmit}
      >
        <label htmlFor="name" className="font-semibold">
          🧑‍🤝‍🧑 Friend name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-1 border border-gray-300 bg-white rounded"
        />
        <label htmlFor="url" className="font-semibold">
          🖼️ Image URL
        </label>
        <input
          type="text"
          id="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-1 border border-gray-300 rounded bg-white"
        />

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default AddFriendForm;
