import { alertConstants } from '../_constants/alert_constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message, show = false) {
    return { type: alertConstants.ERROR, message, show };
}

function clear() {
    return { type: alertConstants.CLEAR };
}