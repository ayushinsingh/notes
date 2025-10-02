import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import NoteItem from "./NoteItem";
import { fetchNotes, type NoteType } from "../../api";

interface NoteListProps {
  type: string;
  selectedNote: string | null;
  setSelectedNote: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  type,
  selectedNote,
  setSelectedNote,
}) => {
  const [notes, setNotes] = React.useState<Array<NoteType>>([]);

  React.useEffect(() => {
    fetchNotes(type).then((data) => {
      let filteredNotes = data as Array<NoteType>;
      setNotes(filteredNotes);
    });
  }, [type, selectedNote]);

  console.log("selectedNote", selectedNote);

  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto border-r border-gray-200 h-screen">
      <PrimaryButton id="add-note-button" onClick={() => setSelectedNote("")}>+ Create New Note</PrimaryButton>
      {type !== "All Notes" && (
        <p className="text-neutral-700 text-sm">
          {type === "Archive Notes"
            ? "All your archived notes are stored here. You can restore or delete them anytime."
            : `All notes with the "${type}" tag are shown here.`}
        </p>
      )}
      <div className="h-full">
        {!selectedNote && <NoteItem key="untitled-note" title="Untitled Note" tags={[]} date={""} selected={!selectedNote} onClick={() => setSelectedNote("")} />}
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            title={note.title}
            tags={note.tags}
            date={note.lastEdited}
            selected={selectedNote === note._id}
            onClick={() => setSelectedNote(note._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
