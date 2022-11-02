import React from 'react';
import '../styles/Navbar.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand"><h1 className="display-4">Johnathan Mann</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#about"onClick={() => handlePageChange('About')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default NavTabs;
