import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;}

const ListPortfolio : React.FC<Props> = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
      <h3>Portfolio</h3>
      {portfolioValues.map((portfolioValue) => {
        return (
          <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
        )
      })}
    </>
  )
}

export default ListPortfolio