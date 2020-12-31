import React from 'react';
import '../../../css/LandingPage.css';
import {
   AppBar,
   Toolbar,
   Typography,
   Button
} from '@material-ui/core'
import { Link } from 'react-router-dom';

const LandingPage = () => {
   return (
      <div className="LandingPageBG">
         <div className="LandingPageMainText">
            <p style={{ fontFamily: 'Shelly', fontSize: 80, padding: 0 }}>New Era University</p>
            <br />
            <small>Media Learning Center Reservation System</small>
         </div>
      </div>
   );
}

export default LandingPage;