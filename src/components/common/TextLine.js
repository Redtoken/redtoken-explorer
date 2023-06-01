import React from "react";
import {
  Typography,
  Box,
} from '@mui/material';
const TextLine = ({ label, value }) => {
  return (
    <Box className='d-flex align-items-center navbar-left, justify-content-between'
      style={{borderBottom:'1px solid #ddd'}}
      >
      <Typography component="div" color="text.secondary">
        {label}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {value}
      </Typography>
    </Box>
  );
};

export default TextLine;