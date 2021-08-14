import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Explore from '../Explore/Explore'
import Header from '../Header/Header/Header'
import HeroSection from '../Header/HeroSection/HeroSection'

export default function Home() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <AboutUs/>
            <Explore/>
        </div>
    )
}
