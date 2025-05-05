import React from "react";

function SplitBillForm() {
  return (
    <div className="split-bill-form-container">
      <form className="split-bill-form">
        <h2>Split a bill with name</h2>
        <label>Bill amount</label>
        <input type="text" />
        <label>Your expense</label>
        <input type="text" />
        <label>names expense</label>
        <input type="text" disabled />
        <label>Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">name</option>
        </select>
        <button>Split Bill</button>
      </form>
    </div>
  );
}

export default SplitBillForm;
