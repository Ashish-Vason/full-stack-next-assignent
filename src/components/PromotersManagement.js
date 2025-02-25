'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const PromotersManagement = () => {
  const [promoters, setPromoters] = useState([]);

  useEffect(() => {
    fetch(`/api/getSheetData?sheetName=Management`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Raw API Response:', data);
        if (data.success && data.data.length > 0) {
          setPromoters(data.data[0].data);
        }
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="max-w-6xl my-10 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-black">
        Promoters & Management
      </h2>

      {/* Table for Promoters */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-center">
                Designation
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Experience
              </th>
              <th className="border border-gray-300 p-3 text-center">
                LinkedIn
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {promoters.length > 0 ? (
              promoters.map((person, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-gray-800">
                    {person['Name']}
                  </td>
                  <td className="border border-gray-300 p-3 text-center text-gray-700">
                    {person['Designation']}
                  </td>
                  <td className="border border-gray-300 p-3 text-center text-gray-700">
                    {person['Experience (yrs)']}
                  </td>
                  <td className="border border-gray-300 p-3 text-center mx-20">
                    {person['LinkedIn Profile'] ? (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-center"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border border-gray-300 p-3 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotersManagement;
