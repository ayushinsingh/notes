import React from 'react';
import { formatDateWithSuffix } from '../../utils';

interface NoteItemProps {
  tags: string[];
  title: string;
  date: string;
  selected?: boolean;
  onClick?: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({title, tags, date, selected, onClick}) => {

  return (
    <div className={`flex flex-col gap-2 border-b border-gray-200 p-2 hover:bg-gray-100 rounded-sm cursor-pointer ${selected ? "bg-gray-100" : ""}`} onClick={onClick}>
        <h3 className="text-lg font-semibold">{title}</h3>
        {tags.length > 0 && <div className="flex flex-row gap-1">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        }
        {date && <p className="text-xs">{formatDateWithSuffix(date)}</p>}
      </div>
  )
}

export default NoteItem
