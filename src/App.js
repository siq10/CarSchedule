import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert_actions';
import { PrivateRoute } from './Composable/PrivateRoute';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import { userActions } from './_actions/user_actions';

import logo from './logo.svg';
import './App.css';
import Layout from './Menu/Layout'
import Home from './Home'
import Schedule from './Schedule'
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
  const alert = useSelector(state => state.alert);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
        
    });
  }, []);
  
  return (
    <div className="App">
      <Router history={history}>
      <header className="App-header">
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
      </header>
      {alert.message &&
      <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <Switch>
            <Route path='/' exact component={Home} />
            <PrivateRoute path='/schedule' component={Schedule} />
            <Route exact path='/tutorials' component={Tutorials} />
            <Route path='/tutorials/*' component={TutorialPresentation} />

            <Route path='/register' component={Register}/>
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
      </Switch>
      
      <Layout/>
      
      </Router>
    </div>
  );
}

export default App;
