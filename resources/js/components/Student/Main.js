import React from 'react';
import SideBar from './SideBar';
import { makeStyles } from '@material-ui/core/styles';

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
      [theme.breakpoints.up('sm')]: {
         marginLeft: 250
      }
   }
}));

const Main = ({ children }) => {
   const classes = useStyles();

   return (
      <div>
         <SideBar />
         <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
         </main>
      </div>
   );
}

export default Main;