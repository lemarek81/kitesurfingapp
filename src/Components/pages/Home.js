import React from 'react';
import '../../App.css';
// import KiteAppFrontSection from '../KiteAppFrontSection';
import KiteAppWeatherForecast from '../KiteAppWeatherForecast';
// import KiteAppInstructorAndSchool from '../KiteAppInstructorAndSchool';

function Home () {
    return (
        <>
            {/* <KiteAppFrontSection /> */}
            <KiteAppWeatherForecast />
            {/* <KiteAppInstructorAndSchool /> */}
        </>
    );
}

export default Home;