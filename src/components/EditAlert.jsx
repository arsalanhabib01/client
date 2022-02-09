import React, { useState } from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EditAlert() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const paperStyle = {
    padding: 10,
    height: "70vh",
    width: 600,
    margin: "20px auto",
  };

  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        startIcon={<EditIcon />}
        onClick={handleClickOpen}>
        
        Edit
      </Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid style={paperStyle}>
          <h1>Dashboard</h1>
          
          <Box sx={{ border: '1px solid lightgrey' }}> 
            <h2 className='form'>Form</h2>
            
            <h3 className='nameTitle'>Name </h3>
            <TextField
              label="Name"
              className="name"
              required
            />
            
            <h3 className='emailTitle'>Email </h3>
            <TextField
              label="Email"
              className="email"
              required
            />
            
            <Button
              variant="contained"
              color="inherit"
              className="btnCancel"
              onClick={handleClose}>
              
              Cancel
            </Button>

          <Button
            variant="contained"
            color="success"
            className="btnSubmit"
            onClick={handleClose}
          >
            
            Submit
            </Button>

          </Box>
        </Grid>
      </Dialog>
    </div>
  );
}
