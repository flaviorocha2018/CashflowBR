import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import Controls from "../components/controls/Controls";
import SelectOperations from '../components/SelectOperations';
import Typography from '@mui/material/Typography';
import SelectBank from '../components/SelectBank';
import SelectIvoicePayment from '../components/SelectInvoicePayment';
import SelectInvoiceReceived from '../components/SelectInvoiceReceived';


const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: "10%px",
        margim: theme.spacing(1),

      },
      newButton: {
        position: 'absolute',
        right: '70px'
    },

    }
}))

const initialFieldsValue = {
  idOperations: 0,
  idBaseTitPagos: 0,
  idBaseTitRecebidos: 0,
  idBank: 0,
  numDocto: '',
  dateOperation: new Date(),
  operationDescription: '',
  receivingInvoiceNumber: 0,
  paymentInvoiceNumber: 0,
  ammountMoviment: '0',
  anteriorAccBalance: 0,
  finalAccBalance: 0,
  
}

const initialSelectValues = { id: '', title: ''}

export default function Supplyer() {
  
  const [ values, setValues] = useState(initialFieldsValue);
  const [ value, setValue ] = useState(initialSelectValues)
  const classes = useStyles();


  const handleInputChange = e => {
    const [ name, value] = e.target
      setValues({
        ...values,
        [name]: value
      })
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target
    setValue({id: e.target.value})
    console.log(name, value);
  }

  const handleChange = () => {

  }


  return (
    <>
   
    <form className={classes.root}>
      <Grid container>
    <Box sx={{mt: '15px'}}>
    <Grid item xs={6} md={12}>
    <SelectOperations 
                    name="operation"
                    label="Operação"
                    value={value.id}
                    onChange={handleSelectChange}
                    options={SelectOperations.choices}
                    fullWidth
    />
  
    <TextField variant="outlined" label="Data Operação" onChange={handleInputChange} name="dateOperation"
    value={values.invoiceDate}sx={{width: "205px", ml:"5px"}}/>
    </Grid>
    </Box>
    <Box sx={{mt: "15px", mr: "7px"}}>
    <Grid item xs={6} md={12}>
    <SelectBank 
              name="bank"
              label="Selecione o Banco"
              value={value.id}
              onChange={handleSelectChange}
              options={SelectBank.choices}
              fullWidth

    />

    <TextField variant="outlined" label="Nº Docto." onChange={handleInputChange}  name="numDocto"
    value={values.numDocto}sx={{width: "150px", ml:"5px", mr:"5px"}}/> 

    <TextField variant="outlined" label="Valor" onChange={handleInputChange} name="ammountMoviment"
    value={values.ammountMoviment}sx={{width: "155px"}}/> 
    </Grid>
    </Box>

    <Box sx={{mt: 2 }}>
    <Grid item xs={6} md={12} style={{ display: "flex"}}>
    <Box sx={{mr: '5px'}}>
    <SelectIvoicePayment
              name="paymentInvoiceNumber"
              value={value.id}
              label="Selecione o Título a Pagar"
              onChange={handleSelectChange}
              options={SelectIvoicePayment.choices}
              fullWidth
    />
    </Box>
    <SelectInvoiceReceived
              name="receivingInvoiceNumber"
              value={value.id}
              label="Selecionte o Título a Receber"
              onChange={handleSelectChange}
              options={SelectInvoiceReceived.choices}
              fullWidth
    />
   
    </Grid>
    </Box>

    <Box mt={2} mr={1}>
    <Grid item xs={6} md={12} style={{ display: "flex"}}>
     <TextField variant="outlined" label="Descrição da Operação" onChange={handleInputChange} name="operationDescription"
    value={values.operationDescription}sx={{width: "587px", ml:"1px"}}/> 
     </Grid></Box> 
    <Box sx={{ ml:'730px', mt: '7px', color:"#F6F930" }}>
    <Grid item xs={6} md={10} >
    <Controls.Button    size="medium"
                        text="Salvar"
                        variant="outlined"
                        startIcon={<AddIcon/>}
                        className={classes.newButton}
                        onClick={() => handleChange()}
                    />
    </Grid>
    </Box>
    <Typography sx={{color: "#2F2F2F", mr: 3 }}>
    {/* {userEmail} */}
    </Typography>

  </Grid>

    </form>
</>
  )
}