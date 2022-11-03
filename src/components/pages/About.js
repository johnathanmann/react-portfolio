import React from 'react';

const styles = {
  header: {
    padding: '25px 0px 5px 0px',
    color: '#d5311f',
    borderBottom: '5px solid #d5311f',
    margin: '0px 20px 25px 20px'
  },
  p: {
    padding: '0px 25px 25px 25px',
    fontSize: 'large',
  }
}

export default function About() {
  return (
    <div>
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.p}>I am a barista by day and a full stack developer by night. I've been taking classes and self teaching about webdev since I was seventeen. I want to tell stories and share information through my sites. Coming up on the end of my certification program I am looking to make sites of all types and continue to gain experience.</p>
    </div>
  );
}
