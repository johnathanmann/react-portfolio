import React from 'react';
import '../styles/Portfolio.css';

function PortfolioCard(props) {
  return (
    <a href={props.link} target="_blank">
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="card-body text-center">
        <h3 className="card-title">{props.name}</h3>
      </div>
    </div>
    </a>
  );
};

export default PortfolioCard;
