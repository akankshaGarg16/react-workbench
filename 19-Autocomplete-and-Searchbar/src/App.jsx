import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // on clicking outside search results closes and on field focus, it comes
  const [isSearchList, setIsSearchList] = useState(false);
  // get the results from cache if cache had it already instead of making network call
  const [searchCache, setSearchCache] = useState({});

  useEffect(() => {
    // debounced search
    const timer = setTimeout(() => {
      fetchSearchResults(searchInput);
    },200)
    return () => clearTimeout(timer);
  }, [searchInput])

  const fetchSearchResults = async (searchInput) => {
    if(searchCache[searchInput]) {
      setSearchResult(searchCache[searchInput]);
    } else {
      const data = await fetch("https://www.google.com/complete/search?client=firefox&q=" + searchInput);
      const json = await data.json();
      setSearchResult(json[1]);
      searchCache[searchInput] = json[1]
    }
  }

  return (
    <div className='m-2 p-2'>
      <input className='border border-gray-400 w-64 p-2' type="text"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      onFocus={() => setIsSearchList(true)}
      onBlur={() => setIsSearchList(false)}
      />
      {
        searchResult.length > 1 && isSearchList &&
        <ul className='border border-gray-400 w-64 p-2'>
          {searchResult.map((result) => <li className='hover:bg-gray-300' key={result}>{result}</li>)}
        </ul>
      }
    </div>
  )
}

export default App
