import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export const SnackBar = ({ children, text }) => {
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

  return (
    <div>
      <button className='w-full h-full' onClick={handleClick}>
        {children}
      </button>
      <Snackbar
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        message='Product added to cart successfully.'
      >
        <Alert
          sx={{ backgroundColor: 'lightgreen', fontWeight: '500' }}
          severity='success'
        >
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
};
