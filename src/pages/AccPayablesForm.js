import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import Controls from "../components/controls/Controls";
import CashFlowContext from '../context/Context';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: "50%px",
        margim: theme.spacing(1),

      },
      newButton: {
        position: 'absolute',
        right: '-480px'
    },

    }
}))

const initialFieldsValue = {
  idPaymentInvoice: '0',
  idSupplier: 0,
  nameSupplier: '',
  invoiceNumber: '',
  invoiceDate: new Date(),
  dueDate: new Date(),
  ammount: '0',
  paymtNumber: '0',
  idCenterCost: '',
  idExpenses: '',
  detailAccPayble: '',
  
}

export default function AccPayablesForm() {
  
  const [ values, setValues] = useState(initialFieldsValue);
  const { userEmail, setUserEmail } = useContext(CashFlowContext);
  const { userName, setUserName }= useContext(CashFlowContext)
  const classes = useStyles();

  // const renderEmailUser = () => {
  //   if (localStorage.length > 0) {
  //     return (JSON.parse(localStorage.getItem('email'))).email;
  //   }
  // }; // get the user email from local storage

  // const userEmail = renderEmailUser();


  const handleInputChange = e => {
    const [ name, value] = e.target
      setValues({
        ...values,
        [name]: value
      })
  }

  const handleChange = () => {

  }


  return (
    <>
   
    <form className={classes.root}>
      <Grid container>
    <Grid item xs={10}>
    <TextField variant="outlined" label="Fonecedor" onChange={handleInputChange} name="nameSupplier"
    value={values.nameSupplier}sx={{width: "400px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
    <TextField variant="outlined" label="Nº N.F." onChange={handleInputChange} name="invoiceNumber"
    value={values.invoiceNumber}sx={{width: "150px", mt: "15px"}}/>
    <TextField variant="outlined" label="Data N.F." onChange={handleInputChange} name="invoiceDate"
    value={values.invoiceDate}sx={{width: "150px", ml:"5px", mt: "15px"}}/>
    </Grid>
    <Grid item xs={10}>
    <TextField variant="outlined" label="Data Vencimento." onChange={handleInputChange} name="dueDate"
    value={values.dueDate}sx={{width: "120px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
    <TextField variant="outlined" label="Valor" onChange={handleInputChange} name="ammount"
    value={values.ammount}sx={{width: "130px", ml:"2px", mr:"5px", mt: "15px"}}/> 
     <TextField variant="outlined" label="Nº Parcela" onChange={handleInputChange} name="paymtNumber"
    value={values.paymtNumber}sx={{width: "100px", ml:"2px", mr:"5px", mt: "15px"}}/>
    <TextField variant="outlined" label="Tipo da Despesa" onChange={handleInputChange} name="idExpenses"
    value={values.idExpenses}sx={{width: "340px", ml:"3px", mt: "15px" }}/>
    </Grid>
    
    <Box><Grid>
    <TextField variant="outlined" label="Centro de Custos" onChange={handleInputChange} name="idCenterCost"
    value={values.idCenterCost}sx={{width: "200px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
    
    </Grid> </Box>
    <Box mt={2} mr={1}>
    <Grid item xs={6} md={10} style={{ display: "flex"}}>
     <TextField variant="outlined" label="Observações do Título" onChange={handleInputChange} name="detailAccPayble"
    value={values.detailAccPayble}sx={{width: "610px", ml:"1px"}}/> 
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
    <typography sx={{color: "#2F2F2F", mr: 3 }}>
    {/* {userEmail} */}
    </typography>

  </Grid>

    </form>
</>
  )
}