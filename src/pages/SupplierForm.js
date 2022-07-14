import React, {useState, useContext } from 'react'
import CashFlowContext from '../context/Context';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SelectState from '../components/SelectState';
import AddIcon from '@mui/icons-material/Add';
import Controls from "../components/controls/Controls";

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
  idSupplier: 0,
  nameSupplyer: '',
  cnpj: '',
  mobile: '',
  email: '',
  address: '',
  local: '',
  stateId: '',
  CEP: '',
  date: new Date(),
  contact: '',
}

const initialSelectValues = { id: '', title: ''} 

export default function Supplyer() {
  const { userEmail, setUserEmail } = useContext(CashFlowContext);
  const { userName, setUserName }= useContext(CashFlowContext)
  const [ value, setValue ] = useState(initialSelectValues)
  const [ values, setValues] = useState(initialFieldsValue);
  const classes = useStyles();

  // const renderEmailUser = () => {
  //   if (localStorage.length > 0) {
  //     return (JSON.parse(localStorage.getItem('email'))).email;
  //   }
  // }; // get the user email from local storage

  // const userEmail = renderEmailUser();

  const handleSelectChange = (e) => {
    const { name, value } = e.target
    setValue({id: e.target.value})
    console.log(name, value);
  }

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
    <TextField variant="outlined" label="Nome" onChange={handleInputChange} name="nameSupplyer"
    value={values.nameSupplyer}sx={{width: "430px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
    <TextField variant="outlined" label="C.N.P.J" onChange={handleInputChange} name="cnpj"
    value={values.cnpj}sx={{width: "250px", mt: "15px"}}/> </Grid>
    <Grid>
     <TextField variant="outlined" label="Celular" onChange={handleInputChange} name="nameSupplyer"
    value={values.mobile}sx={{width: "250px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
     <TextField variant="outlined" label="Email" onChange={handleInputChange} name="nameSupplyer"
    value={values.email}sx={{width: "430px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
    </Grid>
    <Grid>
     <TextField variant="outlined" label="Endereço" onChange={handleInputChange} name="nameSupplyer"
    value={values.address}sx={{width: "430px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
     <TextField variant="outlined" label="Bairro" onChange={handleInputChange} name="nameSupplyer"
    value={values.local}sx={{width: "250px", ml:"-2px", mr:"5px", mt: "15px"}}/> <br/>
    </Grid>
    
    <Box><Grid>
    <TextField variant="outlined" label="CEP:" onChange={handleInputChange} name="nameSupplyer"
    value={values.CEP}sx={{width: "200px", ml:"-2px", mr:"5px", mt: "15px"}}/> 
    
    </Grid> </Box>
    <Box mt={2} mr={1}>
    <Grid item xs={6} md={10} style={{ display: "flex"}}>
    <SelectState  
          name="state"
          label="Estado"
          value={value.id}
          onChange={handleSelectChange}
          options={SelectState.choices}
          fullWidth
        /> 
    <TextField variant="outlined" label="Data" onChange={handleInputChange} name="nameSupplyer"
    value={values.date}sx={{width: "180px", ml:"5px", mr:"3px"}}/>
     <TextField variant="outlined" label="Contato:" onChange={handleInputChange} name="nameSupplyer"
    value={values.contact}sx={{width: "230px", ml:"1px"}}/> 
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
