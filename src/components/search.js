/**
 * Search functionality is implemented here
 * filtering based on text state of the input
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { setSearchQuery } from './utils/jobSlice'; 

const SearchBar = ({ jobs }) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setText(searchText);
    dispatch(setSearchQuery(searchText)); 
  };

  return (
    <div className="search-bar">
      <input
        className="inp-box"
        type="text"
        placeholder="Search Company Name"
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

