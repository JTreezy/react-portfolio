import React from 'react';
import Button from '../Button';


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
    <div className="project">
      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={allImages[`${image}`]} alt={`${name} project screenshot`} />
      <Button 
        classNames="project__link button__link"
        isLink={true}
        newTab={true}
        text="View Deployed Application"
        link={link}
      />
    </div>
  );
};

export default Project;