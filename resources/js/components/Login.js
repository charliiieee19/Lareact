import React, { useState, useRef, useEffect } from 'react';
import {
   Button,
   Grid,
   Card,
   CardHeader,
   CardContent,
   TextField,
   Checkbox,
   FormControlLabel,
   Typography,
   CircularProgress
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link, useHistory, Redirect } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

const Login = () => {
   const [usernameError, setUsernameError] = useState(false);
   const [usernameHelperText, setUsernameHelperText] = useState("");
   const [passwordError, setPasswordError] = useState(false);
   const [passwordHelperText, setPasswordHelperText] = useState("");
   const [loading, setLoading] = useState(false);
   const [loginAlert, setLoginAlert] = useState(false);
   const [AlertMessage, setAlertMessage] = useState("");
   const history = useHistory();

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         Login();
      }
   }

   const ShowPassChange = () => {
      if ($("#ShowPass").prop("checked")) {
         $("#Password").prop("type", "text");
      } else {
         $("#Password").prop("type", "password");
      }
   }

   const AlertTag = () => {
      return (
         <Alert variant="filled" severity="error">
            {AlertMessage}
         </Alert>
      );
   }

   const Validator = (type, id) => {
      if (type === "text") {
         if ($(`#${id}`).val().trim() === "") {
            if (id === "Username") {
               setUsernameError(true);
               setUsernameHelperText("Required");
            }
            else if (id === "Password") {
               setPasswordError(true);
               setPasswordHelperText("Required");
            }
         } else {
            if (id === "Username") {
               setUsernameError(false);
               setUsernameHelperText("");
            }
            else if (id === "Password") {
               setPasswordError(false);
               setPasswordHelperText("");
            }
         }
      }
   }

   const Login = () => {
      let Username = $("#Username").val();
      let Password = $("#Password").val();
      let isComplete = true;

      if (Username.trim() === "") {
         setUsernameError(true);
         setUsernameHelperText("Required");
         isComplete = false;
      }
      if (Password.trim() === "") {
         setPasswordError(true);
         setPasswordHelperText("Required");
         isComplete = false;
      }

      if (isComplete) {
         setLoading(true);

         axios.post('api/Login', {
            "Username": Username,
            "Password": Password,
         }).then(res => {
            if (res.data[0].Message === "1") {
               history.push('/Admin/Dashboard');
            } else {
               setAlertMessage(res.data[0].Message);
               setLoginAlert(true);
               setLoading(false);
            }
         }).catch(err => {
            alert(err);
            setLoading(false);
         });
      }
   }

   return (
      <div style={{ marginTop: '200px' }}>
         <Grid container direction="row" justify="center">
            <Grid item xl={3} lg={4} md={6} sm={11} xs={11}>
               <Card>
                  <CardHeader title="Login" style={{ textAlign: 'center' }} />
                  <CardContent>
                     <Grid>
                        <Grid item lg={12} style={{ marginBottom: '15px' }}>
                           <TextField
                              error={usernameError}
                              label="Username"
                              id="Username"
                              variant="outlined"
                              fullWidth
                              onInput={() => Validator('text', 'Username')}
                              helperText={usernameHelperText}
                              autoComplete="off"
                              spellCheck="false"
                              onKeyDown={handleKeyDown}
                           />
                        </Grid>
                        <Grid item lg={12} style={{ marginBottom: '15px' }}>
                           <TextField
                              error={passwordError}
                              type="password"
                              id="Password"
                              label="Password"
                              variant="outlined"
                              fullWidth
                              onInput={() => Validator('text', 'Password')}
                              helperText={passwordHelperText}
                              autoComplete="off"
                              spellCheck="false"
                              onKeyDown={handleKeyDown}
                           />
                        </Grid>
                        <Grid item lg={12} style={{ marginBottom: '15px' }}>
                           <FormControlLabel
                              control={<Checkbox label="Show password" id="ShowPass" onChange={ShowPassChange} />}
                              label="Show password"
                           />
                        </Grid>
                        <Grid item lg={12} style={{ marginBottom: '15px' }}>
                           {
                              loginAlert ? AlertTag() : ''
                           }
                        </Grid>
                        <Grid item lg={12}>
                           <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              onClick={Login}
                           >
                              {
                                 loading ? <CircularProgress size={24} color="inherit" /> : 'Login'
                              }
                           </Button>
                           <Button
                              variant="text"
                              color="primary"
                              fullWidth
                              style={{ marginTop: 10 }}
                              component={Link}
                              to="/"
                           >Back</Button>
                        </Grid>
                     </Grid>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </div>
   );
}

export default Login;
