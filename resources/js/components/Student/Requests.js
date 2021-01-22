import React, { useEffect, useState } from 'react';
import {
   Card,
   Grid,
   Box,
   Typography,
   makeStyles,
   Table,
   TableContainer,
   TableBody,
   TableRow,
   TableCell,
   TableHead,
   LinearProgress
} from '@material-ui/core';
import axios from 'axios';

const style = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(3)
   },
   center: {
      display: 'flex',
      justifyContent: 'center'
   }
}));

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

const Requests = () => {
   const classes = style();
   const [RowData, setRowData] = useState([]);
   const [TableLoading, setTableLoading] = useState(true);

   useEffect(() => {
      let isMounted = true;

      const GetRequests = () => {
         axios.get('/api/GetStudentRequests')
            .then(res => {
               if (isMounted) {
                  setRowData(res.data.Requests);
                  setTableLoading(false);
               }
            }).catch(err => {
               alert(err);
            });
      }

      GetRequests();

      return () => {
         isMounted = false;
      }
   }, [RowData]);

   return (
      <div>
         <Card className={classes.card}>
            <Typography className={classes.center} variant="h5">Requests</Typography>
            <br />
            <TableContainer>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Room</TableCell>
                        <TableCell>Status</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {
                        TableLoading
                           ? <TableRow>
                              <TableCell colSpan={4}>
                                 <LinearProgress color="secondary" style={{ width: '100%' }} />
                              </TableCell>
                           </TableRow>
                           : RowData.length === 0
                              ? <TableRow>
                                 <TableCell colSpan={4} style={{ textAlign: 'center' }}>No Data</TableCell>
                              </TableRow>
                              : RowData.map(data => (
                                 <TableRow key={data.scheduleID}>
                                    <TableCell>{data.date}</TableCell>
                                    <TableCell>{`${mtime[data.startTime]} - ${mtime[data.endTime]}`}</TableCell>
                                    <TableCell>{data.room}</TableCell>
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
         </Card>
      </div>
   );
}

export default Requests;