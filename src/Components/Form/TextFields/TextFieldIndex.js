import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
function TextFieldIndex({handleChange,handleSubmit}) {
    const[text, setText]=useState()
  return (
    <Box>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange = {handleChange} />
  
    </Box>
  );
}

export default TextFieldIndex;