import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import dev from "../images/dev.jpg"

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Now you can contact us 
        </p>
        <p className='footer-subscription-text'>
         <i class="fa fa-phone"/> +91 7073473292
        </p>
        <p className='footer-subscription-text'>
        <i class="fa fa-whatsapp" aria-hidden="true" /> +91 7073473292
        </p>
        <div className='input-areas'>
         
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Bluemoon
              <i class='fab fa-typo3' />
            </Link>
   
          </div>
          <small class='website-rights '>
              
             Developer Git-Kuldeep © 2020</small>
                      
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;