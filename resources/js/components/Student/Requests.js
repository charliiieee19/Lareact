import React, { useEffect, useState } from 'react';
import {
   Card,
   Grid,
   Typography,
   makeStyles
} from '@material-ui/core';
import axios from 'axios';

const style = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(3)
   },
   center: {
      display: 'flex',
      justifyContent: 'center'
   }
}));

const Requests = () => {
   const classes = style();

   useEffect(() => {
      let isMounted = true;

      const GetRequests = () => {
         axios.get('/api/GetStudentRequests')
            .then(res => {
               console.log(res.data);
            }).catch(err => {
               alert(err);
            });
      }

      GetRequests();

      return () => {
         isMounted = false;
      }
   }, []);

   return (
      <div>
         <Card className={classes.card}>
            <Typography className={classes.center} variant="h5">Requests</Typography>
         </Card>
      </div>
   );
}

export default Requests;