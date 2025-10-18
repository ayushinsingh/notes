import React from "react";

interface ThemeItemProps {
  selected: boolean;
  label: string;
  description: string;
  iconPath: string;
}

const ThemeItem: React.FC<ThemeItemProps> = ({
  selected,
  label,
  description,
  iconPath,
}) => {
  return (
    <div
      className={`flex flex-row items-center gap-4 border border-gray-200 dark:border-neutral-700 rounded-lg p-4 cursor-pointer hover:scale-[1.01] transition-transform hover:bg-gray-100 dark:hover:bg-neutral-700 ${
        selected ? "bg-gray-100 dark:bg-neutral-700" : ""
      }`}
    >
      <div className="flex items-center border bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-600 rounded-xl p-2">
        <img
          src={iconPath}
          alt={label}
          className="w-8 h-8 block dark:hidden cursor-pointer hover:scale-105 transition-transform"
        />
        <img
          src={`dark${iconPath}`}
          alt={label}
          className="w-8 h-8 hidden dark:block cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
      <div
        className={`w-5 h-4 border-3 rounded-[50%] order-3 ${
          selected ? "border-blue-500" : "border-gray-400"
        }`}
      ></div>
      <div className="flex flex-col py-2 w-full">
        <p className="text-lg">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ThemeItem;
