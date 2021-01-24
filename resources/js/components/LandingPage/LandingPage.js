import React from 'react';
import '../../../css/LandingPage.css';
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Snackbar
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

function Alert(props) {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LandingPage = () => {
   const [alert, setAlert] = React.useState(true);

   return (
      <div className="BGImage">
         <div className="header">
            <p style={{ fontFamily: 'Shelly', fontSize: 80, padding: 0, margin: 0 }}>New Era University</p>
            <br />
            <p>Media Learning Center Reservation System</p>
         </div>
         {/* <Snackbar open={alert} onClose={() => setAlert(false)}>
            <Alert severity="success" onClose={() => setAlert(false)}>
               {navigator.appVersion}
            </Alert>
         </Snackbar> */}
      </div>
   );
}

export default LandingPage;