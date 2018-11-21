import gifsReducer from './gifsReducer';
import * as types from '../types'

const mockSearchData ={ 
    data:[
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
],
pagination:{total_count:1000},
}

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
            favorites: {}, search: { searchResult: [], searchError: {}, pagination: 0 }
        });
    });
    describe('USER_SEARCHED action', () => {
        it('should return a searchError if response is not json', () => {
            expect(
                gifsReducer({ favorites: mockFavData }, {
                    type: types.USER_SEARCHED,
                    response: {data:[],error:'server down'}
                })
            ).toEqual({ favorites: mockFavData, search: { searchResult: [], searchError: {isNoConnection: true}, pagination: 0 } });
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
                        searchError: {},
                         pagination: 1000,
                    },
                });
        })
        it('should return a searchError if response is empty array', () => {
            expect(
                gifsReducer({ favorites: mockFavData }, {
                    type: types.USER_SEARCHED,
                    response: {data:[]}
                })
            ).toEqual({
                favorites: mockFavData, search: { searchResult: [], searchError: { isNoResults: true }, pagination: 0 }
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
                favorites: mockFavData, search: { searchResult: [], searchError: {}, pagination: 0 }
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
                            searchError: {},
                            pagination: 1000,
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
                    searchError: {}, 
                    pagination: 1000,
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
                            searchError: {}, 
                            pagination: 1000,
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
                    searchError: {}, 
                    pagination: 1000,
                },
            });
        });
    })
});