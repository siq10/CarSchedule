import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  
function PrivateRoute ({ component: Component, roles, ...rest }) {

    return (
      <Route {...rest} render={props => {
        if (!localStorage.getItem('user')) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location.pathname, alert:{type:"warning", message:"This section is not available to guests!"} }}} />

        }

        // logged in so return component
        return <Component {...props} />
      }}
     />
    )
  }

  export { PrivateRoute };
