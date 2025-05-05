import React from "react";
import "./main.css";

function AddFriendForm() {
  return (
    <div className="add-friend-container">
      <form className="add-friend-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="url">DP Url</label>
        <input type="url" id="url" />
        <button>Add</button>
      </form>

      <button>Close</button>
    </div>
  );
}

export default AddFriendForm;
