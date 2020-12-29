import React from 'react';
import { useParams } from 'react-router-dom';
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
   FormControl
} from '@material-ui/core';

const UserViewEdit = () => {
   let { id } = useParams();

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
                        value={id}
                     />
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="FirstName"
                        fullWidth
                     />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="MiddleName"
                        fullWidth
                     />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="LastName"
                        fullWidth
                     />
                  </Grid>
               </Grid>
               <Grid container spacing={3}>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <FormControl variant="outlined" fullWidth>
                        <InputLabel id="CourseLabel">Course</InputLabel>
                        <Select
                           labelId="CourseLabel"
                           onChange={console.log("asd")}
                           fullWidth
                           defaultValue=""
                           label="Course"
                        >
                           <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                     </FormControl>
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                     <TextField
                        variant="outlined"
                        label="MiddleName"
                        fullWidth
                     />
                  </Grid>
               </Grid>
            </Container>
         </Card>
      </div>
   );
}

export default UserViewEdit;