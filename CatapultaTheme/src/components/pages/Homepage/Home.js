import React from 'react';
import HeroSection from '../../HeroSection';
import HeaderBg  from '../../HeaderBg';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />
         <HeaderBg />
         <HeroSection {...homeObjTwo} />
         <HeroSection {...homeObjThree} />
         <HeroSection {...homeObjFour} /> 
         <HeroSection {...homeObjFive} />  
        </>
    )
}

export default Home