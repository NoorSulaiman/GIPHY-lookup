import { combineReducers } from 'redux';
import gifSearchReducer from './reducers/gifSearchReducer';
import favoriteGifsReducer from './reducers/favoriteGifsReducer';

export default combineReducers({
    gifSearchReducer,
    favoriteGifsReducer
});