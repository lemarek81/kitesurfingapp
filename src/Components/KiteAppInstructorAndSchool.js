import React from 'react'

import './KiteAppInstructorAndSchool.css'

export default function KiteAppInstructorAndSchool() {
    return (
        <div className='kiteSliderContainer'>
            <div className='kiteSliderContainerWrapper'>
                    <div className='kiteLeftSlider'> 
                        <h2>Fin your instructor</h2>
                        <div> Instructor Component</div>
                        <button>Search</button>
                    </div>
                    <div className='kiteRightSlider'>
                        <h2>Fin your school</h2>
                        <div> SchoolComponent</div>
                        <button>Search</button>
                    </div>
            </div>
        </div>
    )
}
