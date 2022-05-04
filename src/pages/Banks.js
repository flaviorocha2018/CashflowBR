import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { blue } from '@mui/material/colors';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles((theme) ({
    field: {
        margimTop: 20,
        margimBottom: 20,
        display: "block",
    }
    
}));

export default function Bancos(){
    const classes = useStyles()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [nameError, setNameError] = useState(false)
    const [addressError, setAddressError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setAddressError(false)

        if(name == ''){
            setNameError(true)
        }

        if(address == ''){
            setAddressError(true)
        }

        if( name && address){
            console.log(name,address)
        }
    }

    return(
        <Container>
           <Typography  variant="h6" color="textSecondary" align="center" gutterBottom>
               Cadastrar um novo Banco
           </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField label="Nome do Banco" variant="outlined" color="secondary"
                fullWidth required className={classes.field} 
                onChange={(e) => setName(e.target.value)} error={nameError}/>
                 <TextField label="Endereço" variant="outlined" color="secondary"
                fullWidth required className={classes.field} 
                onChange={(e) => setAddress(e.target.value)} error={addressError}/>

                <Button type="submit" variant="contained" color="primary"
                 endIcon={<KeyboardArrowRightIcon />} 
                >
                 Salvar
                </Button>
            </form>

           
        </Container>
    )
}