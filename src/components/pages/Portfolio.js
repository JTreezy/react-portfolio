import React from 'react';
import booklastic from '../assets/projectImages/booklastic.png'
import weather from '../assets/projectImages/weather.png'
import scheduler from '../assets/projectImages/scheduler.png'
import dinnerPlans from '../assets/projectImages/dinner-plans.png'

export default function Portfolio() {
  return (
    <>
      <div className='work' >

        <aside  >
          <h3>My Work</h3>
          <div className="line "></div>

        </aside>
       

          <div>
            <div className="container">
              <a href="https://github.com/JTreezy/booklastic-blog-place" target="_blank">
                <img src={booklastic} alt="booklastic" /></a>
              <div className="text-block">
                <a className="btn" href="https://fathomless-bastion-58602.herokuapp.com/"
                  target="_blank">
                  <h6>Booklastic Blog Place</h6>
                  <p>A book blog that utilizes the MVC paradigm with capabilites of in-real-time chat functionality</p>
                </a>
              </div>
            </div>
            <div className="container">
              <a href="https://github.com/JTreezy/weatherdashboard" target="_blank">
                <img className="small-image" src={weather} alt="Weather-Dashboard"/></a>
              <div className="text-block">
                <a className="btn" href="https://jtreezy.github.io/weatherdashboard/"
                  target="_blank">
                  <h6 className='textfont'>Weather Dashboard</h6>
                  <p className='textfont'>A weather application that can give a weekly forecast of any city inputted and saves the cities to the searches, using HTML/CSS/Javascript</p>
                </a>
              </div>
            </div>
            <div className="container">
              <a href="https://github.com/JTreezy/workdayscheduler" target="_blank">
                <img className="small-image " src={scheduler} alt="Day Planner" /></a>
              <div className="text-block">
                <a className="btn" href="https://jtreezy.github.io/workdayscheduler/"
                  target="_blank">
                  <h6 className='textfont'>Daily Work Scheduler</h6>
                  <p className='textfont'>A day scheduler that uses moment.js/HTML/CSS/Javascript</p>
                </a>
              </div>
            </div>
            <div className="container">
              <a href="https://github.com/JTreezy/project-1-official" target="_blank">
                <img className="small-image " src={dinnerPlans} alt="WikiLeaks"/></a>
              <div className="text-block">
                <a className="btn"  href="https://jtreezy.github.io/project-1-official/"
                  target="_blank">
                  <h6 className='textfont'>Dinner Plan Generator</h6>
                  <p className='textfont'>API-linked food randomizer application using HTML/CSS/Javascript/Bulma/JQuery/Moment</p>
                </a>
              </div>
            </div>
          </div>

      </div>
    </>
  );
}