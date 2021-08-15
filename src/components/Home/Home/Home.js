import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import BookDirect from '../BookDirect/BookDirect'
import Explore from '../Explore/Explore'
import ExplorePlace from '../Explore/ExplorePlace'
import ExplorePlace2 from '../Explore/ExplorePlace2'
import Transportation from '../Explore/Transportation'
import Footer from '../Footer/Footer'
import Header from '../Header/Header/Header'
import HeroSection from '../Header/HeroSection/HeroSection'
import SearchBar from '../SearchBar/SearchBar'

export default function Home() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            {/* <SearchBar/> */}
            <AboutUs/>
            <Explore/>
            <ExplorePlace/>
            <Transportation/>
            <ExplorePlace2/>
            <BookDirect/>
            <Footer/>
        </div>
    )
}
