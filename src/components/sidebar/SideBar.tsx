import React from "react";
import MenuBar from "./MenuBar";
import { getAllTags } from "../../api";

interface SideBarProps {
  selected?: string;
  setSelected: (tag: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({selected, setSelected}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  const typeOfNotes = [
    { logoName: "Home.svg", label: "All Notes" },
    { logoName: "Archive.svg", label: "Archive Notes" },
  ];

  React.useEffect(() => {
    getAllTags().then((data) => {
      setTags(data);
    });
  }, []);
  
  
  return (
    <aside className="flex-column justify-center border border-gray-200 p-4 gap-4">
      <div className="flex w-full py-4">
        <img src="/logo.svg" alt="Logo" className="block dark:hidden h-7 w-20"/>
        <img src="dark/logo.svg" alt="Logo" className="hidden dark:block h-7 w-20"/>
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
          {tags.map((tag) => (
            <MenuBar
              key={tag}
              logoName={"Tag.svg"}
              label={tag}
              selected={selected === tag}
              onClick={() => setSelected(tag)}
            />
          ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
