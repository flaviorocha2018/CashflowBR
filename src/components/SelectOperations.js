import React from 'react'

import {FormControl, InputLabel, Select as MuiSelect,  MenuItem }  from '@mui/material';


export default function Select(props) {

  const choices = () => ([
    { id: '1', title: 'Saque/Doc./Dinheiro/PIX'}, 
    { id: '2', title: 'Saque/Pag.de Títulos'},
    { id: '3', title: 'Despesas Financeiras/Bancárias'},
    { id: '4', title: 'Débito Tarifas Bancárias'}, 
    { id: '5', title: 'Saque/Folha Pagto de Pessoal'}, 
    { id: '6', title: 'Crédito/Depósito/Vendas Dinheiro' },
    { id: '7', title: 'Crédito/Vendas Cartão Crédito'}, 
    { id: '8', title: 'Crédito/Vendas Cartão Débito'}, 
    { id: '9', title: 'Crédito/Recebimento de Títulos'}, 
    { id: '10', title: 'Crédito/Estorno C.C.'}, 
    { id: '11', title: 'Crédito/Receita Financeira'}, 
  ]);
  
const { name, label, value, onChange } = props; 


  return (
    <FormControl  variant="outlined" style={{margimLeft: 2, margimTop: 15, width: "375px"}}>
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