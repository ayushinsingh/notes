import React from "react";

interface PrimaryButtonProps {
  id: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <button
      type={props.type || "button"}
      className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors px-4 py-2"
      onClick={props.onClick}
      disabled={props.disabled}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
