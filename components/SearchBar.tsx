import React from "react";

type SearchBarProps = {
    searchTerm: string;
    onSearchTermChange: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
    searchTerm,
    onSearchTermChange,
}) => {
    return (
        <div className="flex items-center justify-center w-[100%] ">
            <input
                type="text"
                placeholder="Search Food Name"
                className="dn-box bg-box p-4 shadow-md relative px-4 py-2 rounded w-[100%]"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <button
                className="ml-2 btn-donate"
                onClick={() => onSearchTermChange("")}
            >
                Clear
            </button>
        </div>
    );
};

export default SearchBar;