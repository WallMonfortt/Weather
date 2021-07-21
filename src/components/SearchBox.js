import React from 'react'
import { useState } from "react";


const SearchBox = ({ onSearch}) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <label>Search other city</label>
      <input className="search-input" onChange={(e) => setValue(e.target.value)}></input>
      <button id="btn"
        onClick={() => {
          onSearch(value);
        }}
      >Search</button>
    </div>
  )
}

export default SearchBox
