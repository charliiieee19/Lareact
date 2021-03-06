import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import {
   DashboardRounded,
   ExpandLessRounded,
   ExpandMoreRounded,
   SettingsRounded,
   DoneAllRounded,
   AssignmentRounded,
   QueryBuilderRounded,
   NotInterestedRounded
} from '@material-ui/icons';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Collapse, Menu, MenuItem } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   drawer: {
      [theme.breakpoints.up('sm')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   appBar: {
      [theme.breakpoints.up('sm')]: {
         width: `calc(100% - ${drawerWidth}px)`,
         marginLeft: drawerWidth,
      },
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   // necessary for content to be below app bar
   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
   ListItems: {
      padding: '10px 8px'
   },
   subList: {
      paddingLeft: theme.spacing(4)
   }
}));

const SideBar = (props) => {
   const { window } = props;
   const classes = useStyles();
   const theme = useTheme();
   const [mobileOpen, setMobileOpen] = useState(false);
   const [listOpen, setListOpen] = useState(false);
   const [userName, setUserName] = useState("");
   const [anchorEl, setAnchorEl] = React.useState(null);
   const history = useHistory();

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   }

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   }

   const handleClose = () => {
      setAnchorEl(null);
   }

   const GetSession = () => {
      axios.get('/api/SessionCheck')
         .then(res => {
            if (res.data !== false) {
               let name = `${res.data[0].lastname}`;
               let user = `Hi, ${name}`;

               setUserName(user);
            }
         }).catch(err => {
            alert(err);
         });
   }

   useEffect(() => {
      GetSession();
   }, []);

   const handleLogout = () => {
      localStorage.clear();

      axios.get('/api/Logout')
         .then(res => {
            localStorage.clear();
            history.push('/Login');
         }).catch(error => {
            alert(error);
         });
   }

   const drawer = (
      <div>
         <div className={classes.toolbar}>
            <Typography variant="h6" style={{ textAlign: 'center', paddingTop: '15px' }}>
               ADMIN
            </Typography>
         </div>
         <Divider />
         <List>
            <ListItem button component={Link} to="/Admin/Dashboard" onClick={() => setMobileOpen(false)}>
               <ListItemIcon>
                  <DashboardRounded />
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/Admin/Requests" onClick={() => setMobileOpen(false)}>
               <ListItemIcon>
                  <AssignmentRounded />
               </ListItemIcon>
               <ListItemText primary="Requests" />
            </ListItem>
            {/* <Collapse in={listOpen} unmountOnExit>
               <List component="div" disablePadding>
                  <ListItem button className={classes.subList}>
                     <ListItemIcon>
                        <DoneAllRounded />
                     </ListItemIcon>
                     <ListItemText primary="Approved" />
                  </ListItem>
                  <ListItem button className={classes.subList}>
                     <ListItemIcon>
                        <QueryBuilderRounded />
                     </ListItemIcon>
                     <ListItemText primary="Pending" />
                  </ListItem>
                  <ListItem button className={classes.subList}>
                     <ListItemIcon>
                        <NotInterestedRounded />
                     </ListItemIcon>
                     <ListItemText primary="Disapproved" />
                  </ListItem>
               </List>
            </Collapse> */}
         </List>
         {/* <Divider />
         <List>
            <ListItem button component={Link} to="/ContactUs">
               <ListItemIcon>
                  <MailIcon />
               </ListItemIcon>
               <ListItemText primary="Contact" />
            </ListItem>
         </List> */}
      </div>
   );

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="fixed" className={classes.appBar} color="primary">
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
               >
                  <MenuIcon />
               </IconButton>
               <div style={{ flexGrow: 1 }}></div>
               <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  {userName}
               </Button>
               <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
               >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
               </Menu>
            </Toolbar>
         </AppBar>
         <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
               <SwipeableDrawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onOpen={() => setMobileOpen(!mobileOpen)}
                  onClose={handleDrawerToggle}
                  classes={{
                     paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                     keepMounted: true
                  }}
               >
                  {drawer}
               </SwipeableDrawer>
            </Hidden>
            <Hidden xsDown implementation="css">
               <Drawer
                  classes={{
                     paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
               >
                  {drawer}
               </Drawer>
            </Hidden>
         </nav>
      </div>
   );
}

export default SideBar;