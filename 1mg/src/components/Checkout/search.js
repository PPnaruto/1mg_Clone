import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
}

function SearchResults(props) {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch(`http://localhost:8080/search?q=${debouncedSearchTerm}`);
      const data = await response.json();
      setResults(data.results);
    }

    fetchResults();
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;