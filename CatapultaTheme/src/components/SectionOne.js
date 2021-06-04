import React from 'react';
import { Button } from './Button';
import './SectionOne.css';


 function SectionOne({
     lightBg,
     topLine,
     lightText,
     lightTextDesc, 
     headline, 
     description, 
     buttonLabel,
     img, 
     alt, 
     imgStart
 }) {
    return (
            <>
              <div 
               className={lightBg ? 'home__hero-section-2' : 'home__hero-section darkBg'}
               >
                 <div className='container'>
                   <div className='row home__hero-row' 
                     style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                     >
                      <div className='col'>
                          <div className='home__hero-text-wrapper'>
                              <div className='top-line'>{topLine}</div>
                              <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                              <p 
                                className={
                                  lightTextDesc
                                   ? 'home__hero-subtitle'
                                   : 'home__hero-subtitle dark'
                                  }
                                 >
                                  {description}
                                 </p>
                                 <a href='tel:+12109013018'>
                                     <Button buttonSize='btn--wide' buttonColor='pink'>
                                        {buttonLabel}
                                     </Button>
                                 </a>                      
                             </div>
                           </div>
                        <div className='col'>
                          <div className='home__hero-img-wrapper'>
                              <img src={img} alt={alt} className='home__hero-img'/>
                         </div>
                        </div>
                      </div> 
                    </div>
                 </div>
            </>
    );
}

export default SectionOne;
