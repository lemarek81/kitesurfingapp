import React from 'react'
import './InstructorList.css'
import InstructorComponent from './InstructorComponent';

export default function InstructorList() {


    
    return (
        <div className='InstructorListContainter'>
            <h1> 
                Instructors
            </h1>
            <div className='InstructorListWrapper'>
            <InstructorComponent />
            </div>
        </div>
    )
}

