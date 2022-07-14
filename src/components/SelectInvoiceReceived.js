import React from 'react'

import {FormControl, InputLabel, Select as MuiSelect,  MenuItem }  from '@mui/material';


export default function Select(props) {

  const choices = () => ([
    { id: '1', title: 'N.F. Nº 000156'}, 
    { id: '2', title: 'N.F. Nº 000696'},
    { id: '3', title: 'N.F. Nº 000687'},
    { id: '4', title: 'N.F. Nº 000456'}, 
    { id: '5', title: 'N.F. Nº 000659'}, 
    { id: '6', title: 'N.F. Nº 000874'},
    { id: '7', title: 'N.F. Nº 000124'}, 
    { id: '8', title: 'N.F. Nº 000178'}, 
    { id: '9', title: 'N.F. Nº 000435'}, 
    { id: '10', title: 'N.F. Nº 000476'}, 
    { id: '11', title: 'N.F. Nº 000567'}, 
  ]);
  
const { name, label, value, onChange } = props; 


  return (
    <FormControl  variant="outlined" style={{margimLeft: 2, margimTop: 15, width: "290px"}}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">nenhum</MenuItem>
          {
            choices().map(
              item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
            )
          }

        </MuiSelect>

      </FormControl>
    

  )
}