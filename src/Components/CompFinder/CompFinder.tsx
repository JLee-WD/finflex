import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../../api';
import CompFinderItem from '../CompFinderItem/CompFinderItem';

type Props = {
  ticker: string;
}

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData>();
  useEffect(() => {
    const compDataFetch = async () => {
      const result = await getCompData(ticker!)
      setCompanyData(result?.data[0])
    }
    compDataFetch();
  }, [ticker])

  return (
    <div className="inline-felx rounded-md shadow-sm m-4">
      {companyData?.peersList?.map((ticker) => {
        return <CompFinderItem key={ticker} ticker={ticker} />
      })}
    </div>
  )
}

export default CompFinder