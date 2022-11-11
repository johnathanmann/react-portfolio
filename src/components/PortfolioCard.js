import React from 'react';
import '../styles/Portfolio.css';

function PortfolioCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <div className="card-body text-center">
      <a href={props.link} target="_blank"><h3 className="card-title">{props.name}</h3></a><a href={props.repo} target="_blank"><i className="fab fa-github-square fa-2x p-2"> </i></a>
      </div>
    </div>
  );
};

export default PortfolioCard;
