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
            // console.log(payload)
            return payload
        })
}

function getHistoryOps(token) {

}


function cancelOp(token, userId, procedureId) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + token },
    }
    return fetch(`${Config.apiUrl}:${Config.apiPort}/users/${userId}/procedures/${procedureId}`, requestOptions)
        .then(handleResponse)
        .then(result => {
            console.log(result)
            return result
        })
}

function updateOp(token, userId, operationData) {
    const { id, ...payload } = operationData
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + token },
        body: JSON.stringify( payload )
    }
    return fetch(`${Config.apiUrl}:${Config.apiPort}/users/${userId}/procedures/${id}`, requestOptions)
        .then(handleResponse)
        .then(payload => {
            // console.log(payload)
            return payload
        })
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
            // console.log(payload)
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