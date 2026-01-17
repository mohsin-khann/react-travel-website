import React, { useState } from 'react';
import './FavouritesSection.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function FavouritesSection() {
  const [active, setActive] = useState(null);

  const categories = [
    { name: 'Spa', className: 'spa-div' },
    { name: 'Pool', className: 'pool-div' },
    { name: 'Pet Friendly', className: 'pet-friendly-div' },
    { name: 'All Inclusive', className: 'all-inclusive-div' }
  ];

  const data = {
    Spa: [
      { title: 'Luxury Spa Retreat', location: 'Bali, Indonesia' },
      { title: 'Mountain Spa Resort', location: 'Switzerland' }
    ],
    Pool: [
      { title: 'Infinity Pool Hotel', location: 'Dubai' },
      { title: 'Rooftop Pool Stay', location: 'Barcelona' }
    ],
    'Pet Friendly': [
      { title: 'Pet Friendly Cottage', location: 'London' },
      { title: 'Dog Friendly Beach Stay', location: 'Portugal' }
    ],
    'All Inclusive': [
      { title: 'All Inclusive Resort', location: 'Maldives' },
      { title: 'Family Resort Package', location: 'Turkey' }
    ]
  };

  return (
    <div className='favourites-section my-5'>
      <Container>
        <h2 className='text-uppercase mb-4'>
          Choose Your <span className='text-green'>Travel Style</span>
        </h2>

        {/* Top image cards */}
        <div className='row g-4 mb-4'>
          {categories.map((item) => (
            <div key={item.name} className='col-sm-6 col-lg-3'>
              <div
                onClick={() => setActive(item.name)}
                className={`${item.className} fav-card img-hover d-flex align-items-end justify-content-center rounded 
                  ${active === item.name ? 'active' : ''}`}
              >
                <h4 className='text-light text-uppercase mb-4 h2'>
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        {active && (
          <>
            <h5 className='mb-3'>
              Results for: <strong>{active}</strong>
            </h5>

            <div className='row g-4'>
              {data[active].map((item, index) => (
                <div key={index} className='col-md-6 col-lg-4'>
                  <Card className='shadow h-100'>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.location}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default FavouritesSection;
