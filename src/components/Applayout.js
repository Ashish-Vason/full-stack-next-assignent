import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Card from './Card';
import BuySellModal from './BuySellModal';
import About from './About';
import Fundamentals from './Fundamentals';
import Financials from './Financials';
import ShareholdingPattern from './ShareholdingPattern';
import PromotersManagement from './PromotersManagement';

const Applayout = () => {
  return (
    <div className="main-container">
      <div className="header-content">
        <Navbar />
        <HeroSection />
      </div>
      <div className="p-[10%]">
        <Card />
        <About />
        <Fundamentals />
        <Financials />
        <ShareholdingPattern />
        <PromotersManagement />
      </div>
      {/*

   -> Content
     -> CSK Share details
     -> Graph using chart.js
     -> Buy/sell modal
   -> About
   -> Fundamentals
   -> Finacials
   -> Shareholding pattern
   -> Promoters or Management
   -> FAQs Section
   -> Accordian
   -> Contact Us Page*/}
    </div>
  );
};

export default Applayout;
