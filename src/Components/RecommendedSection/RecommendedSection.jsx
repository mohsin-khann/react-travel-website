import React from 'react';
import './RecommendedSection.css';
import Container from 'react-bootstrap/Container';
import GreenBtn from '../GreenBtn/GreenBtn';

function RecommendedSection({ itemRecommendedTitle }) {
  return (
    <div className='recommended-section'>
      <Container className='position-relative py-5 rounded'>
        <div className='bg-shape position-absolute'></div>

        <div className='row align-items-center'>
          <div className='col-lg-7 z-2 text-start text-light'>
            <h3 className='text-uppercase mb-3'>{itemRecommendedTitle}</h3>
            <p className='mb-4'>
              Based on what travellers are booking right now, these destinations are offering the best mix of value,
              comfort and experiences.
            </p>

            <div className='d-flex flex-wrap gap-2 mb-4'>
              <span className='badge bg-dark'>Best value</span>
              <span className='badge bg-dark'>Flexible dates</span>
              <span className='badge bg-dark'>Top-rated stays</span>
              <span className='badge bg-dark'>Easy city access</span>
            </div>

            <GreenBtn btnTitle='See recommendations' btnLink='/destinations' />
          </div>

          <div className='col-lg-5 z-2 mt-4 mt-lg-0'>
            <div className='recommend-box p-4 rounded shadow'>
              <p className='mb-2 fw-semibold'>Mohsin’s picks</p>
              <ul className='mb-0'>
                <li>Barcelona — city + beach balance</li>
                <li>Dubai — luxury + adventure</li>
                <li>Bangkok — food + night markets</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RecommendedSection;
