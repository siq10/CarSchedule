import React from "react";
import { Form, Field } from 'react-final-form'
import { useHistory } from "react-router-dom";
function Register() {
    let history = useHistory();

    const onSubmit = registerdata => {
        console.log(registerdata)
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerdata)
        };
        fetch('http://localhost:3030/users', requestOptions)
          .then(response => {
            console.log(response.statusText)
            history.push("/login")
          })

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
        if (values.password != values.confirm) {
            errors.confirm = 'Must match'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        return errors
    }
    return (
        <section>
            <h3 class='registerh'>Join us</h3>
            <p class='registerh'>to schedule procedures, be notified of new tutorials and more!</p>
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
                 <Field
                  name="confirm"
                  render={({ meta, input}) => (
                    <div>
                      <label>Confirm Password</label>
                      <input {...input} type='text' placeholder='Confirm' />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
                 <Field
                  name="email"
                  render={({ meta, input}) => (
                    <div>
                      <label>Email</label>
                      <input {...input} type='text' placeholder='Email' />
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

export {Register}