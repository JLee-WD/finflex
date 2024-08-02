import React from 'react';
import {
  FaMoneyBillTransfer,
  FaBusinessTime,
  FaChartSimple,
} from 'react-icons/fa6';
import { IconContext } from 'react-icons';

type Props = {};

const Columns = (props: Props) => {
  return (
    <IconContext.Provider value={{ size: '5em', color: '#49e3a7' }}>
      <section id="columns" className="my-20">
        <div className="container flex flex-row mx-auto mb-6 py-20 px-16 bg-white rounded-lg shadow-xl">
          <div className="flex flex-col items-start mx-auto w-96 px-6">
            <div className="mx-auto flex items-center justify-center min-w-24 min-h-24">
              <FaMoneyBillTransfer />
            </div>
            <h3 className="text-blueGray-400 font-bold text-xl my-6">
              Comprehensive Financial Summaries
            </h3>
            <p className="text-sm text-gray-400">
              Generate concise and detailed summaries of financial documents
              using the Financial Modelling Prep API, highlighting key data
              points and trends, making it easier for users to quickly grasp
              essential information without reading lengthy reports.
            </p>
          </div>
          <div className="flex flex-col items-start mx-auto w-96 px-6">
            <div className="mx-auto flex items-center justify-center min-w-24 min-h-24">
              <FaBusinessTime />
            </div>
            <h3 className="text-blueGray-400 font-bold text-xl my-6">
              Customizable Dashboards and Alerts
            </h3>
            <p className="text-sm text-gray-400">
              Create personalized dashboards to save searches, track specific
              companies or industries, and set alerts for new, relevant
              documents, keeping you updated and organized.
            </p>
          </div>
          <div className="flex flex-col items-start mx-auto w-96 px-6">
            <div className="mx-auto flex items-center justify-center min-w-24 min-h-24">
              <FaChartSimple />
            </div>
            <h3 className="text-blueGray-400 font-bold text-xl my-6">
              Real-time Data Integration
            </h3>
            <p className="text-sm text-gray-400">
              Leverage the Financial Modelling Prep API to provide real-time
              financial data, including stock prices, company financials, and
              key metrics directly within the app, ensuring users have access to
              the most current information for their analysis and
              decision-making.
            </p>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Columns;
