import { alertConstants } from '../_constants/alert_constants';

export const alertActions = {
    success,
    error,
    clear,
    warning
};

function success(message, show = false) {
    return { type: alertConstants.SUCCESS, message, show };
}

function warning(message, show = true) {
    return { type: alertConstants.WARNING, message, show }
}
function error(message, show = true) {
    return { type: alertConstants.ERROR, message, show };
}

function clear() {
    return { type: alertConstants.CLEAR };
}