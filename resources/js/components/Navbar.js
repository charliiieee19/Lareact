import React, { useEffect } from 'react';
import {
   AppBar,
   Typography,
   Toolbar,
   Button,
   Container,
   Menu,
   MenuItem
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

const Navbar = () => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [mobileView, setMobileView] = React.useState(false);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   }

   const handleClose = () => {
      setAnchorEl(null);
   }

   useEffect(() => {
      const setResponsiveness = () => {
         return window.innerWidth < 900
            ? setMobileView(true)
            : setMobileView(false);
      };

      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness());
   }, []);

   const DesktopMenu = () => {
      return (
         <React.Fragment>
            <Typography variant="h6" style={{ marginRight: '50px' }}>Charlie</Typography>
            <Button component={Link} to="/Home" color="inherit">Home</Button>
            <Button component={Link} to="/About" color="inherit">About</Button>
            <Button component={Link} to="/ContactUs" color="inherit">Contact Us</Button>
            <div style={{ flexGrow: 1 }}></div>
            <Button color="inherit" onClick={handleClick}>
               Hi, Charlie
            </Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onClose={handleClose}
            >
               <MenuItem onClick={handleClose}>Profile</MenuItem>
               <MenuItem onClick={handleClose}>My account</MenuItem>
               <MenuItem component={Link} to={'/'} onClick={handleClose}>Logout</MenuItem>
            </Menu>
         </React.Fragment>
      );
   }

   const MobileMenu = () => {
      return (
         <Drawer />
      );
   }

   return (
      <div style={{ marginBottom: '56px' }}>
         <AppBar color="secondary">
            <Container>
               <Toolbar>
                  {mobileView ? MobileMenu() : DesktopMenu()}
               </Toolbar>
            </Container>
         </AppBar>
      </div>
   );
}

export default Navbar;
