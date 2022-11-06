import React from 'react';

const styles= {
    header: {
        padding: '25px 0px 5px 0px',
        color: '#d5311f',
        borderBottom: '5px solid #d5311f',
        margin: '0px 20px 25px 20px',
      }
}

function Header(props) {
  return (
    <h1 style={styles.header} className='text-left'>{props.title}</h1>
  );
};

export default Header;
