import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
   Card,
   Grid,
   TextField,
   Button,
   Container,
   Typography,
   InputLabel,
   Select,
   MenuItem,
   FormControl,
   colors
} from '@material-ui/core';
import axios from 'axios';

const UserViewEdit = () => {
   let { id } = useParams();
   const [DDCourses, setDDCourses] = useState([]);
   const [DDColleges, setDDColleges] = useState([]);
   const [StudentID, setStudentID] = useState("");
   const [FirstName, setFirstName] = useState("");
   const [MiddleName, setMiddleName] = useState("");
   const [LastName, setLastName] = useState("");
   const [Course, setCourse] = useState("");
   const [College, setCollege] = useState("");
   const [Guardian, setGuardian] = useState("");
   const [ContactNo, setContactNo] = useState("");
   const [Address, setAddress] = useState("");

   const DropdownData = () => {
      axios.get('/api/UserInfoDropdown')
         .then(res => {
            console.log(res.data);
            setDDCourses(res.data.Courses);
            setDDColleges(res.data.Colleges);

            GetData();
         }).catch(error => {
            alert(error);
         })
   }

   const GetData = () => {
      axios.post('/api/GetUserInfo', { "SQNC": id })
         .then(res => {
            console.log(res.data);
            setStudentID(res.data.data[0].studNo);
            setFirstName(res.data.data[0].fname);
            setMiddleName(res.data.data[0].mname);
            setLastName(res.data.data[0].lname);
            setCourse(res.data.data[0].course);
            setCollege(res.data.data[0].college);
            setGuardian(res.data.data[0].guardian);
            setContactNo(res.data.data[0].guardian_contact);
            setAddress(res.data.data[0].address);
         }).catch(error => {
            alert(error);
         })
   }

   useEffect(() => {
      DropdownData()
   }, []);

   return (
      <div>
         <Card style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
               <Typography variant="h5">User View Edit</Typography>
            </div>
            <Container>
               <Grid container spacing={3}>
                  <Grid item lg={12} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="Student ID"
                        fullWidth
                        value={StudentID}
                     />
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="FirstName"
                        fullWidth
                        autoComplete="off"
                        spellCheck={false}
                        value={FirstName}
                        onInput={event => setFirstName(event.target.value)}
                     />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="MiddleName"
                        fullWidth
                        autoComplete="off"
                        spellCheck={false}
                        value={MiddleName}
                        onInput={event => setMiddleName(event.target.value)}
                     />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="LastName"
                        fullWidth
                        autoComplete="off"
                        spellCheck={false}
                        value={LastName}
                        onInput={event => setLastName(event.target.value)}
                     />
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <FormControl variant="outlined" fullWidth>
                        <InputLabel id="CourseLabel">Course</InputLabel>
                        <Select
                           labelId="CourseLabel"
                           fullWidth
                           value={Course}
                           label="Course"
                           onChange={event => setCourse(event.target.value)}
                        >
                           {
                              DDCourses.map(data => (
                                 <MenuItem
                                    key={data.id}
                                    value={data.courseName}
                                 >{data.courseName}</MenuItem>
                              ))
                           }
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item lg={8} md={6} sm={12} xs={12}>
                     <FormControl variant="outlined" fullWidth>
                        <InputLabel id="CollegeLabel">College</InputLabel>
                        <Select
                           labelId="CollegeLabel"
                           fullWidth
                           value={College}
                           label="College"
                           onChange={event => setCollege(event.target.value)}
                        >
                           {
                              DDColleges.map(data => (
                                 <MenuItem
                                    key={data.id}
                                    value={data.collegeName}
                                 >{data.collegeName}</MenuItem>
                              ))
                           }
                        </Select>
                     </FormControl>
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="Guardian"
                        fullWidth
                        autoComplete="off"
                        spellCheck={false}
                        value={Guardian}
                        onInput={event => setGuardian(event.target.value)}
                     />
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="Guardian Contact"
                        fullWidth
                        autoComplete="off"
                        spellCheck={false}
                        value={ContactNo}
                        onInput={event => setContactNo(event.target.value)}
                     />
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item lg={12} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="Address"
                        fullWidth
                        multiline
                        autoComplete="off"
                        spellCheck={false}
                        value={Address}
                        onInput={event => setAddress(event.target.value)}
                     />
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item container justify="space-between">
                     <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/Admin/UserList">Back</Button>
                     <Button
                        variant="contained"
                        style={{ backgroundColor: colors.green['900'], color: 'white' }}>Save Changes</Button>
                  </Grid>
               </Grid>
            </Container>
         </Card>
      </div >
   );
}

export default UserViewEdit;