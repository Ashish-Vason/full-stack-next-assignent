'use client';
import Image from 'next/image';
import React from 'react';
import LineChart from './LineChart';
import BuySellModal from './BuySellModal';

const Card = () => {
  const sampleData = [
    { label: 'Oct', value: 218 },
    { label: 'Nov', value: 210 },
    { label: 'Dec', value: 196 },
    { label: 'Jan', value: 188 },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full gap-6 items-center md:items-start justify-between p-4">
      {/* Left Section - CSK Share Details */}
      <div className="w-full md:w-[60%] bg-white p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            alt="CSK Logo"
            src="https://cdn.prod.website-files.com/66dad9c594a45d74898a5fc6/66e9a5d287ad4d164a1788ae_70521baac89be4d4cb2f223bbf67c974%20(1).avif"
            width={100}
            height={100}
            className=""
          />
          <h2 className="text-xl font-bold text-center md:text-left">
            Chennai Super Kings (CSK) Share Price
          </h2>
        </div>

        {/* Share Price Info */}
        <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-lg font-semibold">
          <div className="text-black">₹ 188</div>
          <div className="text-red-600">-30</div>
          <div className="text-red-600">-13.8%</div>
          <div className="text-gray-500">4M</div>
        </div>

        {/* Chart */}
        <div className="mt-5">
          <LineChart dataPoints={sampleData} />
        </div>
      </div>

      {/* Right Section - Buy/Sell Modal */}
      <div className="w-full md:w-[35%] bg-white rounded-lg p-4">
        <BuySellModal />
      </div>
    </div>
  );
};

export default Card;
