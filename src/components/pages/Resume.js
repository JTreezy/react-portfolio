import React from 'react';
import resumePDF from '../assets/jtresume.pdf';
import Button from '../Button';

const Resume = () => (
  <section className="resume">
    <h2>Experience</h2>
    <p>Coding wise, I have been doing self-study courses using various educational sources, and am currently taking a coding bootcamp at the University of Washington.</p>
    
    <div>
      <Button
        isLink={true}
        target={false}
        text="Download my CV (PDF)"
        link={resumePDF}
      />
      <Button
        isLink={true}
        target={true}
        text="Check out my GitHub"
        link="https://github.com/jtreezy/"
      />
      <Button
        isLink={true}
        target={true}
        text="View my profile on LinkedIn"
        link="https://www.linkedin.com/in/jonathan-tran-3082ba109/"
      />
    </div>
  </section>
);

export default Resume;