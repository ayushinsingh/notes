import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Search from "../components/search/Search";
import Home from "./Home";
import Settings from "./Settings";

const AppLayout: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("All Notes");
  const [settingsOpen, setSettingsOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("All Notes");

  React.useEffect(() => {
    setSettingsOpen(false);
    setTitle(
      selected === "All Notes" || selected === "Archive Notes"
        ? selected
        : `Notes Tagged: ${selected}`
    );
    setSearchQuery("");
  }, [selected]);

  React.useEffect(() => {
    setSettingsOpen(false)
    if (!searchQuery) {
      setTitle(
        selected === "All Notes" || selected === "Archive Notes"
          ? selected
          : `Notes Tagged: ${selected}`
      );
    }
    searchQuery && setTitle(`Showing results for: ${searchQuery}`);
  }, [searchQuery]);

  return (
    <div className="min-h-screen dark:bg-neutral-800 dark:text-white grid grid-cols-[20%_1fr]">
      <SideBar selected={selected} setSelected={setSelected} />
      <main className="flex flex-col">
        <div className="flex flex-row justify-between items-center border border-gray-200 dark:border-neutral-700 px-6 py-4">
          <h1 className="font-bold text-2xl">{settingsOpen ? "Settings": title}</h1>
          <div className="flex flex-row items-center gap-4">
            <Search query={searchQuery} setQuery={setSearchQuery} />
            <button className="cursor-pointer">
              <img
                src="/Setting.svg"
                alt="Settings"
                className="block dark:hidden h-6 w-6"
                onClick={() => setSettingsOpen((prev) => !prev)}
              />
              <img
                src="dark/SettingsDark.svg"
                alt="Settings"
                className="hidden dark:block h-6 w-6 "
                onClick={() => setSettingsOpen((prev) => !prev)}
              />
            </button>
          </div>
        </div>
        {!settingsOpen ? (
          <Home type={selected} searchQuery={searchQuery} />
        ) : (
          <Settings />
        )}
      </main>
    </div>
  );
};

export default AppLayout;
