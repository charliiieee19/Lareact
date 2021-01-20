import React, { useEffect, useState } from 'react';
import {
   Card,
   Paper,
   Grid,
   Box,
   Typography,
   makeStyles,
   TextField,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   FormControlLabel,
   Checkbox,
   Button,
   FormHelperText,
   Slide,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   CircularProgress,
   Table,
   TableContainer,
   TableBody,
   TableRow,
   TableCell,
   TableHead,
   Snackbar
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
   DatePicker,
   TimePicker,
   DateTimePicker,
   MuiPickersUtilsProvider,
   KeyboardDatePicker
} from '@material-ui/pickers';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = (props) => (
   <MuiAlert elevation={6} variant="filled" {...props} />
);


const style = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(3)
   },
   center: {
      display: 'flex',
      justifyContent: 'center'
   }
}));

const MilitaryTime = [
   { value: 700, time: "7:00AM" },
   { value: 730, time: "7:30AM" },
   { value: 800, time: "8:00AM" },
   { value: 830, time: "8:30AM" },
   { value: 900, time: "9:00AM" },
   { value: 930, time: "9:30AM" },
   { value: 1000, time: "10:00AM" },
   { value: 1030, time: "10:30AM" },
   { value: 1100, time: "11:00AM" },
   { value: 1130, time: "11:30AM" },
   { value: 1200, time: "12:00PM" },
   { value: 1230, time: "12:30PM" },
   { value: 1300, time: "1:00PM" },
   { value: 1330, time: "1:30PM" },
   { value: 1400, time: "2:00PM" },
   { value: 1430, time: "2:30PM" },
   { value: 1500, time: "3:00PM" },
   { value: 1530, time: "3:30PM" },
   { value: 1600, time: "4:00PM" },
   { value: 1630, time: "4:30PM" },
   { value: 1700, time: "5:00PM" },
   { value: 1730, time: "5:30PM" },
   { value: 1800, time: "6:00PM" },
   { value: 1830, time: "6:30PM" },
   { value: 1900, time: "7:00PM" },
];

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


const NewRequest = () => {
   const classes = style();
   const [DialogOpen, setDialogOpen] = useState(false);
   const [SnackbarOpen, setSnackbarOpen] = useState(false);
   const [SnackbarMessage, setSnackbarMessage] = useState("");
   const [Loading, setLoading] = useState(false);
   const [DateNow, setDateNow] = useState(new Date().toISOString().split('T')[0]);
   const [DDRoom, setDDRoom] = useState([]);
   const [DisableEndTime, setDisableEndTime] = useState(true);
   const [EndTimeValues, setEndTimeValues] = useState([]);
   const [ConflictData, setConflictData] = useState([]);
   const [RequestForm, setRequestForm] = useState({
      Subject: '',
      SubjectError: false,
      SubjectErrorLabel: '',
      Instructor: '',
      InstructorError: false,
      InstructorErrorLabel: '',
      Date: new Date().toISOString().split('T')[0],
      StartTime: 'Choose',
      StartTimeError: false,
      StartTimeErrorLabel: '',
      EndTime: 'Choose',
      EndTimeError: false,
      EndTimeErrorLabel: '',
      Room: 'Choose',
      RoomError: false,
      RoomErrorLabel: '',
      NoOfPersons: 0,
      NoOfPersonsError: false,
      NoOfPersonsErrorLabel: '',
      Purpose: '',
      PurposeError: false,
      PurposeErrorLabel: '',
   });

   const handleInputs = e => {
      const { name, value } = e.target;
      handleValidatorInput(e);
      setRequestForm(prevState => ({
         ...prevState,
         [name]: value
      }));
   }

   const handleValidatorInput = (e) => {
      let { name, value, checked } = e.target;

      if (name === "Subject") {
         if (value.trim() === "") {
            setRequestForm(prevState => ({
               ...prevState,
               SubjectError: true,
               SubjectErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               SubjectError: false,
               SubjectErrorLabel: ''
            }));
         }
      }
      if (name === "Instructor") {
         if (value.trim() === "") {
            setRequestForm(prevState => ({
               ...prevState,
               InstructorError: true,
               InstructorErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               InstructorError: false,
               InstructorErrorLabel: ''
            }));
         }
      }
      if (name === "StartTime") {
         if (value === "Choose") {
            setRequestForm(prevState => ({
               ...prevState,
               StartTimeError: true,
               StartTimeErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               StartTimeError: false,
               StartTimeErrorLabel: ''
            }));
         }
      }
      if (name === "EndTime") {
         if (value === "Choose") {
            setRequestForm(prevState => ({
               ...prevState,
               EndTimeError: true,
               EndTimeErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               EndTimeError: false,
               EndTimeErrorLabel: ''
            }));
         }
      }
      if (name === "Room") {
         if (value === "Choose") {
            setRequestForm(prevState => ({
               ...prevState,
               RoomError: true,
               RoomErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               RoomError: false,
               RoomErrorLabel: ''
            }));
         }
      }
      if (name === "NoOfPersons") {
         if (parseInt(value) <= 0) {
            setRequestForm(prevState => ({
               ...prevState,
               NoOfPersonsError: true,
               NoOfPersonsErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               NoOfPersonsError: false,
               NoOfPersonsErrorLabel: ''
            }));
         }
      }
      if (name === "Purpose") {
         if (value.trim() === "") {
            setRequestForm(prevState => ({
               ...prevState,
               PurposeError: true,
               PurposeErrorLabel: 'Required'
            }));
         } else {
            setRequestForm(prevState => ({
               ...prevState,
               PurposeError: false,
               PurposeErrorLabel: ''
            }));
         }
      }
   }

   const GetDropdownData = (isMounted) => {
      axios.get('/api/RequestsDropdown')
         .then(res => {
            if (isMounted) {
               setDDRoom(res.data.Rooms);
            }
         }).catch(err => {
            alert(err);
         });
   }

   const GenerateEndTime = e => {
      handleInputs(e);
      let array = [];
      let start = parseInt(e.target.value);

      start % 100 === 0 ? start += 30 : start += 70;

      for (let i = start; i <= 1900; i % 100 === 0 ? i += 30 : i += 70) {
         let obj = {};
         obj.value = i;
         obj.time = mtime[i];
         array.push(obj);
      }

      setEndTimeValues(array);
      setRequestForm(prevState => ({
         ...prevState,
         EndTime: 'Choose'
      }));
      setDisableEndTime(false);
   }

   const handleSubmit = () => {
      console.log(RequestForm);
      let Complete = true;

      if (RequestForm.Subject.trim() === "") {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            SubjectError: true,
            SubjectErrorLabel: 'Required'
         }));
      }
      if (RequestForm.Instructor.trim() === "") {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            InstructorError: true,
            InstructorErrorLabel: 'Required'
         }));
      }
      if (RequestForm.StartTime === "Choose") {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            StartTimeError: true,
            StartTimeErrorLabel: 'Required'
         }));
      } else if (RequestForm.EndTime === "Choose") {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            EndTimeError: true,
            EndTimeErrorLabel: 'Required'
         }));
      }
      if (RequestForm.Room === "Choose") {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            RoomError: true,
            RoomErrorLabel: 'Required'
         }));
      }
      if (RequestForm.NoOfPersons <= 0) {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            NoOfPersonsError: true,
            NoOfPersonsErrorLabel: 'Required'
         }));
      }
      if (RequestForm.Purpose.trim() === "") {
         Complete = false;
         setRequestForm(prevState => ({
            ...prevState,
            PurposeError: true,
            PurposeErrorLabel: 'Required'
         }));
      }

      if (Complete) {
         setLoading(true);
         axios.post('/api/CheckConflictSchedules',
            {
               Date: RequestForm.Date,
               Room: RequestForm.Room,
               StartTime: RequestForm.StartTime,
               EndTime: RequestForm.EndTime
            }).then(res => {
               console.log(res);
               if (res.data.data.length !== 0) {
                  setConflictData(res.data.data);
                  setDialogOpen(true);
               } else {
                  let Equipments = $("input:checkbox:checked").map(function () {
                     return $(this).attr('name');
                  }).get().toString();

                  axios.post('/api/SubmitRequest',
                     {
                        "Subject": RequestForm.Subject,
                        "Instructor": RequestForm.Instructor,
                        "Date": RequestForm.Date,
                        "StartTime": RequestForm.StartTime,
                        "EndTime": RequestForm.EndTime,
                        "Room": RequestForm.Room,
                        "NoOfPersons": RequestForm.NoOfPersons,
                        "Purpose": RequestForm.Purpose,
                        "Equipments": Equipments
                     }).then(res => {
                        console.log(res);

                        handleSubmitSuccess();
                     }).catch(err => {
                        alert(err);
                     });
               }

               setLoading(false);
            }).catch(err => {
               alert(err);
            });
      }
   }

   const handleSubmitSuccess = () => {
      setRequestForm(prevState => ({
         ...prevState,
         Subject: '',
         SubjectError: false,
         SubjectErrorLabel: '',
         Instructor: '',
         InstructorError: false,
         InstructorErrorLabel: '',
         Date: new Date().toISOString().split('T')[0],
         StartTime: 'Choose',
         StartTimeError: false,
         StartTimeErrorLabel: '',
         EndTime: 'Choose',
         EndTimeError: false,
         EndTimeErrorLabel: '',
         Room: 'Choose',
         RoomError: false,
         RoomErrorLabel: '',
         NoOfPersons: 0,
         NoOfPersonsError: false,
         NoOfPersonsErrorLabel: '',
         Purpose: '',
         PurposeError: false,
         PurposeErrorLabel: '',
      }));

      setSnackbarMessage("Request Submitted");
      setSnackbarOpen(true);
   }

   useEffect(() => {
      let Mounted = true;
      GetDropdownData(Mounted);

      setInterval(() => {
         if (Mounted) {
            setDateNow(new Date().toLocaleString());
         }
      }, 1000);

      return () => {
         Mounted = false;
      }
   }, []);

   return (
      <div>
         <Card className={classes.card}>
            <Typography className={classes.center} variant="h5">New Request</Typography>
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
                     error={RequestForm.SubjectError}
                     helperText={RequestForm.SubjectErrorLabel}
                     onInput={e => handleInputs(e)}
                     fullWidth
                  />
               </Grid>
               <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <TextField
                     type="text"
                     variant="outlined"
                     value={RequestForm.Instructor}
                     onInput={e => handleInputs(e)}
                     label="Instructor"
                     name="Instructor"
                     error={RequestForm.InstructorError}
                     helperText={RequestForm.InstructorErrorLabel}
                     fullWidth
                  />
               </Grid>
               <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <KeyboardDatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        label="Date"
                        format="yyyy-MM-dd"
                        value={RequestForm.Date}
                        minDate={DateNow}
                        name="Date"
                        disablePast={true}
                        InputAdornmentProps={{ position: "start" }}
                        onChange={(date, value) => setRequestForm(prevState => ({
                           ...prevState,
                           Date: value
                        }))}
                        onInput={e => console.log(e)}
                        inputProps={{ readOnly: true }}
                        fullWidth
                     />
                  </MuiPickersUtilsProvider>
               </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
               <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="StartTimeLbl" error={RequestForm.StartTimeError}>StartTime</InputLabel>
                     <Select
                        labelId="StartTimeLbl"
                        id="StartTime"
                        name="StartTime"
                        label="Start Time"
                        value={RequestForm.StartTime}
                        error={RequestForm.StartTimeError}
                        onChange={e => GenerateEndTime(e)}
                     >
                        <MenuItem value="Choose" disabled>Choose</MenuItem>
                        {
                           MilitaryTime.map(data => (
                              data.value !== 1900 ? <MenuItem key={data.value} value={data.value}>{data.time}</MenuItem> : ''
                           ))
                        }
                     </Select>
                     {RequestForm.StartTimeError ? <FormHelperText error>Required</FormHelperText> : ''}
                  </FormControl>
               </Grid>
               <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="EndTimeLbl" error={RequestForm.EndTimeError}>EndTime</InputLabel>
                     <Select
                        labelId="StartTimeLbl"
                        id="EndTime"
                        name="EndTime"
                        label="End Time"
                        value={RequestForm.EndTime}
                        onChange={e => handleInputs(e)}
                        disabled={DisableEndTime}
                        error={RequestForm.EndTimeError}
                     >
                        <MenuItem value="Choose" disabled>Choose</MenuItem>
                        {
                           EndTimeValues.map(data => (
                              <MenuItem key={data.value} value={data.value}>{data.time}</MenuItem>
                           ))
                        }
                     </Select>
                     {RequestForm.EndTimeError ? <FormHelperText error>Required</FormHelperText> : ''}
                  </FormControl>
               </Grid>
               <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <FormControl variant="outlined" fullWidth>
                     <InputLabel id="RoomLbl" error={RequestForm.RoomError}>Room</InputLabel>
                     <Select
                        labelId="RoomLbl"
                        id="Room"
                        name="Room"
                        label="Room"
                        value={RequestForm.Room}
                        onChange={handleInputs}
                        error={RequestForm.RoomError}
                     >
                        <MenuItem value="Choose" disabled>Choose</MenuItem>
                        {
                           DDRoom.map(data => (
                              <MenuItem key={data.id} value={data.roomName}>{data.roomName}</MenuItem>
                           ))
                        }
                     </Select>
                     {RequestForm.RoomError ? <FormHelperText error>Required</FormHelperText> : ''}
                  </FormControl>
               </Grid>
               <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                  <TextField
                     type="number"
                     variant="outlined"
                     value={RequestForm.NoOfPersons}
                     onInput={e => handleInputs(e)}
                     label="No Of Persons"
                     name="NoOfPersons"
                     error={RequestForm.NoOfPersonsError}
                     helperText={RequestForm.NoOfPersonsErrorLabel}
                     fullWidth
                  />
               </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
               <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <TextField
                     type="text"
                     variant="outlined"
                     value={RequestForm.Purpose}
                     onInput={e => handleInputs(e)}
                     label="Purpose"
                     name="Purpose"
                     error={RequestForm.PurposeError}
                     helperText={RequestForm.PurposeErrorLabel}
                     fullWidth
                  />
               </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
               <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <InputLabel>Audio Visual Requirements</InputLabel>
                  <FormControlLabel
                     control={<Checkbox label="LCD Projector" color="primary" name="LCDProjector" />}
                     label="LCD Projector"
                  />
                  <FormControlLabel
                     control={<Checkbox label="LED TV" color="primary" name="LEDTV" />}
                     label="LED TV"
                  />
                  <FormControlLabel
                     control={<Checkbox label="Sound" color="primary" name="Sound" />}
                     label="Sound"
                  />
                  <FormControlLabel
                     control={<Checkbox label="Microphone" color="primary" name="Microphone" />}
                     label="Microphone"
                  />
               </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
               <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="caption">Date Requested: {DateNow}</Typography>
               </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
               <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                     {
                        Loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'
                     }
                  </Button>
               </Grid>
            </Grid>
         </Card>
         <Dialog
            open={DialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setDialogOpen(false)}
            fullWidth
            maxWidth="md"
         >
            <DialogTitle style={{ textAlign: 'center' }}>Conflict Schedules</DialogTitle>
            <DialogContent>
               <TableContainer>
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell>Date</TableCell>
                           <TableCell>Time</TableCell>
                           <TableCell>Requester</TableCell>
                           <TableCell>Status</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {
                           ConflictData.map(data => (
                              <TableRow key={data.scheduleID}>
                                 <TableCell>{data.date}</TableCell>
                                 <TableCell>{`${mtime[data.startTime]} - ${mtime[data.endTime]}`}</TableCell>
                                 <TableCell>{data.requester}</TableCell>
                                 <TableCell>
                                    <Typography variant="body2" component="div">
                                       <Box color={
                                          data.Status === 'Approved'
                                             ? 'success.main'
                                             : data.Status === 'Pending'
                                                ? 'warning.main' : 'error.main'
                                       }>{data.Status}</Box>
                                    </Typography>
                                 </TableCell>
                              </TableRow>
                           ))
                        }
                     </TableBody>
                  </Table>
               </TableContainer>
            </DialogContent>
            <DialogActions>
               <Button onClick={() => setDialogOpen(false)} color="inherit">
                  Close
               </Button>
            </DialogActions>
         </Dialog>
         <Snackbar open={SnackbarOpen} onClose={() => setSnackbarOpen(false)}>
            <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
               {SnackbarMessage}
            </Alert>
         </Snackbar>
      </div>
   );
}

export default NewRequest;