import React, { useEffect, useState, useContext } from 'react';
import CashFlowContext from '../context/Context';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

function CheckLogin(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CashFlowBR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const { userEmail, setUserEmail } = useContext(CashFlowContext);
  const { userName, setUserName }= useContext(CashFlowContext)
  const [password, setPassword] = useState({ password: '' });
  const [enterBtn, setEnterBtn] = useState({ enterBtn: true });
  const history = useHistory();

  // useEffect(() => {
  //   return() => {
  //     localStorage.clear();
  //     email('');
  //   }

  // },[])

  window.addEventListener("beforeunload", function(e){
    localStorage.clear();
 }, false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'userEmail') setUserEmail(value);
    if (name === 'password') setPassword({ password: value });
  };

  const validateEmail = (input) => {
    const result = /^[^\s@]+@[^\s@]+\.com/;
    return result.test(input);
  };

  useEffect(() => {
    const MIN_LENGTH = 5;
    if (validateEmail(userEmail) && password.password.length > MIN_LENGTH) {
      setEnterBtn({ enterBtn: false });
    } else setEnterBtn({ enterBtn: true });
  }, [userEmail, password]);

  const handleClick = () => {
    localStorage.setItem('userEmail', JSON.stringify({ userEmail }));
    history.push('/Layout');
  
  };

// onSubmit={handleSubmit}
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="userEmail"
              label="Digite seu Email"
              name="userEmail"
              autoComplete="off"
              autoFocus
              value={ userEmail }
              onChange={ handleChange }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Digite a Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={ password.password }
              onChange={ handleChange }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar senha"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ enterBtn.enterBtn }
              onClick={ () => handleClick() }
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CheckLogin sx={{ mt: 1, mb: 6 }} />
      </Container>
    </ThemeProvider>
  );
}