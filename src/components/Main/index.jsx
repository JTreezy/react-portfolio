import React from 'react';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import ContactForm from '../pages/Contact';

const Main = ({ selectedNavItem }) => (
  <div className="site-main flex-grow">
    {selectedNavItem === 'About' && (
      <About/>
    )}
    {selectedNavItem === 'Portfolio' && (
      <Portfolio/>
    )}
    {selectedNavItem === 'Resume' && (
      <Resume/>
    )}
    {selectedNavItem === 'Contact' && (
      <ContactForm/>
    )}
  </div>
);

export default Main;