import { ADDED_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../types';

const favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
export default function favoriteGifsReducer(state = {}, action = {}) {
    switch (action.type) {
        case ADDED_TO_FAVORITES:
            favorites.push(action.data)
            localStorage.setItem("favorites", JSON.stringify(favorites));
            return state
        case REMOVE_FROM_FAVORITES:
            favorites.map((gif, indx) => {
                if (gif.id === action.id) {
                    return favorites.splice(indx, 1)
                }
                return favorites
            })
            localStorage.setItem("favorites", JSON.stringify(favorites));
            return state
        default:
            return state;
    }
}