import React from 'react';
import {
   makeStyles,
   Typography
} from '@material-ui/core';

const style = makeStyles(() => ({
   center: {
      display: 'flex',
      minHeight: '70vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
   }
}));

const Contact = () => {
   const classes = style();

   return (
      <div style={{ marginTop: 100, color: 'white' }}>
         <div className={classes.center}>
            <div>
               <Typography variant="h4">Contact Us:</Typography>
               <br />
               <Typography variant="h6">Email: audiovisual@neu.edu.ph</Typography>
               <br />
               <Typography variant="h6">Tel: 981-4221</Typography>
            </div>
         </div>
      </div>
   );
}

export default Contact;