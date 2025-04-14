// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ emailQuery, setEmailQuery, suggestions, onSelect }) => {
  return (
    <div>
      <input
      className="flex-grow border-2 border-gray-300 p-2 rounded-l-md"
        placeholder="Search by email"
        value={emailQuery}
        onChange={(e) => setEmailQuery(e.target.value)}
      />
      {emailQuery && suggestions.length > 0 && (
        <ul>
          {suggestions.map((u) => (
            <li key={u.id} onClick={() => onSelect(u.email)}>
              {u.fullName} ({u.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
