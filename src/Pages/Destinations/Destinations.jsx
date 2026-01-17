import React from 'react';
import './Destinations.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import EuropeDestinationsSection from '../../Components/DestinationsSection/EuropeDestinationsSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import AsiaDestinationsSection from '../../Components/DestinationsSection/AsiaDestinationsSection';
import NeedInspirationsSection from '../../Components/NeedInspiration/NeedInspirationSection';
import AfricaDestinationsSection from '../../Components/DestinationsSection/AfricaDestinationsSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Destinations() {
  return (
    <div className='destinations-page'>
      <SecondHeroSection secondHeroTitle='Destinations Worth Exploring' />

      <EuropeDestinationsSection />

      <HolidayPlanSection itemHolidayPlanTitle='Plan Your Perfect Getaway' />

      <AsiaDestinationsSection />

      <NeedInspirationsSection />

      <AfricaDestinationsSection />

      <div className='mt-4 mt-sm-5'>
        <RecommendedSection itemRecommendedTitle='Handpicked for You' />
      </div>
    </div>
  );
}

export default Destinations;
