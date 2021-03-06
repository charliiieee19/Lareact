import React, { useState } from 'react';
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Hidden,
   SwipeableDrawer,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   Divider,
   IconButton,
   Icon,
   makeStyles
} from '@material-ui/core'
import {
   MenuRounded
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
   drawerPaper: {
      width: 200,
   }
}));

const Main = ({ children }) => {
   const classes = useStyles();
   const [mobileOpen, setMobileOpen] = useState(false);

   const handleOpenDrawer = () => {
      setMobileOpen(!mobileOpen);
   }

   const MenusMobile = (
      <React.Fragment>
         <List>
            <ListItem button component={Link} to="/Home/Gallery" onClick={() => setMobileOpen(false)}>
               <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem button component={Link} to="/Home/FilmShowing" onClick={() => setMobileOpen(false)}>
               <ListItemText primary="Film Showing" />
            </ListItem>
            <ListItem button component={Link} to="/Home/Contact" onClick={() => setMobileOpen(false)}>
               <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/Home/About" onClick={() => setMobileOpen(false)}>
               <ListItemText primary="About" />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button component={Link} to="/Home/Schedules" onClick={() => setMobileOpen(false)}>
               <ListItemText primary="Schedules" />
            </ListItem>
            <ListItem button component={Link} to="/Login" onClick={() => setMobileOpen(false)}>
               <ListItemText primary="Login" />
            </ListItem>
         </List>

      </React.Fragment >
   );
   const Menus = (
      <React.Fragment>
         <Button color="inherit" component={Link} to="/Home/Gallery">Gallery</Button>
         <Button color="inherit" component={Link} to="/Home/FilmShowing">Film Showing</Button>
         <Button color="inherit" component={Link} to="/Home/Contact">Contact</Button>
         <Button color="inherit" component={Link} to="/Home/About">About</Button>
         <div style={{ flexGrow: 1 }} />
         <Button color="inherit" component={Link} to="/Home/Schedules">Schedules</Button>
         <Button color="inherit" component={Link} to="/Login">Login</Button>
      </React.Fragment>
   );

   return (
      <div className="LandingPageBG">
         <AppBar position="fixed" color="transparent">
            <Toolbar style={{ color: 'white' }}>
               <Typography variant="h6" style={{ marginRight: 30, color: 'white', textDecoration: 'none' }} component={Link} to="/">NEU</Typography>
               <Hidden smDown>
                  {Menus}
               </Hidden>
               <Hidden mdUp>
                  <SwipeableDrawer
                     open={mobileOpen}
                     onClose={handleOpenDrawer}
                     onOpen={handleOpenDrawer}
                     classes={{
                        paper: classes.drawerPaper
                     }}
                     anchor="right"
                  >
                     {MenusMobile}
                  </SwipeableDrawer>
               </Hidden>
               <Hidden mdUp>
                  <div style={{ flexGrow: 1 }} />
                  <IconButton onClick={handleOpenDrawer}>
                     <MenuRounded />
                  </IconButton>
               </Hidden>
            </Toolbar>
         </AppBar>
         <div>
            {children}
         </div>
      </div>
   );
}

export default Main;