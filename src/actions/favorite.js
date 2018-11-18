import { ADDED_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../types';


export const addFavorite = (data) => ({
    type: ADDED_TO_FAVORITES,
    data
})
export const removeFavorite = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    id
})

export const addToFavorites = data => dispatch => dispatch(addFavorite(data))
export const removeFromFavorites = id => dispatch => dispatch(removeFavorite(id))