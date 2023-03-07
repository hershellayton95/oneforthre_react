import React from "react";
import PropTypes from "prop-types";

const Input = (
  { type, value, placeholder, defaultValue, onChange },
  ...props
) => {
  return (
    <input
      className="inline-block my-2 mx-1 py-[0.35rem] px-2 leading-6 align-middle rounded-sm outline outline-2 focus:outline-offset-1 outline-gray-400 placeholder:italic"
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
