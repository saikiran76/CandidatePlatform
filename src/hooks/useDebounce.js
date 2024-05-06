/**
 * Debounced search for reducing API calls while searching based on key storkes
 */

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // creating delay for making a call 
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);


   // clearing the timer
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;