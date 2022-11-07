import React from 'react';
import '../../styles/Contact.css';
import Header from '../Header';

export default function Contact() {
  return (
    <div className="container-fluid">
      <Header title={"Contact"}/>
      <form>
      <div className="form-group">
    <label for="name">Name</label>
    <input type="email" className="form-control"  placeholder="Your Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control"  placeholder="name@example.com"/>
  </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Message:</label>
        <textarea className="form-control"  rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-danger ms-4">Submit</button>
    </form>
    </div>
  );
}
