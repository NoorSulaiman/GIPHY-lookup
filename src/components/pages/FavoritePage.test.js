import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesPage } from './FavoritesPage';

const clickFn = jest.fn();

describe('FavoritesPage', () => {
    it('should render FavoritesPage correctly with given props', () => {
        const favorites = {};
        const removeFunc = clickFn
        const component = shallow(<FavoritesPage favorites={favorites} removeFunc={removeFunc} />);
        expect(component).toMatchSnapshot();
        expect(component.find('FavoritesGifCard').length).toBe(0)
    });

    it('should render FavoritesGifCard correctly if there is favorites items', () => {
        const favorites = { 'key': { title: 'title', id: 'id', imgUrl: 'value' } };
        const removeFunc = clickFn
        const component = shallow(<FavoritesPage favorites={favorites} removeFunc={removeFunc} />);
        expect(component.find('FavoritesGifCard').length).toBe(1)
    });
})