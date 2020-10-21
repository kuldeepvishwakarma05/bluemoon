import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <h1>Amazing Memorable Weddings</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
           <i class="fa fa-whatsapp" aria-hidden="true" /> +91 7073473292
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;