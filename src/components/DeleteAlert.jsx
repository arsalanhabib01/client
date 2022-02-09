import React, { useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function DeleteAlert() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}>
        
        Delete
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title">
          {"Delete"}
        </DialogTitle>
        
        <br></br>
        
        <DialogContent>
          <DialogContentText>
            Do you really want to delete the User?
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleClose}>
            
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            autoFocus>
        
            Delete
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
