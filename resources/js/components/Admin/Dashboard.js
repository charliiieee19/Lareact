import React from 'react';
import { AppBar, Typography, Toolbar, Container, Card, CardContent, Grid, Box, Avatar, Button, colors } from '@material-ui/core';
import { ListAltRounded } from '@material-ui/icons';

const Dashboard = () => {
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
                           Today <br /> Schedules
                              </Typography>
                        <Typography
                           color="textPrimary"
                           variant="h5"
                        >
                           99999
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
                           99999
                              </Typography>
                     </Grid>
                     <Grid item>
                        <Avatar
                           style={{ height: 56, width: 56 }}
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
                           Approved <br /> Requests
                              </Typography>
                        <Typography
                           color="textPrimary"
                           variant="h5"
                        >
                           99999
                              </Typography>
                     </Grid>
                     <Grid item>
                        <Avatar
                           style={{ height: 56, width: 56 }}
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
                           Requests
                              </Typography>
                        <Typography
                           color="textPrimary"
                           variant="h5"
                        >
                           99999
                              </Typography>
                     </Grid>
                     <Grid item>
                        <Avatar
                           style={{ height: 56, width: 56 }}
                        >
                           <ListAltRounded />
                        </Avatar>
                     </Grid>
                  </Grid>
                  <Box
                     mt={2}
                     display="flex"
                     alignItems="center"
                  >
                     <Typography variant="body2" style={{ marginRight: 10 }}>
                        12%
                           </Typography>
                     <Typography
                        color="textSecondary"
                        variant="caption"
                     >
                        Since last month
                           </Typography>
                  </Box>
               </CardContent>
            </Card>
         </Grid>
      </Grid>
   );
}

export default Dashboard;
