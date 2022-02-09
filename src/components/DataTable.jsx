import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import DeleteAlert from "./DeleteAlert";
import EditAlert from "./EditAlert";
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

function DataTable() {
 
  const [fetchData, setFetchData] = useState(null);
  
  // API user list:
  const apiURL = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  // fetching API user list:
  useEffect(() => {
    const fetch_Data = async () => {
      const response = await axios.get(apiURL)
      setFetchData(response.data);
    }
    fetch_Data();
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 }, // user ID column
    { field: 'name', headerName: 'Name', width: 250 }, // user Name column
    { field: 'username', headerName: 'Username', width: 230 }, // Username column
    {   // user's City column 
      headerName: 'City', width: 200,
      valueGetter: function (params) {
        if (fetchData[params.id - 1].address) {
          return fetchData[params.id - 1].address.city;
        } else {
          return undefined;
        }
      },
    },
    
    { field: 'email', headerName: 'Email', width: 280 }, // user Email column
    {   // Edit Column
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      width: 150,
      disableClickEventBubbling: true,
      renderCell: () => {
        
        return (
          <EditAlert />
        );
      }
    },
    {   // Delete column
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: () => {
        
        return (
          <DeleteAlert />
        );
      }
    },
  ];
  
  return (
    <div>
      <h1>Dashboard</h1>
      
      <Box sx={{ border: '1px solid lightgrey' }}>
        <h3 style={{ top: 10,left: 20, position: 'relative' }}>
          User list
        </h3>
        
        <Button
          variant="contained"
          color="primary"
          style={{ top: -30, left: 1100, width: '15%' }}
        >
        
          Add new
        </Button>
      </Box>
      
      {/* Creating visual user table  */}
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={fetchData}
          pageSize={13}
        />
      </div>
    </div>
  )
}

export default DataTable

