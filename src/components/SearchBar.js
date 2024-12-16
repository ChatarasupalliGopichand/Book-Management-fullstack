import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search for books"
        onChange={(e) => onSearch(e.target.value)}
        style={{
          transition: "box-shadow 0.3s ease",
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = "0px 6px 20px rgba(255, 255, 255, 0.4)";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

export default SearchBar;
