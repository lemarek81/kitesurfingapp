import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function InstructorComponent() {
  const [KiteSufrApp, setKiteSufrApp] =  useState([]);


  const KiteSurf = firebase.firestore().collection("KiteSufrApp");
  console.log(KiteSurf);

  function getSchools() {
    KiteSurf.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      KiteSufrApp(items);
      });
    }
    
    useEffect(() => {
      getSchools();
    }, []);


return (
  <div>
  {KiteSufrApp.map((KiteSufrApps) => (
    <div key={KiteSufrApps.licencenumber}>
    <h2>{KiteSufrApps.name}</h2>
    <img className='instructorImg' src='../images/facexample.jpg' alt='instructor'></img> 
    <p>{KiteSufrApps.licencenumber}</p>
    <p>{KiteSufrApps.level}</p>
    <p>{KiteSufrApps.level}</p>
    <p>{KiteSufrApps.rating}</p>
    <p>{KiteSufrApps.schoolname}</p>
    </div>
  ))}
  </div>
);
}

export default InstructorComponent;