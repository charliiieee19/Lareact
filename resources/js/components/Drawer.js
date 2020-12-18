import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MenuRounded } from '@material-ui/icons';

const useStyles = makeStyles({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
});

export default function Drawer() {
   const classes = useStyles();
   const [openDrawer, setOpenDrawer] = React.useState(false);

   const toggleDrawer = (status) => {
      setOpenDrawer(status);
   };

   const list = () => (
      <div
         className={classes.list}
         role="presentation"
         onClick={() => toggleDrawer(false)}
         onKeyDown={() => toggleDrawer(false)}
         style={{ backgroundColor: '#303030', color: 'white' }}
      >
         <List>
            <ListItem button>
               <ListItemIcon>
                  <ListItemIcon />
               </ListItemIcon>
               <ListItemText primary="Home" />
            </ListItem>
         </List>
      </div>
   );

   return (
      <div>
         <React.Fragment>
            <Button onClick={() => toggleDrawer(true)}>
               <MenuRounded color="inherit" />
            </Button>
            <SwipeableDrawer
               anchor="left"
               open={openDrawer}
               onClose={() => toggleDrawer(false)}
               onOpen={() => toggleDrawer(true)}
            >
               {list()}
            </SwipeableDrawer>
         </React.Fragment>
      </div>
   );
}