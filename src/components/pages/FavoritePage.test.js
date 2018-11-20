import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesPage } from './FavoritesPage';

const clickFn = jest.fn();

describe('FavoritesPage', () => {
    it('should render FavoritesPage correctly with given props', () => {
        const favorites = {};
        const component = shallow(<FavoritesPage favorites={favorites} removeFunc={clickFn} />);
        expect(component).toMatchSnapshot();
        expect(component.find('FavoritesGifCard').length).toBe(0);
    });

    it('should render FavoritesGifCard correctly if there is favorites items', () => {
        const favorites = { 'key': { title: 'title', id: 'id', imgUrl: 'value' } };
        const component = shallow(<FavoritesPage favorites={favorites} removeFunc={clickFn} />);
        expect(component.find('FavoritesGifCard').length).toBe(1);
    });
});