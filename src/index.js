import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './_helpers/store';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(33,26,55,0.32)',
    },
    secondary: {
      main: '#d84315',
    },
    background: {
      default: '#212121',
      paper: '#424242',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
