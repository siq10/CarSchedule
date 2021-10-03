import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert_actions';
import { PrivateRoute } from './Composable/PrivateRoute';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import { userActions } from './_actions/user_actions';

import { MenuData } from './Menu/MenuData'
import { routeTitles } from './_constants/route_constants'

import { Container } from '@mui/material';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import logo from './logo.svg';
import './App.css';
import Layout from './Menu/Layout'
import Home from './Home'
import Schedule from './Schedule/Schedule'
import Procedure from './Schedule/Procedure'
import Tutorials from './Tutorials/Tutorials'
import TutorialPresentation from './Tutorials/TutorialPresentation'
import Contact from './Contact/Contact'
import AuthBtn from './Utils/AuthBtn'
import {
  Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [drawerState, setDrawerState] = useState(false);
  const [barTitle, setBarTitle] = useState("")
  const alert = useSelector(state => state.alert);
  const auth = useSelector(state => state.auth);
  const [lastErr, setLastErr] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubCallback = history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
        console.log(location)
        let pathstrings = location.pathname.split('/')
        if(action === "POP" && routeTitles.hasOwnProperty(pathstrings[1]))
        {
          if(pathstrings[1] == "" && pathstrings.length != 2)
          {
           setBarTitle(location.pathname)
          }
          else
          setBarTitle(MenuData[routeTitles[pathstrings[1]]].title)
        }
    });
    return unsubCallback
  }, []);
  // for correct toast aninmation
  useEffect(() => {
    if(alert.message)
    {
      setLastErr(alert.message)
    }
  }, [alert]);
  
  return (
    <Container fixed className="App"
      sx={{
        bgcolor: 'background.default'
      }}>
      <Router history={history}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            { barTitle ? barTitle: (window.location.pathname == '/' ? "Home" : window.location.pathname) }
          </Typography>
          {!auth.loggedIn ?
          <nav className="authcontainer">
            <AuthBtn name="Sign in" link="/login" previous={window.location.pathname=="/login"?"/home":window.location.pathname} ></AuthBtn>
            <AuthBtn name="Register" link="/register" previous="/login"></AuthBtn>
          </nav>
          :
          <nav className="authcontainer">
            <AuthBtn name="Logout" link={window.location.pathname} previous={window.location.pathname} onClick={() => dispatch(userActions.logout())}></AuthBtn>
          </nav>
          }
        </Toolbar>  
      </AppBar>
      {
      <Snackbar autoHideDuration={2500} anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
      open={alert.show} onClose={() => {dispatch(alertActions.clear())}}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {lastErr}
        </Alert>
      </Snackbar> 
      }
      <Switch>
            <Route path='/' exact component={Home} />
            <PrivateRoute path='/schedule/:procId?' component={Schedule} />
            <Route exact path='/tutorials' component={Tutorials} />
            <Route path='/tutorials/*' component={TutorialPresentation} />


            <Route path='/register' component={Register}/>
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
      </Switch>
      
      <Layout setTitle={setBarTitle} drawerState={drawerState} changeDrawerState={setDrawerState}></Layout>
      
      </Router>
    </Container>
  );
}

export default App;
