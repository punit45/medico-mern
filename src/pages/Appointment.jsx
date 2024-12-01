import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {

   const {docId} = useParams();
   const { doctors } = useContext(AppContext);
   const [docInfo, setDocInfo] = useState(null);

   const fetchDocInfo =  async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    console.log('docInfo found:', docInfo);  // Log the found doctor info
   setDocInfo(docInfo);
   }
   

   useEffect(() => {
    console.log('docId:', docId);  // Log docId to see if it is correct
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <div>
      {/* doctor details here */}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Appointment