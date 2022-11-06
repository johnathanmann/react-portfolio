import React from 'react';
import '../styles/Footer.css';

const styles= {
  footerStyle: {
    color: '#d5311f'
},

  linkStyle: {
    textDecoration: 'none',
    color: '#d5311f'
  }
}

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="page-footer" style={styles.footerStyle} >
  <div className="container">
    <div className="row text-center">
      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center">
          <a href="https://github.com/johnathanmann" target="_blank" style={styles.linkStyle}><i className="fab fa-github-square fa-3x p-2"> </i></a>
          <a href="https://www.linkedin.com/in/johnathan-mann-03548b240/" target="_blank" style={styles.linkStyle}><i class="fa-brands fa-linkedin"></i></a>
          <a href="mailto:johnathan.mnn@gmail.com" target="_blank" style={styles.linkStyle}><i className="fas fa-envelope fa-3x p-2"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
