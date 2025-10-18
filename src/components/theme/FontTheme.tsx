import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import ThemeItem from "./ThemeItem";

const fontOptionsMap: { [key: string]: string } = {
  "Sans-serif": "var(--font-option-sans)",
  "Serif": "var(--font-option-serif)",
  "Monospace": "var(--font-option-mono)",
};

const FontTheme: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>("Sans-serif");

  React.useEffect(() => {
    localStorage.getItem("fontTheme") && setSelectedOption(localStorage.getItem("fontTheme") as string);
  }, []);

  const handleApplyChanges = () => {
    // 1. Get the CSS variable string for the selected option
    const fontCSSValue = fontOptionsMap[selectedOption];
    
    // 2. Set the value of the main dynamic CSS variable on the root (<html>)
    document.documentElement.style.setProperty('--user-font', fontCSSValue);
    
    localStorage.setItem("fontTheme", selectedOption);
  };

  return (
    <div className="p-8 flex flex-col gap-6 max-w-[75%]">
      <div>
        <h2 className="text-lg bold-700">Font Theme</h2>
        <p className="text-md text-gray-700 dark:text-neutral-300">Choose your font theme:</p>
      </div>
      <div className="flex flex-col gap-4">
        <div onClick={() => setSelectedOption("Sans-serif")}><ThemeItem selected={selectedOption === "Sans-serif"} label="Sans-serif" description="Clean and modern, easy to read." iconPath="/Sans Serif.svg" /></div>
        <div onClick={() => setSelectedOption("Serif")}><ThemeItem selected={selectedOption === "Serif"} label="Serif" description=" Classic and elegant for a timeless feel." iconPath="/Serif.svg" /></div>
        <div onClick={() => setSelectedOption("Monospace")}><ThemeItem selected={selectedOption === "Monospace"} label="Monospace" description="Clean and modern, easy to read." iconPath="/Monospace.svg" /></div>
      </div>
      <div className="flex flex-row justify-end">
        <PrimaryButton id="font-theme-apply-btn" onClick={handleApplyChanges}> Apply Changes</PrimaryButton>
      </div>
    </div>
  );
};

export default FontTheme;
