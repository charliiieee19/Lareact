import React, { useEffect, useState } from 'react';
import {
   Card,
   Grid,
   Typography,
   makeStyles,
   TextField,
   FormControl,
   InputLabel,
   Select,
   MenuItem
} from '@material-ui/core';
import axios from 'axios';

const style = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(3)
   },
   center: {
      display: 'flex',
      justifyContent: 'center'
   }
}));

const mtime = {
   700: "7:00AM",
   730: "7:30AM",
   800: "8:00AM",
   830: "8:30AM",
   900: "9:00AM",
   930: "9:30AM",
   1000: "10:00AM",
   1030: "10:30AM",
   1100: "11:00AM",
   1130: "11:30AM",
   1200: "12:00PM",
   1230: "12:30PM",
   1300: "1:00PM",
   1330: "1:30PM",
   1400: "2:00PM",
   1430: "2:30PM",
   1500: "3:00PM",
   1530: "3:30PM",
   1600: "4:00PM",
   1630: "4:30PM",
   1700: "5:00PM",
   1730: "5:30PM",
   1800: "6:00PM",
   1830: "6:30PM",
   1900: "7:00PM",
};

const NewRequests = () => {
   const classes = style();
   const [RequestForm, setRequestForm] = useState({
      Subject: '',
      Instructor: '',
      Date: new Date().toISOString().split('T')[0],
      StartTime: 'Choose',
      EndTime: 'Choose',
      Room: 'Choose'
   });

   const handleInputs = e => {
      const { name, value } = e.target;

      setRequestForm(prevState => ({
         ...prevState,
         [name]: value
      }));
   }

   return (
      <div>
         <Card className={classes.card}>
            <Typography className={classes.center} variant="h6">New Request</Typography>
            <br />
            <br />
            <Grid container spacing={2}>
               <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <TextField
                     type="text"
                     variant="outlined"
                     value={RequestForm.Subject}
                     onInput={handleInputs}
                     label="Subject"
                     name="Subject"
                     fullWidth
                  />
               </Grid>
               <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <TextField
                     type="text"
                     variant="outlined"
                     value={RequestForm.Instructor}
                     onInput={handleInputs}
                     label="Instructor"
                     name="Instructor"
                     fullWidth
                  />
               </Grid>
               <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <TextField
                     type="date"
                     variant="outlined"
                     value={RequestForm.Date}
                     onInput={handleInputs}
                     label="Date"
                     name="Date"
                     fullWidth
                  />
               </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
               <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="StartTimeLbl">StartTime</InputLabel>
                     <Select
                        labelId="StartTimeLbl"
                        id="StartTime"
                        name="StartTime"
                        label="Start Time"
                        value={RequestForm.StartTime}
                        onChange={handleInputs}
                     >
                        <MenuItem value="Choose" disabled>Choose</MenuItem>
                        {
                           Object.keys(mtime).map(key => (
                              <MenuItem key={key} value={key}>{mtime[key]}</MenuItem>
                           ))
                        }
                     </Select>
                  </FormControl>
               </Grid>
               <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="EndTimeLbl">EndTime</InputLabel>
                     <Select
                        labelId="StartTimeLbl"
                        id="EndTime"
                        name="EndTime"
                        label="End Time"
                        value={RequestForm.EndTime}
                        onChange={handleInputs}
                     >
                        <MenuItem value="Choose" disabled>Choose</MenuItem>
                        {
                           Object.keys(mtime).map(key => (
                              <MenuItem key={key} value={key}>{mtime[key]}</MenuItem>
                           ))
                        }
                     </Select>
                  </FormControl>
               </Grid>
               <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="RoomLbl">Room</InputLabel>
                     <Select
                        labelId="RoomLbl"
                        id="Room"
                        name="Room"
                        label="Room"
                        value={RequestForm.Room}
                        onChange={handleInputs}
                     >
                        <MenuItem value="Choose" disabled>Choose</MenuItem>
                        {
                           Object.keys(mtime).map(key => (
                              <MenuItem key={key} value={key}>{mtime[key]}</MenuItem>
                           ))
                        }
                     </Select>
                  </FormControl>
               </Grid>
            </Grid>
         </Card>
      </div>
   );
}

export default NewRequests;