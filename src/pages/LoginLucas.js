import React, { useState } from 'react';
import {Box, Card, CardActions, CardContent, Button, Typography, TextField} from '@mui/material';
import * as yup from 'yup';
import {useAuthContext} from '../../conntext';
import CircularProgress from '@mui/material/CircularProgress';


const loginSchema = yup.object().shape({
    userEmail: yup.string().email().required(),
    password: yup.string().required().min(6),
});


interface ILoginProps {
    children: React.ReactNode;
}

export const LoginLucas: React.FC<ILoginProps>= ({children}) => {
    const { isAuthenticated, login } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    const [userEmail, setUserEmail] = useState();
    const [password, setPassword] = useState();
    const [userEmailError, setUserEmailError] = useState();
    const [passwordError, setPasswordError] = useState();

    const handleSubmit = () => {
        setIsLoading(true);

        loginSchema
        .validate({userEmail, password}, {abortEarly: false})
        .then(validateData => {
           login(validateData.userEmail, validateData.password)
           .then(()=> {
            setIsLoading(false);
           })
        })
        .catch((errors: yup.ValidationError) => {
            setIsLoading(false);
            errors.inner.foreach(error => {
                if(error.path === 'userEmail'){
                    setUserEmailError(error.message);

                }else if(error.path === 'password'){
                    setPasswordError(error.message);

                }

            })

        })
    }

    if (isAuthenticated) return (
        <>{children}</>
    )

    return (
        <Box width='100vw' heigth='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={300}>
                        <Typography variant='h6' align='center'>Faça o Login para Acesso:</Typography>

                        <TextField
                            fullWidth
                            type="email"
                            label="Email"
                            value={userEmail}
                            disabled={isLoading}
                            error={!!userEmailError}
                            heperText={userEmailError}
                            onKeyDown={() => setUserEmailError('')}
                            onChange={e => setUserEmail(e.target.value)}
                           
                        
                        />
                        <TextField 
                            fullWidth
                            label="Senha"
                            type="password"
                            value={password}
                            disabled={isLoading}
                            error={!!passwordError}
                            heperText={passwordError}
                            onKeyDown={() => setPasswordError('')}
                            onChange={e => setPassword(e.target.value)}
                            
                        />


                    </Box>    

                </CardContent>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>

                    <Button
                       variant='contained'
                       disabled={isLoading}
                       onClick={handleSubmit}
                       endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
                    >
                        Entrar
                    </Button>    

                    </Box>    

                </CardActions>

            </Card>
        </Box>
    );

}

export default LoginLucas;