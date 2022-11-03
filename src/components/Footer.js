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
    <footer class="page-footer" style={styles.footerStyle} >
  <div class="container">
    <div class="row text-center">
      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">
          <a href="https://github.com/johnathanmann" target="_blank" style={styles.linkStyle}><i class="fab fa-github-square fa-3x p-2"> </i></a>
          <a href="mailto:johnathan.mnn@gmail.com" target="_blank" style={styles.linkStyle}><i class="fas fa-envelope fa-3x p-2"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
