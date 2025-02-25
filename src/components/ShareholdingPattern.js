'use client';
import React, { useState, useEffect } from 'react';

const ShareholdingPattern = () => {
  const [shareholdingData, setShareholdingData] = useState([]);
  const [years, setYears] = useState([]);

  // Function to transform API data into tabular format
  const transformShareholdingData = (apiResponse) => {
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

    const shareholders = Object.keys(rawData[0]).filter(
      (key) => key !== 'Year'
    ); // Exclude "Year"

    // Convert data into row-wise format
    return shareholders.map((shareholder) => [
      shareholder.replace(' (%)', ''), // Clean shareholder name
      ...rawData.map((yearData) => {
        const value = yearData[shareholder];
        return value === '-' ? '-' : `${parseFloat(value).toFixed(2)}%`; // Format percentage
      }),
    ]);
  };

  useEffect(() => {
    fetch(`/api/getSheetData?sheetName=Shareholding%20Pattern`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Raw API Response:', data);
        const transformedData = transformShareholdingData(data);
        setShareholdingData(transformedData);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="max-w-5xl bg-white rounded-lg ">
      <h2 className="text-xl font-bold mb-6 text-black">
        Shareholding Pattern
      </h2>

      {shareholdingData.length > 0 ? (
        <div className="grid grid-cols-5 gap-4  p-4 rounded-lg border border-gray-200">
          {/* Render Headers */}
          <div className="font-bold text-gray-800 p-2 text-center">
            Shareholder
          </div>
          {years.map((year, index) => (
            <div
              key={index}
              className="font-bold text-gray-800 p-2 text-center"
            >
              {year}
            </div>
          ))}

          {/* Render Rows */}
          {shareholdingData.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`p-2 text-center ${
                    colIndex === 0
                      ? 'font-semibold text-gray-700 text-left'
                      : 'text-gray-600'
                  }`}
                >
                  {cell}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default ShareholdingPattern;
