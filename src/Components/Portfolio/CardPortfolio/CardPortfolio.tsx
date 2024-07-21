import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioDelete,
}: Props) => {
  console.log(portfolioValue);
  return (
    <div className="flex flex-col w-full h-600px p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolioValue?.symbol}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue.symbol}
      </Link>
      <p className="text-medium text-gray-900 p3 mt-1 m-4">
        {portfolioValue.companyName}
      </p>
      <p className="text-medium text-gray-900 p3 mt-1 m-4">
        {portfolioValue.industry}
      </p>
      <p className="text-medium text-gray-900 p3 mt-1 m-4">
        Purchase: ${portfolioValue.purchase}
      </p>
      <p className="text-medium text-gray-900 p3 mt-1 m-4">
        Market Cap: ${portfolioValue.marketCap}
      </p>
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
