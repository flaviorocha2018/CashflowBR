import React from 'react'

import {FormControl, InputLabel, Select as MuiSelect,  MenuItem }  from '@mui/material';


export default function Select(props) {

  const choices = () => ([
    { id: '1', title: 'Banco do Brasil S.A.'}, 
    { id: '2', title: 'Banco Itaú S.A.'},
    { id: '3', title: 'Banco Bradesco S.A.'},
    { id: '4', title: 'Banco Santander S.A.'}, 
    { id: '5', title: 'Caixa Econômica Federal'}, 
   
  ]);
  
const { name, label, value, onChange } = props; 


  return (
    <FormControl  variant="outlined" style={{margimLeft: 2, margimTop: 15, width: "270px"}}>
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