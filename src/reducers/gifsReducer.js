import { ADDED_TO_FAVORITES, REMOVE_FROM_FAVORITES, USER_SEARCHED, SEARCH_CLEARED } from '../types';

const favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : {};
let totalCount = 0
export default function gifsReducer(state = { favorites, search: { searchResult: [], searchError: {}, pagination: 0 } }, action = {}) {
    const finalSearchResults = [];
    switch (action.type) {
        case USER_SEARCHED:
            if (action.response.data.length > 0) {
                totalCount = action.response.pagination.total_count;
                action.response.data.forEach(gif => {
                    if (state.favorites[gif.id]) {
                        finalSearchResults.push({ id: gif.id, title: gif.title, imgUrl: gif.images.fixed_height.url, isFave: true });
                    } else { finalSearchResults.push({ id: gif.id, title: gif.title, imgUrl: gif.images.fixed_height.url, isFave: false }); }
                });
            }
            if (action.response.error) {
                return { ...state, search: { searchResult: [], searchError: { isNoConnection: true }, pagination: 0 } };

            } else if (action.response.data.length === 0) {
                return { ...state, search: { searchResult: [], searchError: { isNoResults: true }, pagination: 0 } };
            }
            return { ...state, search: { searchResult: finalSearchResults, searchError:{}, pagination: totalCount } };

        case SEARCH_CLEARED:
            return { ...state, search: { searchResult: [], searchError:{}, pagination: 0 } };

        case ADDED_TO_FAVORITES:
            const id = action.data.id;
            const newFavorites = { ...state.favorites, [id]: action.data };
            const newSearch = [];
            state.search.searchResult.forEach(gif => {
                if (gif.id === id) {
                    newSearch.push({ ...gif, isFave: true });
                } else { newSearch.push(gif); }
            });
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            return { ...state, favorites: newFavorites, search: { searchResult: newSearch, searchError:{}, pagination: totalCount } };

        case REMOVE_FROM_FAVORITES:
            const newFavoritesRemove = { ...state.favorites };
            delete newFavoritesRemove[action.id];
            const newSearchRemove = [];
            state.search.searchResult.forEach(gif => {
                if (gif.id === action.id) {
                    newSearchRemove.push({ ...gif, isFave: false });
                } else { newSearchRemove.push(gif); }
            });
            localStorage.setItem("favorites", JSON.stringify(newFavoritesRemove));
            return { ...state, favorites: newFavoritesRemove, search: { searchResult: newSearchRemove, searchError:{}, pagination: totalCount } };

        default:
            return state;
    }
};
