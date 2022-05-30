import React from 'react';

const Button = ({ isLink, newTab, link, text, onClick, type = "button" }) => {
  const target = newTab !== false ? 'blank' : '';

  if (isLink) {
    return (
      <a
        href={link}
        target={target}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;