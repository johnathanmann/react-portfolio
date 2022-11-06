import React from 'react';
import '../../styles/Resume.css';
import Header from '../Header';

export default function Resume() {
  return (
    <div className="container-fluid">
      <Header title={"Resume"}/>
      <h2>Front-End Technologies</h2>
      <div id='list'>
        <ul>
          <li>HMTL</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap 4/5</li>
        </ul>
      </div>
      <h2>Back-End Technologies</h2>
      <div id='list'>
        <ul>
          <li>Node</li>
          <li>API's</li>
          <li>MYSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
