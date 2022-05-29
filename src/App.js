import Notes from './pages/Notes';
import CreateNotes from './pages/CreateNotes';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
       
        primary:{
          main: '#2196F3',
        }, 
        secondary: {
          main: '#607D8B',
        },
        error: {
          main: '#D32F2F'
        },
        success: {
          main: '#689F38'
        },
        warning: {
          main: '#fab710'
        },
        action: {
          main: '#fab710'
        },

    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
      typography: {
        fontFamily: 'Nunito',
        fontWeightLight: 300,
        fontWeigthRegular: 400,
        fontWeigthMedium: 500,
        fontWeigthSemiBold: 600,
        fontWeigthBold: 700,
        fontWeigthExtraBold: 800,
      }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Layout>
    <Switch>
        <Route exact path="/Layout" component={ Layout } />
       {/* <Link to= "/login" component={ Login } /> */}
        <Route exact path="/" component={ Notes } />   
        <Link to="/create" component={ CreateNotes } />
        
   </Switch>
    </Layout>       
    </Router>
    </ThemeProvider>
  );
}

export default App;