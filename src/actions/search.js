import axios from 'axios';
import { USER_SEARCHED, SEARCH_CLEARED } from '../types';

export const userSearched = (response) => ({
    type: USER_SEARCHED,
    response,
});

export const searchCleared = () => ({
    type: SEARCH_CLEARED,
});

export const searchGifs = (query, offset = 0) => dispatch =>
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${query}&limit=24&offset=${offset}`)
        .then(res => dispatch(userSearched(res.data)))
        .catch(() => dispatch(userSearched('Server is not responding!')));

export const clearSearch = () => dispatch => dispatch(searchCleared());

