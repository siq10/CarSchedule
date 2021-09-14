import { Config } from '../Utils/config'

export const tutorialService = {
    getAll,
    update,
    create,
    delete: _delete
};

function getAll() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(`${Config.apiUrl}:${Config.apiPort}/tutorials`, requestOptions)
            .then(handleResponse)
            .then(payload => {
               console.log(payload)
               return payload
            });
}


function update() {
    return
}

function create() {
    return
}

function _delete() {
    return
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}