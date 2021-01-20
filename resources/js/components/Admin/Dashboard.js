import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Container, Card, CardContent, Grid, Box, Avatar, Button, colors, TextField } from '@material-ui/core';
import { ListAltRounded, RssFeed } from '@material-ui/icons';
import axios from 'axios';

const Dashboard = () => {
   const [cards, setCards] = useState({
      'Approved': 0,
      'Disapproved': 0,
      'Pending': 0,
   });



   useEffect(() => {
      let isMounted = true;

      axios.get('/api/GetDashboardCounts')
         .then(res => {
            if (isMounted) {
               setCards(prevState => ({
                  ...prevState,
                  'Approved': res.data.Approved[0].Count,
                  'Disapproved': res.data.Disapproved[0].Count,
                  'Pending': res.data.Pending[0].Count,
               }));
            }
         }).catch(err => {
            alert(err);
         });

      return () => {
         isMounted = false;
      }
   }, [cards]);

   return (
      <Grid container spacing={2}>
         <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card>
               <CardContent>
                  <Grid
                     container
                     justify="space-between"
                     spacing={3}
                  >
                     <Grid item>
                        <Typography
                           color="textSecondary"
                           gutterBottom
                           variant="h6"
                        >
                           Approved <br /> Requests
                        </Typography>
                        <Typography
                           color="textPrimary"
                           variant="h5"
                        >
                           {cards.Approved}
                        </Typography>
                     </Grid>
                     <Grid item>
                        <Avatar
                           style={{ height: 56, width: 56, backgroundColor: colors.blue[900], color: colors.amber[50] }}
                        >
                           <ListAltRounded />
                        </Avatar>
                     </Grid>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
         <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card>
               <CardContent>
                  <Grid
                     container
                     justify="space-between"
                     spacing={3}
                  >
                     <Grid item>
                        <Typography
                           color="textSecondary"
                           gutterBottom
                           variant="h6"
                        >
                           Pending <br /> Requests
                              </Typography>
                        <Typography
                           color="textPrimary"
                           variant="h5"
                        >
                           {cards.Pending}
                        </Typography>
                     </Grid>
                     <Grid item>
                        <Avatar
                           style={{ height: 56, width: 56, backgroundColor: colors.blue[900], color: colors.amber[50] }}
                        >
                           <ListAltRounded />
                        </Avatar>
                     </Grid>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
         <Grid item lg={3} md={6} sm={12} xs={12}>
            <Card>
               <CardContent>
                  <Grid
                     container
                     justify="space-between"
                     spacing={3}
                  >
                     <Grid item>
                        <Typography
                           color="textSecondary"
                           gutterBottom
                           variant="h6"
                        >
                           Dispproved <br /> Requests
                              </Typography>
                        <Typography
                           color="textPrimary"
                           variant="h5"
                        >
                           {cards.Disapproved}
                        </Typography>
                     </Grid>
                     <Grid item>
                        <Avatar
                           style={{ height: 56, width: 56, backgroundColor: colors.blue[900], color: colors.amber[50] }}
                        >
                           <ListAltRounded />
                        </Avatar>
                     </Grid>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
      </Grid>
   );
}

export default Dashboard;
