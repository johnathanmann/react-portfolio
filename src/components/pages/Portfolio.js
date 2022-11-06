import React from 'react';
import '../../styles/Portfolio.css';
import PortfolioCard from '../PortfolioCard';
import Header from '../Header';
import projects from '../../assets/projects.json'
import seared from '../../assets/seared.png'
import weather from '../../assets/weather.png'
import workout from '../../assets/workout.png'
import planner from '../../assets/planner.png'
import password from '../../assets/password.png'
import quiz from '../../assets/quiz.png'

export default function Portfolio() {
  return(
    <div className="containerr">
    <Header title={"Portfolio"}/>
    <div className='text-center'>
    <PortfolioCard
      name={projects[0].name}
      img={seared}
      link={projects[0].link}
    />
    <PortfolioCard
      name={projects[1].name}
      img={weather}
      link={projects[1].link}
    />
    <PortfolioCard
      name={projects[2].name}
      img={workout}
      link={projects[2].link}
    />
    <PortfolioCard
      name={projects[3].name}
      img={planner}
      link={projects[3].link}
    />
    <PortfolioCard
      name={projects[4].name}
      img={password}
      link={projects[4].link}
    />
    <PortfolioCard
      name={projects[5].name}
      img={quiz}
      link={projects[5].link}
    /></div>
    </div>
  )
}
