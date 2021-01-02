import React from 'react';
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
import { Button, Collapse } from '@material-ui/core';
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
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const [listOpen, setListOpen] = React.useState(false);
   const history = useHistory();

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const handleLogout = () => {
      axios.get('/api/Logout')
         .then(res => {
            localStorage.removeItem('userLogin');
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
               {/* {listOpen ? <ExpandMoreRounded /> : <ExpandLessRounded />} */}
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
         <Divider />
         <List>
            <ListItem button component={Link} to="/ContactUs">
               <ListItemIcon>
                  <MailIcon />
               </ListItemIcon>
               <ListItemText primary="Contact" />
            </ListItem>
         </List>
      </div>
   );

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="fixed" className={classes.appBar} color="secondary">
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
               <Button color="inherit" onClick={handleLogout}>Logout</Button>
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
                     keepMounted: true, // Better open performance on mobile.
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