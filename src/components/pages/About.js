import React from 'react';
import me from '../assets/me.jpg';
import './styles/about.scss';

export default function About() {
  return (
    <>
      <div className='about' >
        <div className='bio'>
          <img className='about-img' src={me} alt=""/>
          <p className='about-p'>
          <span className='about-span'>H</span>iya, person viewing this page, my name is Jonathan Tran, and I prefer to go by "JT" only because it
          is shorter in syllables than my first name. This is my website that I will be documenting my journey
          throughout this coding bootcamp, and potentially the rest of my coding career. I want to be able to
          develop my coding skills to help the world. I will do my best to update this as much as I can. Thank
          you for your patience, and make sure to drink water!!
          </p>
        </div>
      </div>
    </>
  );
}