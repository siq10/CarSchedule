import { Config } from '../Utils/config'

export const operationService = {
    getHistoryOps,
    getCurrentOps,
    cancelOp,
    updateOp,
    getOperationForUser
}

function getCurrentOps(token,id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + token }
    }
    return fetch(`${Config.apiUrl}:${Config.apiPort}/users/${id}/procedures`, requestOptions)
        .then(handleResponse)
        .then(payload => {
            console.log(payload)
            return payload
        })
}

function getHistoryOps(token) {
    
}


function cancelOp(token) {
    
}

function updateOp(token) {
    
}

function getOperationForUser(token,userId,opId) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + token }
    }
    return fetch(`${Config.apiUrl}:${Config.apiPort}/users/${userId}/procedures/${opId}`, requestOptions)
        .then(handleResponse)
        .then(payload => {
            console.log(payload)
            return payload
        })
}

function handleResponse(response)
{
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if(!response.ok)
        {
            const err = (data && data.message) || response.statusText
            console.error(err)
            return Promise.reject(err)
        }
        return data
    })
}