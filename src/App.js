import Notes from './pages/Notes';
import Banks from './pages/Banks';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        type: 'ligth',
        main: '#fefefe',
      },
      secondary: {
        main: '#f50057',
      },

    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
      typography: {
        fontFamily: 'Quicksand',
        fontWeigthLigth: 400,
        fontWeigthRegular: 500,
        fontWeigthMedium: 600,
        fontWeigthBold: 700,
      }
 
})


class App extends React.Component{
    render(){
      return(
        <ThemeProvider theme={ theme }>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Notes}/>
            <Notes />
            <Route path="/bancos" component={ Banks }/>
            <Banks />
          </Switch>
         </BrowserRouter>
        </ThemeProvider>
      )
    }
};

export default App;
