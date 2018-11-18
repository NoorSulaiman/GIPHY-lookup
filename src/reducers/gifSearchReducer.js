import { USER_SEARCHED, SEARCH_CLEARED } from '../types';

export default function gifSearchReducer(state = {}, action = {}) {
    switch (action.type) {
        case USER_SEARCHED:
            if (typeof (action.response) === 'string') {
                return { searchError: action.response }
            } return { searchResult: action.response.data.data }
        case SEARCH_CLEARED:
            return {}
        default:
            return state;
    }
}   