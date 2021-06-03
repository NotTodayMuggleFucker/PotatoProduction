import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import logo from '../../../assets/images/logo_catapulta.svg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Contact Us
        </p>
        <p className='footer-subscription-text'>
        We’re available for remote projects around the world.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hosting Plan</h2>
            <Link to='/sign-up'>Coming Soon!</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div className='footer-link-items'>
            <h2>Projects</h2>
            <Link to='/sign-up'>Coming Soon!</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <h2>Style Guide</h2>
            <Link to='/'>Coming Soon!</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div className='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/'>Coming Soon!</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        <Link> <img src={logo} className="logo" alt="logo"/></Link>
        </p>
        <p className='website-rights'>
        Catapulta © 2020
        </p>
      </section>
        {/*<div className='social-media-wrap'>*/}
         {/* <div className='footer-logo'>
           <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              CATAPULTA
            </Link>
          </div>*/}
         {/* <medium className='website-rights'></medium>*/}
          {/*<div className='social-icons'>
           <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>*/}
        {/*</div>*/}
      </section>
    </div>
  );
}

export default Footer;