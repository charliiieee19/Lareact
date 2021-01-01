import React from 'react';
import {
   makeStyles,
   Typography
} from '@material-ui/core';
import {
   BuildRounded
} from '@material-ui/icons';

const style = makeStyles(() => ({
   center: {
      display: 'flex',
      minHeight: '70vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
   }
}));

const FilmShowing = () => {
   const classes = style();

   return (
      <div style={{ marginTop: 100, color: 'white' }}>
         <div className={classes.center}>
            <div>
               <Typography variant="h4">
                  Coming Soon <BuildRounded fontSize="large" />
               </Typography>
            </div>
         </div>
      </div>
   );
}

export default FilmShowing;