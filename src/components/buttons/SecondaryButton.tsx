import React from "react";

interface SecondaryButtonProps {
  id: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <button className="border border-gray-300 bg-gray-100 rounded-lg hover:bg-gray-100 transition-colors px-4 py-2 flex items-center gap-2 justify-center">
      {props.children}
    </button>
  );
};

export default SecondaryButton;
