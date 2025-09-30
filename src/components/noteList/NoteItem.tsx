import React from 'react';

interface NoteItemProps {
  tags: string[];
  title: string;
  date: string;
  selected?: boolean;
  onClick?: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({title, tags, date, selected, onClick}) => {

  function formatDateWithSuffix(isoString: string) {
    const date = new Date(isoString);

    // Add suffix (st, nd, rd, th)
    function getDayWithSuffix(day: number) {
      if (day > 3 && day < 21) return day + "th";
      switch (day % 10) {
        case 1:
          return day + "st";
        case 2:
          return day + "nd";
        case 3:
          return day + "rd";
        default:
          return day + "th";
      }
    }

    const day = getDayWithSuffix(date.getUTCDate());
    const month = date.toLocaleString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div className={`flex flex-col gap-4 border-b border-gray-200 p-2 hover:bg-gray-100 rounded-sm cursor-pointer ${selected ? "bg-gray-100" : ""}`} onClick={onClick}>
        <h3 className="text-xl font-semibold ">{title}</h3>
        <div className="flex flex-row gap-1">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs">{formatDateWithSuffix(date)}</p>
      </div>
  )
}

export default NoteItem
