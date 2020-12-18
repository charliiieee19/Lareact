import React from 'react';
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';

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


const Home = () => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <MiniDrawer />
         <main className={classes.content}>
            <div className={classes.toolbar} />
            <h1>Home</h1>
         </main>
      </div>
   );
}

export default Home;
