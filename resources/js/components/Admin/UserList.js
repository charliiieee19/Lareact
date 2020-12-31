import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
   Button,
   LinearProgress,
   TextField,
   colors
} from '@material-ui/core';


const UserList = () => {
   const history = useHistory();
   const [users, setUsers] = useState([]);
   const [page, setPage] = useState(1);
   const [countPerPage, setCountPerPage] = useState(10);
   const [tableLoading, setTableLoading] = useState(true);
   const [userSearch, setUserSearch] = useState("");

   const Loading = (
      <LinearProgress color="secondary" style={{ width: '100%' }} />
   );

   const columns = [
      { name: 'StudentID', selector: 'studNo', minWidth: '150px' },
      { name: 'LastName', selector: 'lname', minWidth: '150px' },
      { name: 'FirstName', selector: 'fname', minWidth: '200px' },
      { name: 'MiddleName', selector: 'mname' },
      {
         name: 'Action',
         minWidth: '250px',
         cell: row => (
            <div>
               <Button variant="contained" size="small" color="primary" onClick={() => ViewEdit(`${row.SQNC}`)}>View / Edit</Button>
               <Button
                  variant="contained"
                  size="small"
                  style={{
                     backgroundColor: colors.red[700],
                     color: 'white',
                     marginLeft: 5
                  }}
               >
                  Delete
               </Button>
            </div>
         )
      },
   ];

   const ViewEdit = (id) => {
      history.push(`UserViewEdit/${id}`);
   }

   const GetData = () => {
      setTableLoading(true);

      axios.get(`/api/UserList2?page=${page}&perpage=${countPerPage}&key=${userSearch}`)
         .then(res => {
            setUsers(res.data);
            setTableLoading(false);
         }).catch(err => {
            alert(err);
         });
   }

   const handleSearch = (event) => {
      setUserSearch(event.target.value);
   }

   useEffect(() => {
      GetData();
   }, [page, countPerPage, userSearch]);

   return (
      <div>
         <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
               <TextField variant="outlined" label="Search" type="search" size="small" onInput={event => handleSearch(event)} />
            </div>

            <DataTable
               theme="dark"
               title="User Lists"
               columns={columns}
               data={users.data}
               pagination
               paginationServer
               paginationTotalRows={users.totalRows}
               paginationPerPage={countPerPage}
               onChangeRowsPerPage={pagerow => setCountPerPage(pagerow)}
               paginationRowsPerPageOptions={[10, 25, 50, 100]}
               onChangePage={page => setPage(page)}
               progressPending={tableLoading}
               progressComponent={Loading}
               responsive
            />
         </div>
      </div>
   );
}

export default UserList;