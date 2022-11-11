import React from 'react';
import Header from '../Header';
import johnny from '../../assets/johnny.jpg'

const styles = {
  p: {
    padding: '0px 25px 25px 25px',
    fontSize: 'large',
  },
  img:{
    borderRadius: '15px',
    width: '100px',
    margin: '0px 25px 25px 25px',
  }
}

export default function About() {
  return (
    <div>
      <Header title={"About Me"}/>
      <img src={johnny} className="img-fluid" style={styles.img} alt="Photo of Johnathan Mann. He is a white male with short brown hair and a septum piercing wearing a gray hoodie."/>
      <p style={styles.p}>I am a barista by day and a full stack developer by night. I've been taking classes and self teaching about webdev since I was seventeen. I want to tell stories and share information through my sites. Coming up on the end of my certification program I am looking to make sites of all types and continue to gain experience.
      <br/><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br/><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}
