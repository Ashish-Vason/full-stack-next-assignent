'use client';
import React, { useState, useEffect } from 'react';

const Financials = () => {
  const [activeTab, setActiveTab] = useState('income');
  const [financialData, setFinancialData] = useState([]);
  const [years, setYears] = useState([]);

  // Function to transform API response into structured table data
  const transformFinancialData = (apiResponse) => {
    if (
      !apiResponse.success ||
      !apiResponse.data ||
      apiResponse.data.length === 0
    ) {
      return [];
    }

    const rawData = apiResponse.data[0].data;
    const extractedYears = rawData.map((item) => item.Year); // Extract years
    setYears(extractedYears);

    const metrics = Object.keys(rawData[0]).filter((key) => key !== 'Year'); // Exclude "Year"

    // Convert data into row-wise format
    return metrics.map((metric) => [
      metric.replace(' (%)', ''), // Clean metric name
      ...rawData.map((yearData) => {
        const value = yearData[metric];
        return value === '-' ? '-' : `${parseFloat(value).toFixed(2)}`; // Format as needed
      }),
    ]);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetch(`/api/getSheetData?sheetName=Financials`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Raw API Response:', data);
        const transformedData = transformFinancialData(data);
        setFinancialData(transformedData);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="max-w-5xl my-5 mt-10 bg-white rounded-lg">
      <h2 className="text-xl font-bold  mb-6 text-black">Financials (In Cr)</h2>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-300 mb-4">
        {['income', 'balance', 'cash'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === tab
                ? 'text-green-500 border-b-4 border-green-500'
                : 'text-gray-500'
            }`}
          >
            {tab === 'income'
              ? 'Income Statement'
              : tab === 'balance'
              ? 'Balance Sheet'
              : 'Cash Flow'}
          </button>
        ))}
      </div>

      {/* Financial Table */}
      {financialData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            {/* Table Header */}
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Metric</th>
                {years.map((year, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 p-3 text-center"
                  >
                    {year}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {financialData.map((row, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`border border-gray-300 p-3 text-center ${
                        colIndex === 0
                          ? 'text-left font-semibold text-gray-800'
                          : 'text-gray-700'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default Financials;
