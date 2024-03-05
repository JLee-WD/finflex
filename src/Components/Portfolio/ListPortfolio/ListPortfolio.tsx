import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

interface Props {portfolioValues: string[]}

const ListPortfolio : React.FC<Props> = ({portfolioValues}: Props) => {
  return (
    <>
      <h3>Portfolio</h3>
      {portfolioValues.map((portfolioValue) => {
        return (
          <CardPortfolio portfolioValue={portfolioValue} />
        )
      })}
    </>
  )
}

export default ListPortfolio