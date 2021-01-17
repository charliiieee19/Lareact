import React, { useState, useEffect } from 'react';
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
   LinearProgress
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
      justifyContent: 'center'
   }
}));

const Loading = (
   <LinearProgress color="secondary" style={{ width: '100%' }} />
);

const Requests = () => {
   const classes = style();
   const [DDroom, setDDRoom] = useState([]);
   const [startDate, setStartDate] = useState("2019-01-01");
   const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
   const [room, setRoom] = useState("All");
   const [type, setType] = useState("Approved");
   const [rows, setRows] = useState([]);
   const [tableLoading, setTableLoading] = useState(true);

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

   const DropdownData = () => {
      axios.get('/api/RequestsDropdown')
         .then(res => {
            setDDRoom(res.data.Rooms);
         }).catch(err => {
            alert(err);
         });
   }

   const ViewDetails = (ID) => {
      alert(ID);
   }

   const GetData = () => {
      setTableLoading(true);
      axios.post('/api/GetRequests', {
         'StartDate': startDate,
         'EndDate': endDate,
         'Room': room,
         'Type': type,
      }).then(res => {
         console.log(res);
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

         setRows(partialRows);
         setTableLoading(false);
      }).catch(err => {
         alert(err);
      });
   }

   useEffect(() => {
      DropdownData();
      GetData();
   }, [startDate, endDate, room, type]);

   const columns = [
      { name: 'Date', selector: 'Date', width: '150px', sortable: true },
      { name: 'Time', selector: 'Time', width: '150px', sortable: false },
      { name: 'Room', selector: 'Room', width: '100px', sortable: true },
      { name: 'Requester', selector: 'Requester', width: '200px', sortable: true },
      {
         name: 'Status',
         sortable: true,
         width: '150px',
         cell: row => (
            <div>
               <Typography component="div" variant="body2">
                  <Box color={row.Status === 'Approved'
                     ? 'success.main' : row.Status === 'Pending'
                        ? 'warning.main' : 'text.primary'}
                  >
                     {row.Status}
                  </Box>
               </Typography>
            </div>
         )
      },
      {
         name: 'Action',
         width: '150px',
         cell: row => (
            <div>
               <Button variant="contained" size="small" color="primary" onClick={() => ViewDetails(`${row.scheduleID}`)}>Details</Button>
               {/* <Button
                  variant="contained"
                  size="small"
                  style={{
                     backgroundColor: colors.red[700],
                     color: 'white',
                     marginLeft: 5
                  }}
               >
                  Delete
               </Button> */}
            </div>
         )
      }
   ];

   return (
      <div>
         <Card className={classes.card}>
            <div className={classes.cardTitle}>
               <Typography variant="h5">
                  Requests
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
               <Grid item xl={2} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="TypeLabel">Type</InputLabel>
                     <Select
                        labelId="TypeLabel"
                        id="Type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        label="Type"
                     >
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Disapproved">Disapproved</MenuItem>
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
                     progressPending={tableLoading}
                     progressComponent={Loading}
                     responsive
                  />
               </Grid>
            </Grid>
         </Card>
      </div>
   );
}

export default Requests;
