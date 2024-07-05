import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company'
import { getCompanyProfile } from '../../api'
import Tile from '../../Components/Tile/Tile'
import CompFinder from '../../Components/CompFinder/CompFinder'
import TenKFinder from '../../Components/TenKFinder/TenKFinder'

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, [ticker]);
  return (
    <>
      {company ?
            <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
              <Sidebar />
              <CompanyDashboard ticker={ticker!}>
                <Tile title="Company Name" subTitle={company?.companyName}/>
                <Tile title="Price" subTitle={"$" + company?.price.toString()}/>
                <Tile title="Sector" subTitle={company?.sector}/>
                {/* <Tile title="Market Cap" subTitle={company?.mktCap.toString()}/> */}
                <Tile title="DCF" subTitle={"$" + company?.dcf.toString()}/>
                <p className='bg-white shadow rounded text-medium text-gray-900 p3 mt-1 m-4'>
                  {company.description}
                </p>
                {/* <CompFinder ticker={company.symbol} /> */}
                {/* <TenKFinder ticker={company.symbol} /> */}
              </CompanyDashboard>
              <div>{company?.companyName}</div>
            </div> : <div>Company not found!</div>
      }
    </>
  )
}

export default CompanyPage