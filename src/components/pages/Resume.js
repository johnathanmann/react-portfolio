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
          <li className='display'>HMTL</li>
          <li className='display'>CSS</li>
          <li className='display'>Javascript</li>
          <li className='display'>Bootstrap 4/5</li>
        </ul>
      </div>
      <h2>Back-End Technologies</h2>
      <div id='list'>
        <ul>
          <li className='display'>Node</li>
          <li className='display'>API's</li>
          <li className='display'>MYSQL</li>
          <li className='display'>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
