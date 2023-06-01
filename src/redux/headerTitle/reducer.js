import {
    HEADERTITLE,
} from '../actions';

const INIT_STATE = {
    headerTitle: 'Transactions',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case HEADERTITLE:
            return Object.assign({}, state, {
                headerTitle: action.payload
            })
        default: return { ...state };
    }
}
