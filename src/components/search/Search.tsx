import React from "react";

interface SearchProps {
  query: string;
  setQuery?: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({query, setQuery}) => {
  return (
    <div className="relative w-[350px]">
      <span className="absolute top-[30%] left-4">
        <img src="/Search.svg" alt="Search" className="h-5 w-5" />
      </span>
      <input
        id="app-search"
        type="text"
        placeholder="Search by title, content, or tags…"
        className="w-full text-sm pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery && setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
