import { Config } from '../Utils/config'

export const operationService = {
    getFutureOps,
    getPastOps,
    cancelOp,
    updateOp
}

function getFutureOps(token,id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': 'Bearer ' + token }
    }
    return fetch(`${Config.apiUrl}:${Config.apiPort}/procedures/${id}`, requestOptions)
        .then(handleResponse)
        .then(payload => {
            console.log(payload)
            return payload
        })
}

function getPastOps(token) {

}


function cancelOp(token) {
    
}

function updateOp(token) {
    
}

function handleResponse(response)
{
    return response.text().then(text => {
        console.log(text)
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