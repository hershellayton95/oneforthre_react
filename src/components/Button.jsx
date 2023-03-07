import React from "react";

const Button = ({ onClick, children }, ...props) => {
  return (
    <button
      className="inline-block bg-blue-500 hover:bg-blue-600 active:scale-[0.95] text-white my-2 mx-1 py-2 px-3 leading-6 text-center align-middle cursor-pointer rounded select-none"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
