import React, { useState }  from 'react';
import { TextField } from '@mui/material/TextField';



class Login extends React.Component{
    constructor(){
        super()

        const [nome, setName] = useState('');
        const [email, setEmail] = useState('');
        const [nomeError, setNameError] = useState(false);
        const [emailError, setEmailError] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            setNameError(false);
            setEmailError(false);
            if(nome == ''){
                setNameError(true);
            }
            if(email == ''){
                setEmailError(true)
            }

            if( nome && email){
                console.log(nome, email);
            }

        }
    }
  
    render(){
        const { nomeError, setName, emailError, setEmail, handleSubmit } = this.props
        return(
            <div>
                <form autoComplete="off" onSubmit={ handleSubmit }>
                <TextField 
                className="classes.Login" 
                name="nome" 
                id="outlined-basic" 
                label="Nome" 
                variant="outlined" 
                onChange={(e) => setName(e.target.value)} 
                required 
                error = { nomeError }/>
                <br/>
        
                <TextField 
                className="classes.Login" 
                name="email"
                id="outlined-basic" 
                label="E-mail" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)} 
                required
                error = { emailError }/>  
                 <br/>
                <button type="submit" className="btnSubmit">
                Enviar
                </button>
                </form>
               
                
            </div>
        )
    }
}

export default Login;