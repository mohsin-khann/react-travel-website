import React, { useState } from 'react';
import './SearchForm.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm() {
  const [place, setPlace] = useState('');
  const [rooms, setRooms] = useState('1');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!place || !checkIn || !checkOut) {
      alert('Please fill all fields');
      return;
    }

    alert(
      `Searching trips for:\n\nPlace: ${place}\nRooms: ${rooms}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}`
    );
  };

  return (
    <div className='position-relative'>
      <Container>
        <Form
          onSubmit={handleSubmit}
          className='search-form d-lg-flex align-items-center justify-content-center mx-auto p-4 mt-4 mt-lg-0 z-2 rounded'
        >

          <div className='col-lg-2'>
            <Form.Select value={place} onChange={(e) => setPlace(e.target.value)}>
              <option value=''>Select destination</option>
              <option value='London'>London</option>
              <option value='Dubai'>Dubai</option>
              <option value='Paris'>Paris</option>
              <option value='Bangkok'>Bangkok</option>
              <option value='Barcelona'>Barcelona</option>
            </Form.Select>
          </div>

          <div className='col-lg-2 mx-lg-3 my-2 my-lg-0'>
            <Form.Select value={rooms} onChange={(e) => setRooms(e.target.value)}>
              <option value='1'>1 room</option>
              <option value='2'>2 rooms</option>
              <option value='3'>3 rooms</option>
            </Form.Select>
          </div>

          <div className='col-lg-2'>
            <Form.Control
              type='date'
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className='col-lg-2 mx-lg-3 my-2 my-lg-0'>
            <Form.Control
              type='date'
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <Button
            className='text-capitalize fw-semibold mt-3 mt-lg-0'
            variant='dark'
            type='submit'
          >
            Search Trips
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SearchForm;
