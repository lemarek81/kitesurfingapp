import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import './SchoolList.css'

function SchoolList() {
  const [instructors, setInstructors] =  useState([]);


  const KiteSurf = firebase.firestore().collection("KitesSurfAppSchool");
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
  <div className='SchoolComponentCard'>
  {instructors.map((item) => (
    <div 
    className='SchoolComponentCardDetail'
    key={item.licencenumber}>
    <h2>{item.name}</h2>
    <img className='instructorImg' src='../images/kiteshoolexample1.jpg' alt='school'></img> 
    <span className='licensenumber'>{item.licencenumber}</span>
    <span className='location'>{item.location}</span>
    {/* <span className='phone'>{item.phone}</span>
    <span className='website'>{item.website}</span> */}
    <a href='tel:{item.phone}' class='phoneStyle'>{item.phone}</a>
    <a href={item.website} className='website'>{item.website}</a>
    </div>
  ))}
  </div>
);
}

export default SchoolList;
