import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container';

function NeedInspirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
      <div className='bg-shape position-absolute'></div>

      <Container>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6 text-center text-light z-2'>
            
            <h2 className='text-uppercase mb-3'>
              Not sure where to go next?
            </h2>

            <p className='mb-4'>
              Tell us what kind of trip you want and we’ll help you shortlist destinations that match your style, budget and timing.
            </p>

            <div className='d-flex flex-column flex-sm-row justify-content-center gap-3'>
              <a
                href='mailto:mohsin.travel@gmail.com'
                className='btn btn-success fw-semibold px-4'
              >
                Email us your idea
              </a>

              <a
                href='https://wa.me/447000000000'
                target='_blank'
                rel='noreferrer'
                className='btn btn-outline-light fw-semibold px-4'
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default NeedInspirationSection;
