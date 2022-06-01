import React from 'react';
import Button from '../Button';
import './project.scss'


const Project = ({ project }) => {
  const {
    name,
    desc,
    image,
    link,
  } = project;

  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const allImages = importAll(require.context('../assets/projectImages', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="project is-mobile">
      <div className='card-container'>
        <h2 className='project-title'>{name}</h2>
        <p className='project-description'>{desc}</p>
        <img className='projectImage' src={allImages[`${image}`]} alt={`${name} project screenshot`} />
        <Button 
          className="project-button"
          isLink={true}
          newTab={true}
          text="View Deployed Application"
          link={link}
        />
      </div>
    </div>
  );
};

export default Project;