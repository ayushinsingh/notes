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
      className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors py-2"
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
