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

const Schedules = () => {
   const classes = style();

   return (
      <div style={{ marginTop: 100, color: 'white' }}>
         <div className={classes.center}>
            <div>
               <Typography variant="h4">Schedules</Typography>
            </div>
         </div>
      </div>
   );
}

export default Schedules;