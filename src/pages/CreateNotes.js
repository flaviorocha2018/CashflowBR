import React, { useState } from 'react';
import { FormControlLabel, RadioGroup, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Radio } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { useHistory } from 'react-router-dom';
import '../Styles.css';
import { Box } from '@mui/material';


const useStyles = makeStyles(({
    
    field: {
        spacing: 4,
        display: "block",
    }
    
}));

export default function Bancos(){
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [status, setStatus] =useState('active')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if(title == ''){
            setTitleError(true)
        }

        if(details == ''){
            setDetailsError(true)
        }

        if( title && details){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, status })
            })
            .then(() =>  history.push('/'))
        }
    }

    return(
        <Container>
           <Typography  variant="h6" color="textSecondary" align="center" gutterBottom
            className="titleBank">
               Cadastrar uma nova  Tarefa - Post-It
           </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box mt={3} mb={2}> {/* colocar margim top e bottom com box   */}
                <TextField label="título" variant="outlined" color="secondary"
                fullWidth required className={classes.field} 
                onChange={(e) => setTitle(e.target.value)} error={titleError}/></Box>
                 <Box mt={2} mb={2}>
                 <TextField label="descrição" variant="outlined" color="secondary"
                fullWidth required className={classes.field} multiline rows={3}
                onChange={(e) => setDetails(e.target.value)} error={detailsError}/></Box>

                <FormControl className="classes.field">        
                <FormLabel mb={2} mt={1}>Notas Status</FormLabel>
                <RadioGroup value={ status } onChange={(e)=> setStatus(e.target.value)}>
                   <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                   <FormControlLabel mb={3} value="Urgente" control={<Radio />} label="Urgente" />
                </RadioGroup>
                </FormControl>
                <Box mt={3}> {/* colocar margim top e bottom com box   */}
                <Button type="submit" variant="contained" color="primary"
                 endIcon={<KeyboardArrowRightIcon />} 
                >
                 Salvar
                </Button>
                </Box>
            </form>

           
        </Container>
    )
}
    