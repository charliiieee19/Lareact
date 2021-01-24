import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
   Grid,
   Card,
   Button
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Visits = () => {
   let { password } = useParams();
   const [rows, setRows] = useState([]);

   const columns = [
      { name: 'Browser', selector: 'Browser', minWidth: '100px', sortable: false, wrap: true },
      { name: 'IP', selector: 'ip', minWidth: '150px', sortable: false, wrap: true },
      { name: 'Date', selector: 'date', minWidth: '100px', sortable: false, wrap: true },
   ];

   useEffect(() => {
      let isMounted = true;

      const GetData = () => {
         axios.get('/api/GetVisits')
            .then(res => {
               console.log(res);

               if(isMounted) {
                  setRows(res.data.data);
               }
            }).catch(err => {
               alert(err);
            });
      }

      GetData();

      return () => {
         isMounted = false;
      }
   }, []);

   return (
      <div style={{ marginTop: '10vh', padding: 20 }}>
         <Grid container justify="center">
            <Grid item xl={8} lg={10} md={12} sm={12} xs={12}>
               {
                  password === 'P@$$w0rd'
                     ? <Card>
                        <DataTable
                           theme="dark"
                           columns={columns}
                           data={rows}
                           pagination
                           paginationRowsPerPageOptions={[10, 25, 50, 100]}
                           responsive
                        />
                     </Card>
                     : ''
               }
            </Grid>
         </Grid>
      </div>
   );
}

export default Visits;