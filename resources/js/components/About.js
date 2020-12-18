import React from 'react';
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}));


const About = () => {
   const classes = useStyles();

   axios.post('api/Login', {
      Username: "charlie",
      Password: "charlie"
   })
      .then((res) => {
         console.log(res.data);
         console.log("done");
      })
      .catch((error) => {
         console.log(error);
      });

   return (
      <div className={classes.root}>
         <MiniDrawer />
         <main className={classes.content}>
            <div className={classes.toolbar} />
            <h1>About</h1>
         </main>
      </div>
   );
}

export default About;