import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import {homeObjOne } from './Data';

function Plans() {
    return (
        <>
         <Pricing />
         <HeroSection {...homeObjOne} />
        </>
    )
}

export default Plans;