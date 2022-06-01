import React from 'react';
import resumePDF from '../assets/jtresume.pdf';
import Button from '../Button';
import './styles/resume.scss'

const Resume = () => (
  <section className="resume">
    <h2 className="resume-title">Experience</h2>
    <p className='resume-paragraph'>Coding wise, I have been doing self-study courses using various educational sources, and am currently taking a coding bootcamp at the University of Washington.</p>
    
    <div className='resume-link-container'>
      <div className='resume-links'>
        <Button
          isLink={true}
          target={false}
          text="Download my CV (PDF)"
          link={resumePDF}
        />
        </div>
        <div className='resume-links'>
        <Button
          isLink={true}
          target={true}
          text="Check out my GitHub"
          link="https://github.com/jtreezy/"
        />
        </div>
        <div className='resume-links'>
        <Button
          isLink={true}
          target={true}
          text="View my profile on LinkedIn"
          link="https://www.linkedin.com/in/jonathan-tran-3082ba109/"
        />
      </div>
    </div>
    
  </section>
);

export default Resume;