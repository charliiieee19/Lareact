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
   const [DisapproveDialog, setDisapproveDialog] = useState(false);
   const [ApproveDetails, setApproveDetails] = useState({
      ScheduleID: '',
      Date: '',
      Time: '',
      Room: '',
      Loading: false
   });
   const [DisapproveDetails, setDisapproveDetails] = useState({
      ScheduleID: '',
      Date: '',
      Time: '',
      Room: '',
      Loading: false
   });
   const [SnackbarOpen, setSnackbarOpen] = useState({
      Open: false,
      Type: '',
      Message: ''
   });
   const [DetailsData, setDetailsData] = useState({
      Dialog: false,
      Loading: false,
      Date: '',
      Time: '',
      DateRequested: '',
      Subject: '',
      Instructor: '',
      Room: '',
      Requester: '',
      Department: '',
      NoOfStudents: 0,
      StudentID: '',
      ContactNo: '',
      Purpose: '',
      Equipments: '',
      Status: '',
      ActionDate: '',
      ActionBy: ''
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
      setDetailsData(prevState => ({ ...prevState, Dialog: true, Loading: true }));

      axios.post('/api/GetRequestDetails', {
         "ScheduleID": ID
      }).then(res => {
         setDetailsData(prevState => ({
            ...prevState,
            Subject: res.data.data[0].subject,
            Instructor: res.data.data[0].instructor,
            Date: res.data.data[0].date,
            Time: `${mtime[res.data.data[0].startTime]} - ${mtime[res.data.data[0].endTime]}`,
            Room: res.data.data[0].room,
            NoOfStudents: res.data.data[0].noOfStudents,
            Department: res.data.data[0].department,
            Requester: res.data.data[0].requester,
            ContactNo: res.data.data[0].contactNo,
            Purpose: res.data.data[0].purpose,
            StudentID: res.data.data[0].studentID,
            Equipments: res.data.data[0].Equipments.replace(/,/g, ", "),
            Status: res.data.data[0].Status,
            ActionDate: res.data.data[0].ActionDate,
            ActionBy: res.data.data[0].ActionBy,
            DateRequested: res.data.data[0].dateRequested,
            Loading: false
         }));
      }).catch(err => {
         alert(err);
      });
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
   }

   const handleDisapproveDialog = (ID, Date, Time, Room) => {
      setDisapproveDialog(true);
      setDisapproveDetails(prevState => ({
         ...prevState,
         ScheduleID: ID,
         Date: Date,
         Time: Time,
         Room: Room
      }));
   }

   const handleApprove = () => {
      setApproveDetails(prevState => ({ ...prevState, Loading: true }));

      axios.post('/api/ApproveRequest',
         {
            "ScheduleID": ApproveDetails.ScheduleID
         }).then(res => {
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

            setApproveDetails(prevState => ({ ...prevState, Loading: false }));
         }).catch(err => {
            alert(err);
         });
   }

   const handleDisapprove = () => {
      setDisapproveDetails(prevState => ({ ...prevState, Loading: true }));

      axios.post('/api/DisapproveRequest',
         {
            "ScheduleID": DisapproveDetails.ScheduleID
         }).then(res => {
            if (res.data.success) {
               setDisapproveDialog(false);
               setSnackbarOpen(prevState => ({
                  ...prevState,
                  Open: true,
                  Type: 'error',
                  Message: 'Request Disapproved'
               }));

               setforceReloadData(!forceReloadData);
            } else {
               alert(res.data.message);
            }

            setDisapproveDetails(prevState => ({ ...prevState, Loading: false }));
         }).catch(err => {
            alert(err);
         });
   }



   useEffect(() => {
      let isMounted = true;

      const GetData = () => {
         if (isMounted) {
            setTableLoading(true);
         }

         axios.post('/api/GetRequests', {
            'StartDate': startDate,
            'EndDate': endDate,
            'Room': room,
            'Type': type,
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

      DropdownData();
      GetData(isMounted);

      return () => {
         isMounted = false;
      }
   }, [startDate, endDate, room, type, forceReloadData]);

   const columns = [
      { name: 'Date', selector: 'Date', minWidth: '100px', sortable: false },
      { name: 'Time', selector: 'Time', minWidth: '150px', sortable: false },
      { name: 'Room', selector: 'Room', minWidth: '100px', sortable: false, wrap: true },
      { name: 'Requester', selector: 'Requester', minWidth: '180px', sortable: false, wrap: true },
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
      {
         name: 'Action',
         minWidth: '300px',
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
                           onClick={() => handleDisapproveDialog(`${row.scheduleID}`, `${row.Date}`, `${row.Time}`, `${row.Room}`)}
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
            maxWidth="xs"
         >
            <DialogTitle style={{ textAlign: 'center' }}>Approve Request</DialogTitle>
            <DialogContent style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
               <Button
                  onClick={() => setApproveDialog(false)}
                  color="inherit"
                  style={{
                     backgroundColor: colors.green[700],
                     color: 'white',
                     marginRight: 5
                  }}
                  onClick={handleApprove}
               >
                  {
                     ApproveDetails.Loading
                        ? <CircularProgress size={24} color="inherit" />
                        : 'Approve'
                  }
               </Button>
               <Button onClick={() => setApproveDialog(false)} color="default" variant="outlined">
                  Cancel
               </Button>
            </DialogContent>
         </Dialog>
         <Dialog
            open={DisapproveDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setDisapproveDialog(false)}
            fullWidth
            maxWidth="xs"
         >
            <DialogTitle style={{ textAlign: 'center' }}>Disapprove Request</DialogTitle>
            <DialogContent style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
               <Button
                  onClick={() => setDisapproveDialog(false)}
                  color="inherit"
                  style={{
                     backgroundColor: colors.red[700],
                     color: 'white',
                     marginRight: 5
                  }}
                  onClick={handleDisapprove}
               >
                  {
                     DisapproveDetails.Loading
                        ? <CircularProgress size={24} color="inherit" />
                        : 'Disapprove'
                  }
               </Button>
               <Button onClick={() => setDisapproveDialog(false)} color="default" variant="outlined">
                  Cancel
               </Button>
            </DialogContent>
         </Dialog>
         <Dialog
            open={DetailsData.Dialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setDetailsData(state => ({ ...state, Dialog: false }))}
            fullWidth
            maxWidth="md"
         >
            <DialogTitle style={{ textAlign: 'center' }}>Request Details</DialogTitle>
            <DialogContent>
               {
                  DetailsData.Loading
                     ? <LinearProgress color="secondary" style={{ width: '100%' }} />
                     : <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Subject}
                              label="Subject"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Instructor}
                              label="Instructor"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Date}
                              label="Date"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Time}
                              label="Time"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={2} lg={2} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Room}
                              label="Room"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={2} lg={2} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.NoOfStudents}
                              label="No Of Persons"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Department}
                              label="Department"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Requester}
                              label="Requester"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.ContactNo}
                              label="ContactNo"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Purpose}
                              label="Purpose"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.StudentID}
                              label="StudentID"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
                           <TextField
                              type="text"
                              variant="outlined"
                              value={DetailsData.Equipments}
                              label="Equipments"
                              inputProps={{ readOnly: true }}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                           <Typography variant="caption">
                              {
                                 DetailsData.Status === 'Approved'
                                    ? `Approved by ${DetailsData.ActionBy} on ${DetailsData.ActionDate}`
                                    : DetailsData.Status === 'Disapproved'
                                       ? `Disapproved by ${DetailsData.ActionBy} on ${DetailsData.ActionDate}`
                                       : `Date Requested on ${DetailsData.DateRequested}`
                              }
                           </Typography>
                        </Grid>
                     </Grid>
               }
            </DialogContent>
            <DialogActions style={{ padding: 24 }}>
               <Button onClick={() => setDetailsData(state => ({ ...state, Dialog: false }))} color="default" variant="outlined">
                  Close
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
