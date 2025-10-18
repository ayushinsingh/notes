import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { fetchNoteById, type NoteType } from "../../api";
import { formatDateWithSuffix } from "../../utils";

interface NoteProps {
  id?: string;
}

const Note: React.FC<NoteProps> = ({ id }) => {
  const [title, setTitle] = React.useState<string>("");
  const [tags, setTags] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [isArchived, setIsArchived] = React.useState<boolean>(false);
  const [lastEdited, setLastEdited] = React.useState<string>("Not yet saved");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!id) {
      // Create a new note
      const payload = {
        title: title,
        tags: tags.split(",").map((tag) => tag.trim()),
        content: content,
        isArchived: isArchived,
      };
      console.log("Creating note with payload:", payload);
    } else {
      // Update existing note
      const payload = {
        title: title,
        tags: tags.split(",").map((tag) => tag.trim()),
        content: content,
        isArchived: isArchived,
        id: id,
      };
      console.log("Updating note with payload:", payload);
    }
  };

  React.useEffect(() => {
    if (!id) {
      setTitle("");
      setTags("");
      setContent("");
      setIsArchived(false);
      setLastEdited("Not yet saved");
      return;
    }
    // Fetch note data from API or local storage using the id prop
    // For demonstration, we'll use static data
    fetchNoteById(id).then((data) => {
      if (data) {
        const note = data as NoteType;
        setTitle(note.title);
        setTags(note.tags.join(", "));
        setContent(note.content);
        setIsArchived(note.isArchived);
        setLastEdited(formatDateWithSuffix(note.lastEdited));
      }
    });
  }, [id]);

  return (
    <div className="grid grid-cols-[1fr_30%] h-screen">
      <form
        className="flex flex-col gap-4 px-6 py-4 border-r border-gray-200 h-screen"
        onSubmit={handleSubmit}
      >
        <input
          id="title"
          className="w-full text-3xl font-bold border-0 focus:ring-0 focus:outline-none"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex flex-col text-gray-500 dark:text-neutral-300">
          <div className="flex flex-row">
            <label htmlFor="tags" className="flex items-center text-md w-40">
              <img className="block dark:hidden w-6 h-5" src="/Tag.svg" />
              <img className="hidden dark:block w-6 h-5" src="dark/Tag.svg" />
              <span>Tags</span>
            </label>
            <input
              id="tags"
              className="w-full px-1 rounded-md"
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
        {isArchived && (
          <div className="flex flex-col text-gray-500 dark:text-neutral-300">
            <div className="flex flex-row">
              <div className="flex items-center text-md  w-40">
                <img className="w-6 h-5" src="/Loading.svg" />
                <span>Status</span>
              </div>
              <p className="w-full focus:none text-md px-1">Archived</p>
            </div>
          </div>
        )}
        <div className="flex flex-col text-gray-500 dark:text-neutral-300">
          <div className="flex flex-row">
            <div className="flex items-center text-md  w-40">
              <img className="block dark:hidden w-6 h-5" src="/CircleClock.svg" />
              <img className="hidden dark:block w-6 h-5" src="dark/CircleClock.svg" />
              <span>Last edited</span>
            </div>
            <p className="w-full focus:none text-md px-1">{lastEdited}</p>
          </div>
        </div>
        <hr className="border border-gray-200" />
        <textarea
          id="content"
          className="w-full border-0 focus:ring-0 focus:outline-none resize-none h-[61vh] overflow-y-auto"
          placeholder="Start writing your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <hr className="border border-gray-200" />
        <div className="flex flex-row justify-start gap-4">
          <PrimaryButton id="save-note-button" type="submit">
            Save Note
          </PrimaryButton>
          <SecondaryButton id="cancel" type="button">
            Cancel
          </SecondaryButton>
        </div>
      </form>
      <div className="flex flex-col pl-4 py-4 h-screen gap-4">
        {id && (
          <>
            {!isArchived ? (
              <SecondaryButton id={"archive-button"}>
                <img id="archive-icon" alt="archive" src="/Archive.svg" className="block dark:hidden" />
                <img id="archive-icon" alt="archive" src="dark/Archive.svg" className="hidden dark:block" />
                Archive
              </SecondaryButton>
            ) : (
              <SecondaryButton id={"archive-button"}>
                <img id="restore-icon" alt="restore" src="/Refresh left.svg" className="block dark:hidden" />
                <img id="restore-icon" alt="restore" src="dark/Refresh left.svg" className="hidden dark:block" />
                Restore
              </SecondaryButton>
            )}
            <SecondaryButton id={"delete-button"}>
              <img id="delete-icon" alt="delete" src="/Delete.svg" className="block dark:hidden" />
              <img id="delete-icon" alt="delete" src="dark/Delete.svg" className="hidden dark:block" />
              Delete
            </SecondaryButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
