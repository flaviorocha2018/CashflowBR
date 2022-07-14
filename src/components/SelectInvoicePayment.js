import React from 'react'

import {FormControl, InputLabel, Select as MuiSelect,  MenuItem }  from '@mui/material';


export default function Select(props) {

  const choices = () => ([
    { id: '1', title: 'N.F. Nº 923756'}, 
    { id: '2', title: 'N.F. Nº 322696'},
    { id: '3', title: 'N.F. Nº 122687'},
    { id: '4', title: 'N.F. Nº 287456'}, 
    { id: '5', title: 'N.F. Nº 289659'}, 
    { id: '6', title: 'N.F. Nº 325874'},
    { id: '7', title: 'N.F. Nº 568124'}, 
    { id: '8', title: 'N.F. Nº 395178'}, 
    { id: '9', title: 'N.F. Nº 285035'}, 
    { id: '10', title: 'N.F. Nº 000235'}, 
    { id: '11', title: 'N.F. Nº 128567'}, 
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