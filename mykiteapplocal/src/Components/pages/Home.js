import React from 'react';
import '../../App.css';
import Card from '../Card';
import KiteAppFrontSection from '../KiteAppFrontSection';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <KiteAppFrontSection />
            <Card />
            <Footer />
        </>
    );
}

export default Home;