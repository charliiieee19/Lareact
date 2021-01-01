import React from 'react';
import {
   makeStyles,
   Typography,
   Container
} from '@material-ui/core';

const style = makeStyles(() => ({
   center: {
      display: 'flex',
      minHeight: '20vh',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
   },
   overlay: {
      position: 'absolute',
      top: 64,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'overlay'
   }
}));

const About = () => {
   const classes = style();

   return (
      <div className={classes.overlay}>
         <div style={{ marginTop: 100, color: 'white' }}>
            <div className={classes.center}>
               <div>
                  <Container>
                     <Typography variant="h4">Multimedia Office</Typography>
                     <br />
                     <small>VISION</small>
                     <br />
                     <Typography variant="h6">
                        To build a distinct brand known specifically for its innovation and delivering exceptional audio visual services for the administration, faculty and students.
                  </Typography>
                     <br />
                     <small>MISSION</small>
                     <br />
                     <Typography variant="h6">
                        Provides the highest level of service for administration, faculty and students to be more innovative and equipped thru the used of digital technologies, advancement and comprehensive source of materials.
                  </Typography>
                     <br />
                     <small>GOALS AND OBJECTIVES</small>
                     <br />
                     <Typography variant="h6">
                        * To provide the New Era University academic community with audio visual resources and services.
                     <br />
                     * To train users on the effective utilization of audio visual resources.
                     <br />
                     * To assist academic departments and offices in the production of audio visual materials for Multimedia Room use.
                     <br />
                     * To conduct orientation session for faculty, staff and students on the use and operation of the different types of audio visual equipment available in the Multimedia Office.
                     <br />
                     * To continuosly acquire and assist in the production of materials responsive to the needs of New Era University faculty, administration, staff and students.
                  </Typography>
                  </Container>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;