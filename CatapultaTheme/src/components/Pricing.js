import React from 'react'
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='pricing__section'>
              <div className='pricing__wrapper'>
                <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Basic</h3>
                                <h4>$13.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>Hosting Service per 1 Year</li>
                                    <li>Free SSL</li>
                                    <li>cPanel account</li>
                                    <li>CloudFlare CDN</li>
                                    <li>5 GB SSD Disk Space</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                        </div>
                        <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Recommended</h3>
                                <h4>$15.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                <li>Hosting Service (First Year)</li>
                                <li>Free Domain (First Year)</li>
                                <li>Free SSL</li>
                                <li>cPanel Admin</li>
                                <li>CloudFlare CDN</li>
                                </ul>
                                <Button buttonSize='btn--wide--two' buttonColor='white'>
                                    Choose Plan
                                </Button>
                            </div>
                         </div>
                         <div className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Plus</h3>
                                <h4>$149.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                <li>Hosting Service (First Year)</li>
                                <li>Free Domain (First Year)</li>
                                <li>Wordpress Website</li>
                                <li>Free SSL</li>
                                <li>cPanel Admin</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Choose Plan
                                </Button>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
      </IconContext.Provider>
    );
}

export default Pricing;
