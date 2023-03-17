import React from 'react';
import MyNav from './components/myNav';
import Img from './components/img';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import AddSection from './components/AddSection';
import Footer from './components/footer/Footer'

const Home = () => {
    return (
        <div>
            <MyNav/>
            <Img/>
            <Hero/>
            <Logos/>
            <Features/>
            <AddSection/>
            <Footer/>
        </div>
    );
}

export default Home;
