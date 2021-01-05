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
   makeStyles
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



const Requests = () => {
   const classes = style();
   const [DDroom, setDDRoom] = useState([]);
   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
   const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
   const [room, setRoom] = useState("All");
   const [type, setType] = useState("Approved");

   const DropdownData = () => {
      axios.get('/api/RequestsDropdown')
         .then(res => {
            setDDRoom(res.data.Rooms);
         }).catch(err => {
            alert(err);
         });
   }

   useEffect(() => {
      DropdownData();
   }, []);

   const columns = [
      { name: 'lastName', selector: 'lastName', sortable: true },
      { name: 'firstName', selector: 'firstName', sortable: true },
      { name: 'age', selector: 'age', sortable: true },
      // {
      //    name: 'Action',
      //    minWidth: '250px',
      //    cell: row => (
      //       <div>
      //          <Button variant="contained" size="small" color="primary" onClick={() => ViewEdit(`${row.SQNC}`)}>View / Edit</Button>
      //          <Button
      //             variant="contained"
      //             size="small"
      //             style={{
      //                backgroundColor: colors.red[700],
      //                color: 'white',
      //                marginLeft: 5
      //             }}
      //          >
      //             Delete
      //          </Button>
      //       </div>
      //    )
      // },
   ];

   const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 11 },
      { id: 6, lastName: 'Melisandre', firstName: 11, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 11 },
      { id: 16, lastName: 'Melisandre', firstName: 11, age: 150 },
      { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
            <Grid
               container
            >
               <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <DataTable
                     theme="dark"
                     columns={columns}
                     data={rows}
                     pagination
                     paginationRowsPerPageOptions={[10, 25, 50, 100]}
                     responsive
                  />
               </Grid>
            </Grid>
         </Card>

      </div>
   );
}

export default Requests;
