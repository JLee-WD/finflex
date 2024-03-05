import { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css"

//An interface is a blueprint for objects that defines the types and properties an object must have
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// Assigned the type of a React functional component (React.FC) that takes a generic type Props. This component is expected to receive props conforming to the Props interface, then explicitly states that it returns a JSX.Element.
const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props) : JSX.Element => {
  return (
    <div className='card'><img src='https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='test' />
      <div className='details'>
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
      </div>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  )
}

export default Card