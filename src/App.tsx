import CardList from './Components/CardList/CardList';
import './App.css';
import Search from './Components/Search/Search';
import { SyntheticEvent, useState } from 'react';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("")
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      console.log(1);
      
      setServerError(result)
    } else if (Array.isArray(result.data)){
      console.log(1);
      setSearchResult(result.data);
    }
    console.log('result: ', result);
    console.log('searchResult: ', searchResult);
  }

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <Search search={search} handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
