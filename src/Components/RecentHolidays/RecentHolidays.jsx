import React, { useState } from 'react';
import './RecentHolidays.css';
import Container from 'react-bootstrap/Container';
import RecentHolidaysItems from '../../Assets/RecentHolidaysItems';
import RecentHolidayCard from './RecentHolidayCard';

function RecentHolidays() {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <div className='recent-holidays my-4 my-sm-5'>
      <Container>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h2 className='text-uppercase'>
            Recent <span className='text-green'>Trips</span>
          </h2>

          {visibleCount < RecentHolidaysItems.length && (
            <button
              className='btn btn-outline-success'
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>

        <div className='row g-4'>
          {RecentHolidaysItems.slice(0, visibleCount).map((item) => (
            <RecentHolidayCard
              key={item.id}
              itemTitle={item.itemTitle}
              itemDescription={item.itemDescription}
              itemNights={item.itemNights}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default RecentHolidays;
