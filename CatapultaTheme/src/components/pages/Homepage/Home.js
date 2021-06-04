import React from 'react';
import HeroSection from '../../HeroSection';
import HeaderBg  from '../../HeaderBg';
import {homeObjOne, homeObjThree, homeObjFour, homeObjFive } from './Data';
import {webDev } from './DataOne';
import SectionOne from '../../SectionOne';

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />
         <HeaderBg />
         <SectionOne {...webDev} />
         <HeroSection {...homeObjThree} />
         <HeroSection {...homeObjFour} /> 
         <HeroSection {...homeObjFive} />  
        </>
    )
}

export default Home