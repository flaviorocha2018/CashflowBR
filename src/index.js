import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary:{
        main: '#2196F3',
      }, 
      secondary: {
        main: '#ff3d00',
      },
      error: {
        main: '#ff5252'
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
  backgroundColor:{
    default: '#f4f5fd',
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <React.StrictMode> </React.StrictMode> doesn't work.