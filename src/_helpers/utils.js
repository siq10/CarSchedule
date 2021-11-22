// import { alertConstants } from '../_constants/alert_constants';
import { monthnames } from '../_constants/operation_constants';

export const Utils = {
    dateToString,
};

function dateToString(date) {
    return `${monthnames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
}