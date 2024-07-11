import React, { useEffect, useState } from 'react';
import { Company10K } from '../../company';
// import { getTenK } from '../../api';
import TenKFinderItem from '../TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  // const [companyData, setCompanyData] = useState<Company10K[]>();
  // useEffect(() => {
  //   const tenKDataFetch = async () => {
  //     const result = await getTenK(ticker!)
  //     setCompanyData(result?.data)
  //   }
  //   tenKDataFetch();
  // }, [ticker])
  return (
    <div className="inline-felx rounded-md shadow-sm m-4">
      {/* {companyData ? companyData?.slice(0, 5).map((tenk) => {
      return <TenKFinderItem tenK={tenk} />
    }) : <Spinner />} */}
    </div>
  );
};

export default TenKFinder;
