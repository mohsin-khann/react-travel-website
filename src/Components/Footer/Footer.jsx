import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='custom-footer mt-5'>
      <div className='container py-5'>
        <div className='row text-light'>

          {/* BRAND */}
          <div className='col-md-4 mb-4 mb-md-0'>
            <h5 className='fw-bold'>Travel with Mohsin</h5>
            <p className='small mt-2'>
              A personal travel discovery project focused on helping people
              explore destinations through better inspiration and planning.
            </p>
          </div>

          {/* LINKS */}
          <div className='col-md-4 mb-4 mb-md-0'>
            <h6 className='fw-semibold mb-3'>Explore</h6>
            <ul className='list-unstyled'>
              <li><Link to='/destinations'>Destinations</Link></li>
              <li><Link to='/city-breaks'>City Breaks</Link></li>
              <li><Link to='/holidays'>Deals</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className='col-md-4'>
            <h6 className='fw-semibold mb-3'>Contact</h6>
            <p className='small mb-1'>Email: mohsin.codes1@gmail.com</p>
            <p className='small mb-1'>WhatsApp: +923118892269</p>
            <p className='small'>Location: United Kingdom</p>
          </div>

        </div>

        <div className='text-center text-light small mt-4 border-top pt-3'>
          © {new Date().getFullYear()} Travel with Mohsin. Built as a personal portfolio project.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
