import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import CashFlowContext from '../context/Context';


const useStyles = makeStyles((theme) => {
    return{
        root: {
            display: "flex",
            flexwrap: "wrap",
            
        },
        textField: {
            margimLeft: theme.spacing(1),
            margimRight: theme.spacing(1),
            width: "25ch",
        },
        
        field: {
            spacing: 2,
            display: "block",
        }
    }
});

export default function Clients(){
    const classes = useStyles()
    const { userEmail, setUserEmail } = useContext(CashFlowContext);
    const { userName, setUserName }= useContext(CashFlowContext)
    const [idClient, setIdClient] = useState('');
    const [clientName, setClientName] = useState('');
    const [address, setAddress] = useState('')
    const [clientNameError, setClientNameError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [date, setDate] = useState('')
    const [dateError, setDateError] = useState(false)
    const [local, setLocal] = useState('');
    const [city, setCity] = useState('');
    const [CEP, setCEP] = useState('');
    const [contact, setContact] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [CPF, setCPF] = useState('');
    const [stateSubscription, setStateSubscription] = useState('');
    const [citySubscription, setCitySubscription] = useState('');

    
const handleSubmit = (e) => {
    e.preventDefault()
    setClientNameError(false)
    setAddressError(false)

    if(clientName == ''){
        setClientNameError(true)
    }

    if( address == ''){
        setAddressError(true)
    }

    if(date == ''){
        setDateError(true)
    }
}

// const [state, setState] = React.useState('RJ');
// const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState(event.target.value);
// }
    return(
      
        <Container>
       
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Box mt={3} mb={1}> {/* colocar margim top e bottom com box   */}
                <Grid item xs={6} md={12}>
                <TextField label="Nome do Cliente" variant="outlined" color="secondary"
                sx={{width: "500px", ml: 2, mr: 2}} required className={classes.field} 
                onChange={(e) => setClientName(e.target.value)} error={clientNameError}/>
                <TextField label="Data do Cadastro" variant="outlined" color="secondary"
                sx={{width: "180px"}} required className={classes.field}
                onChange={(e) => setDate(e.target.value)} error={dateError} />
                </Grid></Box>
            
                 <Box mt={1}>
                 <Grid item xs={6} md={10} style={{ display: "flex" }}>
                 <TextField label="Endereço" variant="outlined" color="secondary"
                 sx={{width: "550px", mr: 1, ml: 2}} required className={classes.field} 
                onChange={(e) => setAddress(e.target.value)} error={addressError}/>
                <TextField label="Bairro"  className={classes.textField}
                 sx={{width: "350px" }} />
                </Grid></Box>
                <Grid item xs={6} md={10} style={{ display: "flex", margimLeft: 0}}>

                <TextField label="Cidade"  className={classes.field}
                sx={{width: "320px", mr: 1 }} />

                 <TextField label="CEP"  className={classes.field}
                 sx={{width: "180px", mr: 1}}/> 

                <TextField label="Contato" className={classes.field}
                sx={{width: "350px", mr: 1 }} />
                </Grid>

                <Grid item xs={6} md={10} style={{ display: "flex", margimLeft: 0}}>
                <TextField label="Telefone"  className={classes.field}
                 sx={{width: "235px", mr: 1 }} />
                <TextField label="E-mail"  className={classes.field}
                 sx={{width: "350px", mr: 1 }} />
                  <TextField label="C.N.P.J"  className={classes.field}
                 sx={{width: "250px", mr: 1 }} />
                
                 </Grid><br/>
                 <Grid item xs={6} md={10} style={{ display: "flex", margimLeft: 0}}>
                
                <TextField label="C.P.F."  className={classes.field}
                 sx={{width: "232px", mr: 1 }} />
                 <TextField label="Inscr.Estadual"  className={classes.field}
                 sx={{width: "235px", mr: 1 }} />
                 <TextField label="Inscr.Municipal"  className={classes.field}
                 sx={{width: "235px", mr: 1 }} />
                 </Grid><br/>
                 <Grid item xs={6} md={8} style={{ display: "flex" }}> 
                <Box mt={4}> {/* colocar margim top e bottom com box   */}
                <Button type="submit" variant="contained" color="primary"
                 endIcon={<KeyboardArrowRightIcon />} 
                >
                 Salvar
                </Button>
                </Box>
                </Grid>
            </Grid>            
        </form>

        </Container>
    
    )
}