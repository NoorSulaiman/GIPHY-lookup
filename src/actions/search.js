import axios from 'axios';
import { USER_SEARCHED, SEARCH_CLEARED } from '../types';

export const userSearched = (response) => ({
    type: USER_SEARCHED,
    response
})

export const searchCleared = () => ({
    type: SEARCH_CLEARED
})

export const searchGifs = query => dispatch =>
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${query}`)
        .then(res => dispatch(userSearched(res)))
        .catch(() => dispatch(userSearched('Server is not responding, try again later!')))

export const clearSearch = () => dispatch => dispatch(searchCleared())