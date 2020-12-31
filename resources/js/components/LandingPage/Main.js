import React from 'react';
import {
   AppBar,
   Toolbar,
   Typography,
   Button
} from '@material-ui/core'
import { Link } from 'react-router-dom';

const Main = ({ children }) => {
   return (
      <div className="LandingPageBG">
         <AppBar position="fixed" color="transparent">
            <Toolbar style={{ color: 'white' }}>
               <Typography variant="h6" style={{ marginRight: 30, color: 'white', textDecoration: 'none' }} component={Link} to="/">NEU</Typography>
               <Button color="inherit">Gallery</Button>
               <Button color="inherit">Film Showing</Button>
               <Button color="inherit">Contact</Button>
               <Button color="inherit">About</Button>
               <div style={{ flexGrow: 1 }} />
               <Button color="inherit">Schedules</Button>
               <Button color="inherit" component={Link} to="/Login">Login</Button>
            </Toolbar>
         </AppBar>
         <div>
            {children}
         </div>
      </div>
   );
}

export default Main;