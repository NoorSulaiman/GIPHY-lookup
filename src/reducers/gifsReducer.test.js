import gifsReducer from './gifsReducer';
import * as types from '../types'

const mockSearchData = [
    {
        id: 'gif1',
        title: 'title',
        images: {
            fixed_height:
            {
                url: 'url'
            }
        },

    },
    {
        id: 'gif2',
        title: 'title',
        images: {
            fixed_height:
            {
                url: 'url'
            }
        },
    }
];
const finalSearch = [{
    id: 'gif1',
    title: 'title',
    imgUrl: 'url',
    isFave: false
}, {
    id: 'gif2',
    title: 'title',
    imgUrl: 'url',
    isFave: false
}]
const mockFavData = {
    'gif1': {
        id: 'gif1',
        title: 'title',
        imgUrl: 'url',
        isFave: true
    }

}

describe('gifs reducer', () => {
    it('should return the initial state', () => {
        expect(
            gifsReducer(undefined, {})
        ).toEqual({
            favorites: {}, search: { searchResult: [], searchError: ' ' }
        });
    });
    describe('USER_SEARCHED action', () => {
        it('should return a searchError if response is not json', () => {
            expect(
                gifsReducer({ favorites: mockFavData }, {
                    type: types.USER_SEARCHED,
                    response: 'Error'
                })
            ).toEqual({ favorites: mockFavData, search: { searchResult: [], searchError: 'Error' } });
        });
        it('should return a searchResult if response is not empty array', () => {
            expect(
                gifsReducer({ favorites: mockFavData }, {
                    type: types.USER_SEARCHED,
                    response: mockSearchData
                })
            ).toEqual(
                {
                    favorites: mockFavData,
                    search: {
                        searchResult: [{ ...finalSearch[0], isFave: true }, finalSearch[1]],
                        searchError: ' '
                    }
                });
        })
        it('should return a searchError if response is empty array', () => {
            expect(
                gifsReducer({ favorites: mockFavData }, {
                    type: types.USER_SEARCHED,
                    response: []
                })
            ).toEqual({
                favorites: mockFavData, search: { searchResult: [], searchError: 'No results' }
            });
        });

    });

    describe('SEARCH_CLEARED action', () => {
        it('should return searchResult with empty array', () => {
            expect(
                gifsReducer({ favorites: mockFavData }, {
                    type: types.SEARCH_CLEARED,
                })
            ).toEqual({
                favorites: mockFavData, search: { searchResult: [], searchError: ' ' }
            });
        });
    });

    describe('ADDED_TO_FAVORITES action', () => {
        it('should return new favorite object and updated searchResult according to the response', () => {
            expect(
                gifsReducer(
                    {
                        favorites: {},
                        search: {
                            searchResult: finalSearch,
                            searchError: ' ',
                        },
                    },
                    {
                        type: types.ADDED_TO_FAVORITES,
                        data: mockFavData.gif1,
                    })
            ).toEqual({
                favorites: mockFavData,
                search: {
                    searchResult: [{ ...finalSearch[0], isFave: true }, finalSearch[1]],
                    searchError: ' ',
                },
            });
        });
    })
    describe('REMOVE_FROM_FAVORITES action', () => {
        it('should return new favorite object and updated searchResult according to the response ', () => {
            expect(
                gifsReducer(
                    {
                        favorites: mockFavData,
                        search: {
                            searchResult: [{ ...finalSearch[0], isFave: true }, finalSearch[1]],
                            searchError: ' ',
                        },
                    },
                    {
                        type: types.REMOVE_FROM_FAVORITES,
                        id: mockFavData.gif1.id,
                    })
            ).toEqual({
                favorites: {},
                search: {
                    searchResult: finalSearch,
                    searchError: ' ',
                },
            });
        });
    })
});