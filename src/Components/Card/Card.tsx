import { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css"
import { Link } from "react-router-dom";

//An interface is a blueprint for objects that defines the types and properties an object must have
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// Assigned the type of a React functional component (React.FC) that takes a generic type Props. This component is expected to receive props conforming to the Props interface, then explicitly states that it returns a JSX.Element.
const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props) : JSX.Element => {
  return (
  <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResult.symbol}/company-profile`} className="font-bold text-center text-veryDarkViolet md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="text-veryDarkBlue">{searchResult.currency}</p>
      <p className="font-bold text-veryDarkBlue">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
    <AddPortfolio
      onPortfolioCreate={onPortfolioCreate}
      symbol={searchResult.symbol}
    />
  </div>
  )
}

export default Card