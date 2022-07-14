import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
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

export default function Bancos(){
    const classes = useStyles()
    const { userEmail, setUserEmail } = useContext(CashFlowContext);
    const { userName, setUserName }= useContext(CashFlowContext)
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const [codeError, setCodeError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    setCodeError(false)
    setDescriptionError(false)

    if(code == ''){
        setCodeError(true)
    }

    if( description == ''){
        setDescriptionError(true)
    }
}

const handleChange = (e) => {

}

    return(
      
        <Container>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Box mt={5} mb={1}> {/* colocar margim top e bottom com box   */}
                <Grid item xs={6} md={6}>
                <TextField label="Centro de Custo" variant="outlined" color="secondary"
                sx={{width: "250px", mb: 2, ml: 2}} required className={classes.field} 
                onChange={(e) => setCode(e.target.value)} error={codeError}
                 />

                <TextField label="Descrição" variant="outlined" color="secondary"
                 sx={{width: "550px", mr: 1, ml: 2}} required className={classes.field} 
                onChange={(e) => setDescription(e.target.value)} error={descriptionError}/>
                </Grid></Box>
            
                 <Box mt={3}>
                 <Grid item xs={6} md={10} style={{ display: "flex" }}>
                
                
                </Grid></Box>
               
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
