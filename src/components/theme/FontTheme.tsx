import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import ThemeItem from "./ThemeItem";

const Font: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>("Sans-serif");

  const handleApplyChanges = () => {
    console.log("Applying theme:", selectedOption);
    // Add logic to apply the selected theme
  };

  return (
    <div className="p-8 flex flex-col gap-6 max-w-[75%]">
      <div>
        <h2 className="text-lg bold-700">Font Theme</h2>
        <p className="text-md text-gray-700 ">Choose your font theme:</p>
      </div>
      <div className="flex flex-col gap-4">
        <div onClick={() => setSelectedOption("Sans-serif")}><ThemeItem selected={selectedOption === "Sans-serif"} label="Sans-serif" value="Sans-serif" description="Clean and modern, easy to read." iconPath="/Sans Serif.svg" /></div>
        <div onClick={() => setSelectedOption("Serif")}><ThemeItem selected={selectedOption === "Serif"} label="Serif" value="Serif" description=" Classic and elegant for a timeless feel." iconPath="/Serif.svg" /></div>
        <div onClick={() => setSelectedOption("Monospace")}><ThemeItem selected={selectedOption === "Monospace"} label="Sans-serif" value="Monospace" description="Clean and modern, easy to read." iconPath="/Monospace.svg" /></div>
      </div>
      <div className="flex flex-row justify-end">
        <PrimaryButton id="font-theme-apply-btn" onClick={handleApplyChanges}> Apply Changes</PrimaryButton>
      </div>
    </div>
  );
};

export default Font;
