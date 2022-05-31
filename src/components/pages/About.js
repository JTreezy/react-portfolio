import React from 'react';
import me from '../assets/me.jpg'

export default function About() {
  return (
    <>
      <div className='about' >
        <aside>
          <h3>About Me</h3>
        </aside>
        <div className='bio'>
          <img src={me} alt="just a picture of me"/>
          <p>
            a short bio about me 
          </p>
        </div>
      </div>

    </>
  );
}