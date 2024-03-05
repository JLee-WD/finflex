import CardList from './Components/CardList/CardList';
import './App.css';
import Search from './Components/Search/Search';
import { SyntheticEvent, useState } from 'react';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  const [search, setSearch] = useState<string>("")
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result)
    } else if (Array.isArray(result.data)){
      setSearchResult(result.data);
    }
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const updatedPortfolioValues = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolioValues);
  }
  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const filteredArray = portfolioValues.filter(value => value !== e.target[0].value);
    setPortfolioValues(filteredArray);
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search search={search} handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} />
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
