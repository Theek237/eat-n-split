import React from "react";
import Button from "./Button";
function Friend({ name, imgUrl, balance }) {
  return (
    <>
      <div className="flex items-center  justify-between gap-2.5 p-2 rounded hover:bg-violet-100">
        <div className="flex items-center gap-3">
          <img src={imgUrl} alt={name} className="rounded-full w-12 h-12" />
          <div className="flex flex-col text-base">
            <div className="font-bold">{name}</div>
            <div className="text-s">
              {balance > 0 ? (
                <span className="text-green-600">{`${name} owes you ${balance}$`}</span>
              ) : balance < 0 ? (
                <span className="text-red-600">{`You owe ${name} ${Math.abs(
                  balance
                )}$`}</span>
              ) : (
                `You and ${name} are even`
              )}
            </div>
          </div>
        </div>
        <div>
          <Button>Select</Button>
        </div>
      </div>
    </>
  );
}

export default Friend;
