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
    <input type="text" className="form-control"  placeholder="Your Name" required/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control"  placeholder="name@example.com" required/>
  </div>
      <div className="form-group">
        <label for="text">Message:</label>
        <textarea className="form-control"  rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-danger ms-4">Submit</button>
    </form>
    </div>
  );
}
