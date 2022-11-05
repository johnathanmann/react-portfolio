import React from 'react';
import '../../styles/Portfolio.css';
import PortfolioCard from '../PortfolioCard';
import projects from '../../assets/projects.json'

export default function Portfolio() {
  return(
    <div class="container text-center">
    <h1 id='header text-left'>Portfolio</h1>
    <PortfolioCard
      name={projects[0].name}
      img={projects[0].img}
      link={projects[0].link}
    />
    </div>
  )
}
