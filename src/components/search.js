/**
 * Search functionality is implemented here
 * filtering based on text state of the input
 * Included optimizing search using debouncing with delay of 250ms
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../App.css';
import { setSearchQuery } from './utils/jobSlice';
import useDebounce from '../hooks/useDebounce';

const SearchBar = ({ jobs }) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const debouncedSearchText = useDebounce(text, 250); // using an ideal time delay for debounce

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setText(searchText);
  };

  // Dispatching the search query only when the debounced value changes
  useEffect(() => {
    if (debouncedSearchText) {
      dispatch(setSearchQuery(debouncedSearchText));
    }
  }, [debouncedSearchText, dispatch]);

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

