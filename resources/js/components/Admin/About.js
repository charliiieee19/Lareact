import React, { useEffect, useState } from 'react';
import {
   AppBar,
   Typography,
   Toolbar,
   Container,
   Table,
   Button
} from '@material-ui/core';
import {
   EditRounded
} from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios';

const About = () => {
   const [loadingTable, setLoadingTable] = useState(true);
   const [TableRows, setTableRows] = useState([]);
   let TableRowsPartial = [];
   let TableColumns = [
      { field: 'id', headerName: 'UserID', width: 200 },
      { field: 'lastname', headerName: 'LastName', width: 200 },
      { field: 'firstname', headerName: 'FirstName', width: 200 },
      { field: 'middlename', headerName: 'MiddleName', width: 200 },
      {
         field: 'Action',
         headerName: 'Action',
         width: 200,
         renderCell: (params) => (
            <Button variant="contained" color="primary" size="small" onClick={() => ViewEdit(`${params.value}`)}>
               <EditRounded fontSize="small" style={{marginRight: 5}} /> View / Edit
            </Button>
         )
      }
   ];

   const ViewEdit = (id) => {
      console.log(id);
   }

   useEffect(() => {
      async function GetUserList() {
         axios.get('/api/UserList')
            .then(res => {
               setTableRows([]);

               for (let i = 0; i < res.data.length; i++) {
                  let TableObj = {};
                  TableObj.id = res.data[i].studNo;
                  TableObj.lastname = res.data[i].lname;
                  TableObj.firstname = res.data[i].fname;
                  TableObj.middlename = res.data[i].mname;
                  TableObj.Action = res.data[i].studNo;
                  TableRowsPartial.push(TableObj);
               }

               setTableRows(TableRowsPartial);
               setLoadingTable(false);
            }).catch(error => {
               alert(error);
            });
      }

      GetUserList();
   }, []);

   return (
      <div>
         <div style={{ height: '70vh', width: '100%' }}>
            <DataGrid
               pageSize={10}
               rowsPerPageOptions={[10, 25, 50, 100]}
               pagination
               rows={TableRows}
               columns={TableColumns}
               autoHeight
               disableSelectionOnClick={true}
               loading={loadingTable}
            />
         </div>
      </div>
   );
}

export default About;