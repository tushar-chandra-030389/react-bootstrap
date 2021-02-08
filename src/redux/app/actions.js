import * as actionTypes from './action-types';

export const created = () => {
    return {
        type: actionTypes.CREATED,
    };
}

export const triggerCreated = () => {
    return {
        type: actionTypes.TRIGGER_CREATED,
    };
};
