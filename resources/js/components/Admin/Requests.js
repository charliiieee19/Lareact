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
import MuiAlert from '@material-ui/lab/Alert';
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

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = (props) => (
   <MuiAlert elevation={6} variant="filled" {...props} />
);

const Requests = () => {
   const classes = style();
   const [DDroom, setDDRoom] = useState([]);
   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
   const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
   const [room, setRoom] = useState("All");
   const [type, setType] = useState("Approved");
   const [rows, setRows] = useState([]);
   const [forceReloadData, setforceReloadData] = useState(false);
   const [tableLoading, setTableLoading] = useState(true);
   const [ApproveDialog, setApproveDialog] = useState(false);
   const [ApproveDetails, setApproveDetails] = useState({
      ScheduleID: '',
      Date: '',
      Time: '',
      Room: ''
   });
   const [ApproveLoading, setApproveLoading] = useState(false);
   const [SnackbarOpen, setSnackbarOpen] = useState({
      Open: false,
      Type: '',
      Message: ''
   });

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

   const ViewDetails = (ID) => {
      alert(ID);
   }

   const handleApproveDialog = (ID, Date, Time, Room) => {
      setApproveDialog(true);
      setApproveDetails(prevState => ({
         ...prevState,
         ScheduleID: ID,
         Date: Date,
         Time: Time,
         Room: Room
      }));
      console.log(ID, Date, Time, Room);
   }

   const handleApprove = () => {
      setApproveLoading(true);
      axios.post('/api/ApproveRequest',
         {
            "ScheduleID": ApproveDetails.ScheduleID
         }).then(res => {
            console.log(res);

            if (res.data.success) {
               setApproveDialog(false);
               setSnackbarOpen(prevState => ({
                  ...prevState,
                  Open: true,
                  Type: 'success',
                  Message: 'Request Approved'
               }));
               setforceReloadData(!forceReloadData);
            } else {
               alert(res.data.message);
            }

            setApproveLoading(false);
         }).catch(err => {
            alert(err);
         })
   }

   const GetData = (isMounted) => {
      if (isMounted) {
         setTableLoading(true);
      }

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

         if (isMounted) {
            setRows(partialRows);
            setTableLoading(false);
         }
      }).catch(err => {
         alert(err);
      });
   }

   useEffect(() => {
      let isMounted = true;

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

      DropdownData();
      GetData(isMounted);

      return () => {
         isMounted = false;
      }
   }, [startDate, endDate, room, type, forceReloadData]);

   const columns = [
      { name: 'Date', selector: 'Date', width: '100px', sortable: false },
      { name: 'Time', selector: 'Time', width: '150px', sortable: false },
      { name: 'Room', selector: 'Room', width: '100px', sortable: false, wrap: true },
      { name: 'Requester', selector: 'Requester', width: '180px', sortable: false, wrap: true },
      {
         name: 'Status',
         sortable: false,
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
         width: '300px',
         cell: row => (
            <div>
               <Button variant="contained" size="small" color="primary" onClick={() => ViewDetails(`${row.scheduleID}`)}>Details</Button>
               {
                  row.Status === 'Pending'
                     ? <span>
                        <Button
                           variant="contained"
                           size="small"
                           style={{
                              backgroundColor: colors.green[700],
                              color: 'white',
                              marginLeft: 5
                           }}
                           onClick={() => handleApproveDialog(`${row.scheduleID}`, `${row.Date}`, `${row.Time}`, `${row.Room}`)}
                        >
                           Approve
                        </Button>
                        <Button
                           variant="contained"
                           size="small"
                           style={{
                              backgroundColor: colors.red[700],
                              color: 'white',
                              marginLeft: 5
                           }}
                        >
                           Disapprove
                        </Button>
                     </span>
                     : ''
               }
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
         <Dialog
            open={ApproveDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setApproveDialog(false)}
            fullWidth
            maxWidth="sm"
         >
            <DialogTitle style={{ textAlign: 'center' }}>Approve Request</DialogTitle>
            <DialogContent>
               <TableContainer>
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell>Date</TableCell>
                           <TableCell>Time</TableCell>
                           <TableCell>Room</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        <TableRow>
                           <TableCell>{ApproveDetails.Date}</TableCell>
                           <TableCell>{ApproveDetails.Time}</TableCell>
                           <TableCell>{ApproveDetails.Room}</TableCell>
                        </TableRow>
                     </TableBody>
                  </Table>
               </TableContainer>
            </DialogContent>
            <DialogActions style={{ padding: 24 }}>
               <Button
                  onClick={() => setApproveDialog(false)}
                  color="inherit"
                  style={{
                     backgroundColor: colors.green[700],
                     color: 'white'
                  }}
                  onClick={handleApprove}
               >
                  {
                     ApproveLoading
                        ? <CircularProgress size={24} color="inherit" />
                        : 'Approve'
                  }
               </Button>
               <Button onClick={() => setApproveDialog(false)} color="default" variant="outlined">
                  Cancel
               </Button>
            </DialogActions>
         </Dialog>
         <Snackbar open={SnackbarOpen.Open} onClose={() => setSnackbarOpen(prevState => ({ ...prevState, Open: false }))}>
            <Alert severity={SnackbarOpen.Type} onClose={() => setSnackbarOpen(prevState => ({ ...prevState, Open: false }))}>
               {SnackbarOpen.Message}
            </Alert>
         </Snackbar>
      </div>
   );
}

export default Requests;
