import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[];
}

const CardList : React.FC<Props> = ({searchResult}: Props): JSX.Element => {
  return (
    <div>
      {searchResult.length > 0 && searchResult.map((company) => {
        return (
          <Card searchResult={company} id={company.symbol} key={uuidv4()} />
        )
      })}
    </div>
  )
}

export default CardList