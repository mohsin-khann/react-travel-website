import React from 'react';
import './Home.css';

import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';

function Home() {
  return (
    <div className='home-page'>

      {/* HERO */}
      <HeroSection />

      {/* SEARCH */}
      <SearchForm />

      {/* SECTION 1 - REAL PRODUCT FEEL */}
      <section className='my-5'>
        <h2 className='text-uppercase text-center mb-4'>
          Popular Right Now
        </h2>
        <RecentHolidays />
      </section>

      {/* SECTION 2 - BREAK TEMPLATE FLOW */}
      <section className='my-5'>
        <RecommendedSection itemRecommendedTitle='Trips People Are Booking Most' />
      </section>

      {/* SECTION 3 */}
      <section className='my-5'>
        <h2 className='text-uppercase text-center mb-4'>
          Last Minute Deals
        </h2>
        <LastHolidaysSection />
      </section>

      {/* SECTION 4 */}
      <section className='my-5'>
        <h2 className='text-uppercase text-center mb-4'>
          Choose Your Style
        </h2>
        <FavouritesSection />
      </section>

      {/* SECTION 5 */}
      <NeedInspirationSection />

    </div>
  );
}

export default Home;
