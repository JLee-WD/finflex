import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList : React.FC<Props> = ({searchResult, onPortfolioCreate, }: Props): JSX.Element => {
  return (
    <div>
      {searchResult.length > 0 ? (searchResult.length > 0 && searchResult.map((company) => {
        return (
          <Card searchResult={company} id={company.symbol} key={uuidv4()} onPortfolioCreate={onPortfolioCreate} />
        )
      })) : <h1>No Results</h1>}
    </div>
  )
}

export default CardList