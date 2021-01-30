import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import './InstructorComponent.css'

function InstructorComponent() {
  const [instructors, setInstructors] =  useState([]);


  const KiteSurf = firebase.firestore().collection("KiteSufrApp");
  console.log(KiteSurf);

  function getSchools() {
    KiteSurf.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setInstructors(items)
      });
    }
    
    useEffect(() => {
      getSchools();
    }, []);


return (
  <div className='InstructorComponentCard'>
  {instructors.map((item) => (
    <div 
    className='InstructorComponentCardDetail'
    key={item.licencenumber}>
    <h2>{item.name}</h2>
    <img className='instructorImg' src='../images/facexample.jpg' alt='instructor'></img> 
    <span className='licensenumber'>{item.licencenumber}</span>
    <span className='studnetsnumber'>{item.assosiatestudents}</span>
    <span className='studnetsnumber'>{item.assosiatestudnets}</span>
    <span className='level'>{item.level}</span>
    <span className='rating'>{item.rating}</span>
    <span className='schoolname'>{item.schoolname}</span>
    </div>
  ))}
  </div>
);
}

export default InstructorComponent;
