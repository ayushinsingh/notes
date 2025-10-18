import React from "react";
import MenuBar from "../components/sidebar/MenuBar";
import Background from "../components/theme/ColorTheme";
import FontTheme from "../components/theme/FontTheme";
import ChangePassword from "../components/password/ChangePassword";

const Settings = () => {
  const [selected, setSelected] = React.useState<string>("color");
  return (
    <div className="grid grid-cols-[25%_1fr] px-6">
      <div className="flex flex-col border-r border-gray-200 h-screen px-6">
        <MenuBar
          logoName="Sun.svg"
          label="Color Theme"
          selected={selected === "color"}
          onClick={() => setSelected("color")}
        />
        <MenuBar
          logoName="Type.svg"
          label="Font Theme"
          selected={selected === "font"}
          onClick={() => setSelected("font")}
        />
        <MenuBar
          logoName="Lock.svg"
          label="Change Password"
          selected={selected === "password"}
          onClick={() => setSelected("password")}
        />
        <hr className="border-gray-200" />
        <div
          className={
            "flex flex-row justify-between p-2 my-2 rounded-md cursor-pointer hover:bg-gray-100 "
          }
          onClick={() => console.log("logout")}
        >
          <div className="flex flex-row items-center gap-2">
            <img src="/Logout.svg" alt="Logout" className="block dark:hidden w-5 h-5" />
            <img src="dark/Logout.svg" alt="Logout" className="hidden dark:block w-5 h-5" />
            <p className="w-full text-sm text-gray-700 dark:text-white">Logout</p>
          </div>
        </div>
      </div>
      {selected === "color" && <Background />}
      {selected === "font" && <FontTheme />}
      {selected === "password" && <ChangePassword />}
    </div>
  );
};

export default Settings;
