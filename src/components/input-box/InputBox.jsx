import React from 'react';
import TextField from '@mui/material/TextField';

const InputBox = (props) => {
  return (
    <>
      <TextField
        label={props.label}
        sx={{
          backgroundColor: 'white',
          width: `${props.width}` + 'rem',

          borderRadius: 5,
        }}
      />
    </>
  );
};

export default InputBox;
