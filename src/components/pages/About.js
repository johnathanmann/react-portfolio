import React from 'react';
import Header from '../Header';

const styles = {
  p: {
    padding: '0px 25px 25px 25px',
    fontSize: 'large',
  }
}

export default function About() {
  return (
    <div>
      <Header title={"About Me"}/>
      <p style={styles.p}>I am a barista by day and a full stack developer by night. I've been taking classes and self teaching about webdev since I was seventeen. I want to tell stories and share information through my sites. Coming up on the end of my certification program I am looking to make sites of all types and continue to gain experience.</p>
    </div>
  );
}
