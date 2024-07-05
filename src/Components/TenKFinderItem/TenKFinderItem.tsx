import React from 'react'
import { Company10K } from '../../company';
import { Link } from 'react-router-dom';

type Props = {
  tenK: Company10K;
}

const TenKFinderItem = ({tenK}: Props) => {
  const fillingDate = new Date(tenK.filingDate).getFullYear();
  return (
    <Link reloadDocument to={tenK.finalLink} type='button' className='inline-flex items-center p-4 text-white bg-lightGreen rounded-m'>10k - {tenK?.symbol} - {fillingDate}</Link>
  )
}

export default TenKFinderItem