import React, { useState } from 'react';
import Project from '../Project'

const Portfolio = () => {
  const [projects] = useState([
    {
      'name': 'Booklastic Blog Place',
      'desc': 'A book blog that utilizes the MVC paradigm with capabilites of in-real-time chat functionality',
      'image': 'booklastic.png',
      'link': 'https://fathomless-bastion-58602.herokuapp.com/',
    },
    {
      'name': 'Weather Dashboard',
      'desc': 'A weather application that can give a weekly forecast of any city inputted and saves the cities to the searches, using HTML/CSS/Javascript',
      'image': 'weather.png',
      'link': 'https://jtreezy.github.io/weatherdashboard/',
    },
    {
      'name': 'Daily Work Scheduler',
      'desc': 'A day scheduler that uses moment.js/HTML/CSS/Javascript',
      'image': 'scheduler.png',
      'link': 'https://jtreezy.github.io/workdayscheduler/',
    },
    {
      'name': 'Dinner Plan Generator',
      'desc': 'API-linked food randomizer application using HTML/CSS/Javascript/Bulma/JQuery/Moment',
      'image': 'dinner-plans.png',
      'link': 'https://jtreezy.github.io/project-1-official/',
    },
    {
      'name': 'Blackjack',
      'desc': 'A terminal-based card game using Python',
      'image': 'blackjack-console.png',
      'link': 'https://github.com/JTreezy/blackjack',
    },
    {
      'name': 'Password Generator',
      'desc': 'A password generator for randomized passwords between 8 characters and 128 characters, using HTML/CSS/Javascript',
      'image': 'password.png',
      'link': 'https://jtreezy.github.io/password-generator/',
    }
]);

const displayProjects = projects;

return (
  <section className='portfolio'>
  <div>
        {displayProjects && displayProjects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
  </div>
  </section>
);
}

export default Portfolio;