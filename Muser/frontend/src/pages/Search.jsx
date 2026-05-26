import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import SearchForm from '../components/SearchBox';
import SearchList from '../components/SeachList';

const Search = () => {
    const { user } = useAuth();
    const [results,setResults] = useState([]);


  return (
    <div className="container mx-auto p-6">
      <SearchForm setResults={setResults} />
      <SearchList tasks={results} />
    </div>
  );
};


export default Search;