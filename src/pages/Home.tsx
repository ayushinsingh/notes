import React from "react";
import NoteList from "../components/noteList/NoteList";
import Note from "../components/note/Note";
interface HomeProps {
  type: string;
  searchQuery?: string;
}
const Home: React.FC<HomeProps> = ({type}) => {
  const [selectedNote, setSelectedNote] = React.useState<string>("");
  return (
    <div className="grid grid-cols-[25%_1fr] px-6">
      <NoteList type={type} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
      <Note id={selectedNote} />
    </div>
  );
};

export default Home;
