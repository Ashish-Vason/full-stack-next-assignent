'use client';
import React, { useState, useEffect } from 'react';

const Fundamentals = () => {
  const [fundamentals, setFundamentals] = useState([]);
  /*const fundamentals = [
    { label: 'Chennai Super Kings (CSK) Shares', value: '₹ 188' },
    { label: 'Lot Size', value: '-' },
    { label: '52 Week High', value: '₹ 225' },
    { label: '52 Week Low', value: '₹ 158' },
    { label: 'Depository', value: '-' },
    { label: 'PAN Number', value: 'AAFCC8730K' },
    { label: 'ISIN Number', value: 'INE852S01026' },
    { label: 'CIN', value: 'U74900TN2014PLC098517' },
    { label: 'RTA', value: '-' },
    { label: 'Market Cap (in cr)', value: '₹ 8271' },
    { label: 'P/E Ratio', value: '41.05' },
    { label: 'P/B Ratio', value: '15.65' },
    { label: 'Debt to Equity', value: '-' },
    { label: 'ROE (%)', value: '38.16' },
    { label: 'Book Value', value: '13.92' },
    { label: 'Face Value', value: '0.1' },
    { label: 'Valuation', value: 'High' },
    { label: 'Total Shares', value: '379425004' },
  ]; */

  useEffect(() => {
    fetch('/api/getSheetData?sheetName=Fundamentals')
      .then((res) => res.json())
      .then((data) => {
        setFundamentals(data.data);
        console.log(data.data, 'shckbsbg');
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl bg-white rounded-lg my-5">
      <h2 className="text-xl font-bold  mb-4 text-black">Fundamentals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {console.log(fundamentals, 'funn')}
        {fundamentals[0]?.data.map((data, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-100 p-3 rounded-md shadow-sm"
          >
            <span className="font-medium text-gray-700">
              {data['Attribute']}
            </span>
            <span className="font-bold text-gray-900">{data['Value']}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fundamentals;
