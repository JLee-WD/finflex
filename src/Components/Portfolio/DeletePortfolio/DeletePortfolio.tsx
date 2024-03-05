import React, { SyntheticEvent } from 'react'

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <form>
      <input hidden={true} type={portfolioValue} />
      <button>X</button>
    </form>
  )
}

export default DeletePortfolio