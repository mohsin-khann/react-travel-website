import React from 'react';
import Card from 'react-bootstrap/Card';

function LastHolidayCard({ itemImage, itemTitle, itemDescription }) {
  return (
    <div className='col-lg-4'>
      <Card className='shadow h-100 overflow-hidden'>
        <Card.Img
          className='img-hover'
          variant='top'
          src={itemImage}
          alt={itemTitle}
        />

        <Card.Body className='p-4'>
          <Card.Title className='text-start text-uppercase'>
            {itemTitle}
          </Card.Title>

          <Card.Text className='text-start'>
            {itemDescription}
          </Card.Text>

          <a href='/' className='text-green text-capitalize fw-semibold'>
            Book now
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LastHolidayCard;
