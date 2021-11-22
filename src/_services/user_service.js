import testUtils from 'react-dom/test-utils';
import { authHeader } from '../_helpers/auth_header';
import { Config } from '../Utils/config'
import { useSelector } from 'react-redux'

export const userService = {
    login,
    logout,
    getcurrentuser,
    // register,
    // getAll,
    // getById,
    // update,
    // delete: _delete

};
let user = {}
function getcurrentuser()
{
    if(user.token)
    return user
    else
    {
        let ls_user = JSON.parse(localStorage.getItem('user'));
        if(ls_user)
        {
            return ls_user
        }
        else
        return {}
    }
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`${Config.apiUrl}:${Config.apiPort}/auths`, requestOptions)
        .then(handleResponse)
        .then(payload => {
            console.log(payload)
            const userdata = {id:payload.user.id, username:payload.user.username, email:payload.user.email, token:payload.token}
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            user = {id:userdata.id, username: userdata.username, token: userdata.token}
            localStorage.setItem('user', JSON.stringify(userdata));
            return userdata;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}