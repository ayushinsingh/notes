import React from "react";
import MenuBar from "./MenuBar";

const SideBar: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("All Notes");
  const typeOfNotes = [
    { logoName: "Home.svg", label: "All Notes", path: "/" },
    { logoName: "Archive.svg", label: "Archive Notes", path: "/archive" },
  ];
  const allTags: { label: string; path: string }[] = [
    {
      label: "Cooking",
      path: "/tag/cooking"
    },
    {
      label: "Dev",
      path: "/tag/dev"
    },
    {
      label: "React",
      path: "/tag/react"
    },
    {
      label: "Fitness",
      path: "/tag/fitness"
    },
    {
      label: "Personal",
      path: "/tag/personal"
    },
    {
      label: "Travel",
      path: "/tag/travel"
    },
  ];
  return (
    <aside className="flex-column justify-center border border-gray-200 p-4 gap-4">
      <div className="flex w-full py-4">
        <img src="/logo.svg" alt="Logo" className="h-7 w-20"/>
      </div>
      <div>
        <div>
          {typeOfNotes.map((noteType) => (
            <MenuBar
              key={noteType.label}
              logoName={noteType.logoName}
              label={noteType.label}
              selected={selected === noteType.label}
              onClick={() => setSelected(noteType.label)}
            />
          ))}
        </div>
        <hr className="flex-grow border-gray-200" />
        <div>
          <h2 className="text-sm text-gray-500 mx-1">Tags</h2>
          <div>
          {allTags.map((tag) => (
            <MenuBar
              key={tag.label}
              logoName={"Tag.svg"}
              label={tag.label}
              selected={selected === tag.label}
              onClick={() => setSelected(tag.label)}
            />
          ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
