import React, { useState, useContext } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import SelectState from '../components/SelectState';
import CashFlowContext from '../context/Context';
// import * as yup from 'yup';
// import { DatePicker } from '@mui/x-date-pickers';

// import Stack from '@mui/material/Stack';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DateTimePicker';
// import MuiDatePicker from '../components/DatePicker';

const initialValues = {
    idBank: 0,
    fullName: '',
    address: '',
    local: '',
    city: '',
    CEP: '',
    phone: '',
    celular: '',
    contact: '',
    email: '',
    numBank: '',
    branch: '',
    account: '',
    accBalance: '',
    date: '',
    stateId: '',
    userName: '',
    
}

const initialSelectValues = { id: '', title: ''} 

const useStyles = makeStyles((theme) => {
    return{
        root: {
           
            display: "flex",
            flexwrap: "wrap",
            
            
        },
        textField: {
            margimLeft: theme.spacing(1),
            margimRight: theme.spacing(1),
        },
        
        field: {
            spacing: 1,
            display: "block",
        }
    }
});

  

export default function Bancos(props){
    const { addOrEdit } = props 
    const classes = useStyles()
    const { userEmail, setUserEmail } = useContext(CashFlowContext);
    const { userName, setUserName }= useContext(CashFlowContext)
    const [idBank, setIdBank] = useState({idBank: 'idBank'});
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [fullNameError, setFullNameError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [ phone, setPhone] = useState('');
    const [ celular, setCelular] = useState('');
    const [ contact, setContact] = useState('');
    const [numBank, setNumBank] = useState('');
    const [branch, setBranch] = useState('');
    const [account, setAccount] = useState('');
    const [numBankError, setNumBankError] = useState(false);
    const [branchError, setBranchError] = useState(false);
    const [accountError, setAccountError] = useState(false);
    const [stateId, setStateId] = useState('');
    const [ values, setValues ] = useState(initialValues);
    const [ value, setValue ] = useState(initialSelectValues)
    const [ isLoading, setIsLoading] = useState(false);

    // Validação do Form Bancos -*- Interrompida -*-

    // interface IformBancos{
       
    //     fullName: string;
    //     address: string;
    //     local: string;
    //     city: string;
    //     CEP: string;
    //     phone: string;
    //     celular: string;
    //     contact: string;
    //     email: string;
    //     numBank: string;
    //     branch: string;
    //     account: string;
       
    //   }
      
      
    //   const formValidationSchema: yup.SchemaOf<IformBancos> = yup.object().shape({
    //     fullName: yup.string().required('Preenchimento obrigatório').min(3),
    //     address: yup.string().required('Preenchimento obrigatório').email(),
    //     local: yup.string().required('Preenchimento obrigatório').password(),
    //     city: yup.string().required('Preenchimento obrigatório').min(3),
    //     CEP: yup.string().required('Preenchimento obrigatório').min(3),
    //     phone: yup.string().required('Preenchimento obrigatório').min(3),
    //     celular: yup.string().required('Preenchimento obrigatório').min(3),
    //     contact: yup.string().required('Preenchimento obrigatório').min(3),
    //     email: yup.string().required('Preenchimento obrigatório').emai(),
    //     numBank: yup.string().required('Preenchimento obrigatório').min(3),
    //     branch: yup.string().required('Preenchimento obrigatório').min(3),
    //     account: yup.string().required('Preenchimento obrigatório').min(3),

      
    //   });
    
    //   const handleSave = (dados: IformLogin) => {
    //     formValidationSchema
    //     .validate(dados, { abortEarly: false })
    //     .then((dadosValidados) => {
    //       setIsLoading(true);
  
    //       if (id === 'nova') {
    //         BancoService
    //           .create(dadosValidados)
    //           .then((result) => {
    //             setIsLoading(false);
  
    //             if (result instanceof Error) {
    //               alert(result.message);
    //             } else {
    //               if (isSaveAndClose()) {
    //                 navigate('/pessoas');
    //               } else {
    //                 navigate(`/pessoas/detalhe/${result}`);
    //               }
    //             }
    //           });
    //       } else {
    //         BancoService
    //           .updateById(Number(id), { id: Number(id), ...dadosValidados })
    //           .then((result) => {
    //             setIsLoading(false);
  
    //             if (result instanceof Error) {
    //               alert(result.message);
    //             } else {
    //               if (isSaveAndClose()) {
    //                 navigate('/pessoas');
    //               }
    //             }
    //           });
    //       }
    //     })
    //     .catch((errors: yup.ValidationError) => {
    //         const validationErrors: {[key: string]: string } = {};
    //         errors.inner.foreach(error => {
    //             if(!error.path) return;

    //             validationErrors[error.path] = error.message;

    //         });
            
    //         formRef.current?.setErrors(validationErrors)

    //     })
        
    // }

    const handleInputChange = e => {
        const { name, value } = e.target
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

const handleSubmit = (e) => {
    e.preventDefault()
    setFullNameError(false)
    setAddressError(false)

    if(fullName == ''){
        setFullNameError(true)
    }

    if( address == ''){
        setAddressError(true)
    }
    if ( numBank == ''){
        setNumBankError(true)
    }
    if (branch == ''){
        setBranchError(true)
    }
    if (account == ''){
        setAccountError(true)
    }
}


    return(
        <Container >
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
     
            <Grid container spacing={2} >
                <Box mt={3} mb={1}> {/* colocar margim top e bottom com box   */}
                <Grid item xs={6} md={8}>
                <TextField label="Nome do Banco" variant="outlined" color="secondary"
                sx={{width: "406px", ml: 2}} required className={classes.field} name="fullName"
                value={values.fullName}  error={ fullNameError }
                onChange={ handleInputChange }/>

                {/* <DatePicker  onChange={ console.log }
                renderInput={(params) => <TextField {...params} />}/> */}
                </Grid></Box>

              
                 <Box mt={1}>
                 <Grid item xs={6} md={8} style={{ display: "flex" }}>
                 <TextField label="Endereço" variant="outlined" color="secondary"
                 sx={{width: "620px", mr: 1, ml: 2}} required className={classes.field} name="address"
                 value={values.address}
                onChange={handleInputChange} error={addressError}/>
                <TextField label="Bairro"  className={classes.textField} name="local"
                 sx={{width: "350px" }}  value={ values.local }
                 onChange={ handleInputChange }  />
                </Grid></Box>
                <Grid item xs={6} md={10} style={{ display: "flex", margimLeft: 0}}>

                <TextField label="Cidade"  className={classes.field} name="city"
                sx={{width: "320px", mr: 1 }}  value={values.city}
                onChange={ handleInputChange } />

                 <TextField label="CEP"  className={classes.field} name="CEP"
                 sx={{width: "180px", mr: 1}} value={ values.CEP } 
                 onChange={ handleInputChange }/> 
               
                <TextField label="Contato" className={classes.field} name="contact"
                sx={{width: "350px", mr: 1 }} value={ values.contact} 
                onChange={ handleInputChange } />
                </Grid>

                <Grid item xs={6} md={10} style={{ display: "flex", margimLeft: 0}}>
                <TextField label="Telefone"  className={classes.field} name="phone"
                 sx={{width: "235px", mr: 1 }} value={ values.phone }
                 onChange={ handleInputChange } />
                 <TextField label="Celular"  className={classes.field} name="celular"
                 sx={{width: "235px", mr: 1 }} value={ values.celular }
                 onChange={ handleInputChange } />
                <TextField label="E-mail"  className={classes.field} name="email"
                 sx={{width: "350px", mr: 1 }} value={values.email} 
                 onChange={ handleInputChange } />
              
                 </Grid><br/>
                
                 <Grid item xs={6} md={10} style={{ display: "flex", margimLeft: 0}}>
                 
                 <SelectState  
                    name="state"
                    label="Estado"
                    value={value.id}
                    onChange={handleSelectChange}
                    options={SelectState.choices}
                    fullWidth
                 /> 
      
                 <TextField label="Nº do Banco" className={classes.field} required
                 sx={{width: "140px", mr: 1, ml: 1 }} name="numBank" value={values.numBank}
                 onChange={ handleInputChange } error={ numBankError } />   
                 <TextField label="Nº Agência" className={classes.field} name="branch"
                 sx={{width: "160px", mr: 1 }} value={ values.branch } required
                 onChange={ handleInputChange } error={ branchError } />
                <TextField label="Nº Conta Corrente" className={classes.field} name="account"
                 sx={{width: "200px", mr: 1 }}  value={ values.account } required 
                 onChange={ handleInputChange } error={ accountError } />
                 <TextField label="Saldo R$"  className={classes.field} name="accBalance"
                 sx={{width: "200px", mr: 1 }} value={ values.accBalance } 
                 disabled />
                 </Grid><br/>
                 {/* md={8} style={{ display: "flex" }} */}
                 <Grid item xs={6}> 
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
