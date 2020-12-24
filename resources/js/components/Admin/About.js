import React from 'react';
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core';
import SideBar from './SideBar';
import axios from 'axios';

const About = () => {
   axios.post('/api/Login', {
      Username: "charlie",
      Password: "charlie"
   }).then((res) => {
      console.log(res.data);
      console.log("done");
   }).catch((error) => {
      console.log(error);
   });

   return (
      <h1>About</h1>
   );
}

export default About;