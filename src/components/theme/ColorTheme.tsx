import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import ThemeItem from "./ThemeItem";

const Background: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>("light");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system") {
      setSelectedOption("system");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
    } else if (savedTheme === "dark") {
      setSelectedOption("dark");
      document.documentElement.classList.add("dark");
    } else {
      setSelectedOption("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleApplyChanges = () => {
    if (selectedOption === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (selectedOption === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (selectedOption === "system") {
      localStorage.setItem("theme", "system");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };



  return (
    <div className="p-8 flex flex-col gap-6 max-w-[75%]">
      <div>
        <h2 className="text-lg bold-700">Color Theme</h2>
        <p className="text-md text-gray-700 dark:text-neutral-300 ">Choose your color theme:</p>
      </div>
      <div className="flex flex-col gap-4">
        <div onClick={() => setSelectedOption("light")}><ThemeItem selected={selectedOption === "light"} label="Light Mode" description="Pick a clean and classic light theme" iconPath="/Sun.svg" /></div>
        <div onClick={() => setSelectedOption("dark")}><ThemeItem selected={selectedOption === "dark"} label="Dark Mode" description="Select a sleek and modern dark theme" iconPath="/DarkMode.svg" /></div>
        <div onClick={() => setSelectedOption("system")}><ThemeItem selected={selectedOption === "system"} label="System" description="Adapts to your device’s theme" iconPath="/System.svg" /></div>
      </div>
      <div className="flex flex-row justify-end">
        <PrimaryButton id="color-theme-apply-btn" onClick={handleApplyChanges}> Apply Changes</PrimaryButton>
      </div>
    </div>
  );
};

export default Background;
