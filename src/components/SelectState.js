import React from 'react'

import {FormControl, InputLabel, Select as MuiSelect,  MenuItem }  from '@mui/material';


export default function Select(props) {

  const choices = () => ([
    { id: 'AC', title: 'Acre'}, 
    { id: 'AL', title: 'Alagoas'},
    { id: 'AM', title: 'Amazonas' },
    { id: 'AP', title: 'Amapá'   }, 
    { id: 'BA', title: 'Bahia'  }, 
    { id: 'DF', title: 'Distrito Federal'}, 
    { id: 'ES', title: 'Espírito Santo' }, 
    { id: 'MS', title: 'Mato Grosso do Sul'}, 
    { id: 'MT', title: 'Mato Grosso'}, 
    { id: 'RJ', title: 'Rio de Janeiro'}, 
    { id: 'SP', title:  'São Paulo' }, 
    { id: 'MG', title: 'Minas Gerais'}, 
    { id: 'PR', title: 'Paraná'  }, 
    { id: 'SC', title: 'Santa Catarina'}, 
    { id: 'SE', title:  'Sergipe' }, 
    { id: 'PB', title: 'Paraíba' }, 
    { id: 'PE', title: 'Pernambuco'}, 
    { id: 'GO', title:  'Goiás'  }, 
    { id: 'RR', title: 'Roraima'}, 
    { id: 'RO', title: 'Rondônia'}, 
    { id: 'PI', title: 'Piauí'}, 
    { id: 'CE', title: 'Ceará'},
    { id: 'RS', title: 'Rio Grande do Sul'}, 
    { id: 'RN', title: 'Rio Grande do Norte'},
    { id: 'MA', title: 'Maranhão'},
    { id: 'TO', title: 'Tocantins'},
   
  ]);
  
const { name, label, value, onChange } = props; 


  return (
    <FormControl  variant="outlined" style={{margimLeft: 2, width: "155px"}}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">none</MenuItem>
          {
            choices().map(
              item => (<MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>)
            )
          }

        </MuiSelect>

      </FormControl>
    

  )
}
