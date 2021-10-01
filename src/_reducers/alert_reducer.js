import { alertConstants } from '../_constants/alert_constants';

export function alertReducer(state = {show:false}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message,
                show:false
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message,
                show:true
            };
        case alertConstants.CLEAR:
            return {show:false}
        default:
            return state
    }
}