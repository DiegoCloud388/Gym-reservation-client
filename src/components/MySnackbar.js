import * as React from 'react';
import { IconButton, Button, Snackbar, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar(props) {
    const { color, message } = props;
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
        <IconButton 
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}>
            <CloseIcon fontSize="small"/>
        </IconButton>
    </React.Fragment>
  );

  return (
    <div>
        <Button onClick={handleClick}>Open simle snackbar</Button>
        <Snackbar action={action} open={open} autoHideDuration={6000} onClose={handleClose} key={{"top": "center"}}>
            <Alert variant="filled" severity={color} sx={{ width: '100%' }}>{message}</Alert>
        </Snackbar>           
    </div>
  );
}