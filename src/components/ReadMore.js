'use client';
import { useState } from 'react';

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-3xl text-gray-500">
      <p className="text-gray-500 text-md">
        Chennai Super Kings (CSK) is one of the most iconic and successful
        franchises in the Indian Premier League (IPL). With a loyal fanbase,
        consistent high performance, and powerful leadership, CSK has
        established itself as a dominant force in the IPL. Along with its
        massive fan following, CSK has also become a highly lucrative brand,
        attracting the interest of investors in the unlisted share market.
      </p>

      {isExpanded && (
        <div className="mt-4 text-gray-500">
          <p>
            In this comprehensive guide, we will provide insights into Chennai
            Super Kings unlisted shares, including the latest Chennai Super
            Kings share price, how to buy and sell these unlisted shares, and
            why investing in CSK unlisted shares can be a great financial
            opportunity.
          </p>

          <h2 className="text-xl font-semibold mt-4">CSK Overview</h2>
          <ul className="list-disc list-inside">
            <li>Founded: 2008</li>
            <li>IPL Titles: 4 (2010, 2011, 2018, 2021)</li>
            <li>Owner: Chennai Super Kings Cricket Ltd.</li>
            <li>Home Ground: M. A. Chidambaram Stadium (Chennai)</li>
            <li>Brand Value: Over ₹700 Crores</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">
            Why Invest in CSK Unlisted Shares?
          </h2>
          <ul className="list-disc list-inside">
            <li>Strong Brand and Fan Loyalty</li>
            <li>Consistent Performance</li>
            <li>Revenue Growth from Sponsorships and Media Rights</li>
            <li>Future Growth Potential in IPL</li>
            <li>Portfolio Diversification</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">
            Latest Chennai Super Kings Share Price
          </h2>
          <p>
            As of the most recent updates, CSK unlisted share price has been
            valued in the range of ₹1,500 to ₹2,500 per share, depending on
            market conditions.
          </p>

          <h2 className="text-xl font-semibold mt-4">
            How to Buy CSK Unlisted Shares?
          </h2>
          <ol className="list-decimal list-inside">
            <li>Register on a Trusted Platform</li>
            <li>Check for Available Listings</li>
            <li>Negotiate the Price</li>
            <li>Complete the Transaction Securely</li>
          </ol>

          <h2 className="text-xl font-semibold mt-4">
            How to Sell CSK Unlisted Shares?
          </h2>
          <ol className="list-decimal list-inside">
            <li>List Your Shares on an Unlisted Share Trading Platform</li>
            <li>Set a Competitive Selling Price</li>
            <li>Finalize the Sale through Secure Payment & Transfer</li>
          </ol>
        </div>
      )}

      <button
        onClick={toggleReadMore}
        className="mt-8 border border-gray-200 font-semibold min-w-max custom text-gray-400 p-2 rounded-full hover:bg-green-500 hover:text-white"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMore;
