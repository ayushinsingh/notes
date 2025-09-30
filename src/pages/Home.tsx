import React from "react";
import NoteList from "../components/noteList/NoteList";
import Note from "../components/note/Note";
interface HomeProps {
  type: "all" | "archived";
  tag?: string;
}
const Home: React.FC<HomeProps> = ({type, tag}) => {
  const [selectedNote, setSelectedNote] = React.useState<string | null>(null);
  return (
    <div className="grid grid-cols-[25%_1fr] px-6">
      <NoteList type={type} tag={tag} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
      {selectedNote && <Note id={selectedNote} />}
    </div>
  );
};

export default Home;
