import React from 'react';
import './GreenBtn.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function GreenBtn({ btnLink, btnTitle }) {
  return (
    <Button id='green-btn'>
      <Link
        to={btnLink}
        className='text-decoration-none text-light text-capitalize fw-semibold'
      >
        {btnTitle}
      </Link>
    </Button>
  );
}

export default GreenBtn;
