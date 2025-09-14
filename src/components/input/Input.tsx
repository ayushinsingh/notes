import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  forgotPasswordLink?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="email" className="text-sm text-gray-700">
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        id={props.id}
        placeholder={props.placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
