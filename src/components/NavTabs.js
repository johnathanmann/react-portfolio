import React from 'react';
import '../styles/Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
      <a className="navbar-brand"><h1 className="display-4">Johnathan Mann</h1></a>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="ms-auto d-block">
        <ul>
          <li>
          <Nav.Item>
          <Nav.Link className="nav-link active" href="#about"onClick={() => handlePageChange('About')}>
           About
          </Nav.Link>
        </Nav.Item>
        </li>
          <li>
          <Nav.Item>
           <Nav.Link className="nav-link active" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
           Portfolio
          </Nav.Link>
        </Nav.Item>
          </li>
          <li>
          <Nav.Item>
           <Nav.Link className="nav-link active" href="#resume" onClick={() => handlePageChange('Resume')}>
           Resume
          </Nav.Link>
        </Nav.Item>
          </li>
          <li>
          <Nav.Item>
           <Nav.Link className="nav-link active" href="#contact" onClick={() => handlePageChange('Contact')}>
           Contact
          </Nav.Link>
        </Nav.Item>
          </li>
        </ul>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavTabs;
