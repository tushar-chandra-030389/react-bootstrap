import * as actionTypes from './action-types';

const INITiAL_STATE = {
    isCreated: false,
};

function appReducer(state = INITiAL_STATE, action) {
    switch (action.type)  {
        case actionTypes.CREATED:
            return {
                ...state,
                isCreated: true,
            };

        default:
            return state;
    }
}

export default appReducer;
