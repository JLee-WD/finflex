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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onClick = async (e: SyntheticEvent) => {
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

  return (
    <div className="App">
      <Search search={search} handleChange={handleChange} onClick={onClick} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResult={searchResult} />
    </div>
  );
}

export default App;
