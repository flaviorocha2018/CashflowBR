import React from 'react';
import { useState } from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';

export default function Chekbox () {
 
const [checked, setChecked ] = useState(false);
console.log('teste', checked)

const handleCheckChange = (envent) => {
  setChecked(envent.target.checked)
  
}

  return (
    <Box>
        <FormControlLabel label='Resolvido'
        control={<Checkbox 
            checked={checked}
            color="success"
            onChange={handleCheckChange}
            disabled={checked}
        />}
        />
    </Box>

  )
}
