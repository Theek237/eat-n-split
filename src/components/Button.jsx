import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-violet-700 hover:bg-violet-900 text-white font-medium py-1 px-2 rounded"
    >
      {children}
    </button>
  );
}

export default Button;
