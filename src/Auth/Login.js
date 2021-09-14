import React, { useState, useEffect }  from "react";
import { Form, Field } from 'react-final-form'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions/user_actions';

function Login() {
    const location = useLocation();
    const dispatch = useDispatch();
    const onSubmit = logindata => {
        console.log(logindata)
        const lastAddressObj = location.state?location.state.from:"/" 
        console.log(lastAddressObj)
        dispatch(userActions.login(logindata.username, logindata.password, lastAddressObj));
    }
    const validate = values => {
        console.log("Validate")
        const errors = {}
        if (!values.username) {
            errors.username = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors

    }
    
    // reset login status
    useEffect(() => { 
      dispatch(userActions.logout()); 
    }, []);

    return (
        <section>
            <h3 class='loginh'>Sign in</h3>
            <p class='loginp'>to view your schedule, edit appointments and more!</p>
            <Form
            onSubmit={onSubmit}
            validateOnBlur={true}
            validate={validate}
            render={({ handleSubmit,submitting  }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="username"
                  render={({ meta, input }) => (
                    <div>
                      <label>Username</label>
                      <input {...input} type='text' placeholder='Username' />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ meta, input}) => (
                    <div>
                      <label>Password</label>
                      <input {...input} type='text' placeholder='Password' />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />

                <button type="submit">Submit</button>
              </form>
            )}
          />
        </section>
    )
}

export {Login}