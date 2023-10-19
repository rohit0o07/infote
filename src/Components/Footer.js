import React from 'react'
import lastImage from '../Components/images/Hcc352a8fada74e9e95f571e1e9ca606dC-removebg-preview.png';
import '../App.css';
import { Button } from '@mui/material';
import { Facebook, Instagram, Twitter,Reddit } from '@mui/icons-material';

function Footer() {
  return (
    <div className='Footer-main'>
    <div className="Footer">
      <img src={lastImage} alt="logo" width={100} />
      </div>
      <div className="footer-info">
        <h3>Information</h3>
        <br />
        <p>
          Sanjo infotech Services excels in
          <br />
          optimizing businesses through <br />
          innovative digital strategies,
          <br />
          specializing in digital marketing and IT
          <br />
          solutions tailored to your unique
          <br />
          needs and goals.
        </p>
      </div>
      <div className="footer-contact">
        <h3>Contact </h3>
        <br />
        <p>
          Pochamma temple Rd,
          <br />
          B.N Reddy Nagar,Hyderabad,
          <br />
          Telangana 500070
          <br /> +91 9951111167,8977011167 <br />
          info@Sanjoinfotech.com
        </p>
        <h3>Follow us</h3>
        <div className='footer-icon'>
        <li><Twitter/></li>
        <li><Reddit/></li>
        <li><Instagram/></li>
        <li><Facebook/></li>
        </div>
      </div>
      <div className="footer-reach">
        <h3>Reach Us</h3>
        <div class="form-container">
          <form class="form">
            <div class="form-group1">
              <label for="textarea">Name</label>
              <input type="text" id="text" name="email" required="" />
              <label for="contact">Email</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
              <label for="textarea">Company</label>
              <input type="text" id="text" name="email" required="" />
              <label for="contact">Contact no</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <Button variant="contained" disableElevation>
            Reach out
          </Button>
          </form>
        </div>
      </div>
    
    
    </div>
  );
}

export default Footer