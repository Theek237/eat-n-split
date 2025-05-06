import React from "react";
import Button from "./Button";

function Friend({ friend }) {
  const isSelected = false;
  return (
    <>
      <div className="flex items-center justify-between gap-2.5 p-2 rounded hover:bg-violet-100">
        <div className="flex items-center gap-3">
          <img src={friend.image} className="rounded-full w-12 h-12" />
          <div className="flex flex-col text-base">
            <div className="font-bold">{friend.name}</div>
            <div className="text-xs">
              {friend.balance > 0 ? (
                <span className="text-green-600">{`${friend.name} owes you ${friend.balance}$`}</span>
              ) : friend.balance < 0 ? (
                <span className="text-red-600">{`You owe ${
                  friend.name
                } ${Math.abs(friend.balance)}$`}</span>
              ) : (
                `You and ${friend.name} are even`
              )}
            </div>
          </div>
        </div>
        <div>
          <Button>{isSelected ? "Close" : "Select"}</Button>
        </div>
      </div>
    </>
  );
}

export default Friend;
