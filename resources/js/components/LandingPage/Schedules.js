import React, { useEffect, useState } from 'react';
import {
   AppBar,
   Typography,
   Toolbar,
   Container,
   Card,
   CardContent,
   Grid,
   Box,
   Avatar,
   Button,
   colors,
   TextField,
   FormControl,
   Input,
   InputLabel,
   MenuItem,
   Select,
   makeStyles,
   LinearProgress,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Slide,
   Table,
   TableContainer,
   TableBody,
   TableRow,
   TableCell,
   TableHead,
   CircularProgress,
   Snackbar
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const style = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(4),
      paddingTop: 0
   },
   cardTitle: {
      padding: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center'
   },
   center: {
      display: 'flex',
      minHeight: '70vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
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

const columns = [
   { name: 'Date', selector: 'Date', minWidth: '100px', sortable: false },
   { name: 'Time', selector: 'Time', minWidth: '150px', sortable: false },
   { name: 'Room', selector: 'Room', minWidth: '100px', sortable: false, wrap: true },
   {
      name: 'Status',
      sortable: false,
      minWidth: '150px',
      cell: row => (
         <div>
            <Typography component="div" variant="body2">
               <Box color={row.Status === 'Approved'
                  ? 'success.main' : row.Status === 'Pending'
                     ? 'warning.main' : 'error.main'}
               >
                  {row.Status}
               </Box>
            </Typography>
         </div>
      )
   },
];

const Loading = (
   <LinearProgress color="secondary" style={{ width: '100%' }} />
);

const Schedules = () => {
   const classes = style();
   const [TableLoading, setTableLoading] = useState(true);
   const [DDroom, setDDRoom] = useState([]);
   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
   const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
   const [room, setRoom] = useState("All");
   const [rows, setRows] = useState([]);

   useEffect(() => {
      let isMounted = true;

      const GetData = () => {
         if (isMounted) {
            setTableLoading(true);
         }

         axios.post('/api/GetRequests_Student', {
            'StartDate': startDate,
            'EndDate': endDate,
            'Room': room
         }).then(res => {
            let partialRows = [];

            for (let i = 0; i < res.data.Requests.length; i++) {
               let obj = {};
               obj.Date = res.data.Requests[i].date;
               obj.Time = `${mtime[res.data.Requests[i].startTime]} - ${mtime[res.data.Requests[i].endTime]}`;
               obj.Room = res.data.Requests[i].room;
               obj.Requester = res.data.Requests[i].requester;
               obj.Status = res.data.Requests[i].Status;
               obj.scheduleID = res.data.Requests[i].scheduleID;
               partialRows.push(obj);
            }

            if (isMounted) {
               setRows(partialRows);
               setTableLoading(false);
            }
         }).catch(err => {
            alert(err);
         });
      }

      const DropdownData = () => {
         axios.get('/api/RequestsDropdown')
            .then(res => {
               if (isMounted) {
                  setDDRoom(res.data.Rooms);
               }
            }).catch(err => {
               alert(err);
            });
      }

      GetData();
      DropdownData();

      return () => {
         isMounted = false;
      }
   }, [startDate, endDate, room]);

   return (
      <div style={{ marginTop: '10vh', padding: 30 }}>
         <Card className={classes.card}>
            <div className={classes.cardTitle}>
               <Typography variant="h5">
                  Schedules
               </Typography>
            </div>
            <Grid
               container
               spacing={2}
               justify="center"
               alignItems="center"
               direction="row"
            >
               <Grid item xl={2} lg={3} md={6} sm={12} xs={12} >
                  <TextField
                     variant="outlined"
                     type="date"
                     label="Start Date"
                     value={startDate}
                     onInput={(event) => setStartDate(event.target.value)}
                     fullWidth
                  />
               </Grid>
               <Grid item xl={2} lg={3} md={6} sm={12} xs={12}>
                  <TextField
                     variant="outlined"
                     type="date"
                     label="End Date"
                     value={endDate}
                     onInput={(event) => setEndDate(event.target.value)}
                     min={startDate}
                     fullWidth
                  />
               </Grid>
               <Grid item xl={2} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="RoomLabel">Room</InputLabel>
                     <Select
                        labelId="RoomLabel"
                        id="Type"
                        value={room}
                        onChange={(event) => setRoom(event.target.value)}
                        label="Room"
                     >
                        <MenuItem value="All">All</MenuItem>
                        {
                           DDroom.map(data => (
                              <MenuItem key={data.id} value={data.roomName}>{data.roomName}</MenuItem>
                           ))
                        }
                     </Select>
                  </FormControl>
               </Grid>
            </Grid>
            <Grid container>
               <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <DataTable
                     theme="dark"
                     columns={columns}
                     data={rows}
                     pagination
                     paginationRowsPerPageOptions={[10, 25, 50, 100]}
                     progressPending={TableLoading}
                     progressComponent={Loading}
                     responsive
                  />
               </Grid>
            </Grid>
         </Card>
      </div>
   );
}

export default Schedules;