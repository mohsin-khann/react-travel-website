import React from 'react';
import './HeroSection.css';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className='hero-section d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          
          {/* LEFT CONTENT */}
          <div className='col-lg-6 text-start text-light'>
            <span className='badge bg-success mb-3'>Travel with Mohsin</span>

            <h1 className='display-4 fw-bold mt-3'>
              Plan trips that feel made just for you
            </h1>

            <p className='mt-3 mb-4'>
              Discover destinations, compare experiences, and build journeys based on how you actually like to travel.
            </p>

            <div className='d-flex gap-3'>
              <GreenBtn btnTitle='Explore Trips' btnLink='/destinations' />
              <GreenBtn btnTitle='City Breaks' btnLink='/city-breaks' />
            </div>
          </div>

          {/* RIGHT CONTENT (visual block instead of empty column) */}
          <div className='col-lg-6 d-none d-lg-flex align-items-center justify-content-center'>
            <div className='hero-glass-card p-4 rounded shadow text-light'>
              <h5 className='mb-2'>Trending right now</h5>
              <p className='mb-1'>🇹🇭 Bangkok → from £299</p>
              <p className='mb-1'>🇬🇷 Santorini → from £399</p>
              <p className='mb-1'>🇦🇪 Dubai → from £349</p>
              <p className='mb-0'>🇪🇸 Barcelona → from £199</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
