import React from 'react';
import './HolidayPlanSection.css';
import Container from 'react-bootstrap/Container';
import GreenBtn from '../GreenBtn/GreenBtn';

function HolidayPlanSection(props) {
  return (
    <div className='holiday-plan-section py-5'>
      <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
        <h3 className='text-start text-light text-uppercase'>
          {props.itemHolidayPlanTitle}
        </h3>

        <p className='text-start text-light'>
          Plan ahead with flexible options, great-value packages, and destinations designed for unforgettable experiences.
        </p>

        <GreenBtn btnTitle='Check Summer Deals' btnLink='/holidays' />
      </Container>
    </div>
  );
}

export default HolidayPlanSection;
