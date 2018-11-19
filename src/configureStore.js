import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import gifsReducer from './reducers/gifsReducer';

export default function configureStore() {
    return createStore(gifsReducer, composeWithDevTools(applyMiddleware(thunk)))
} 