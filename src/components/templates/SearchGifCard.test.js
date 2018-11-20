import React from 'react';
import { shallow } from 'enzyme';
import SearchGifCard from './SearchGifCard';

const clickFn = jest.fn();

describe('SearchGifCard', () => {
    it('should render SearchGifCard correctly with given props', () => {
        const component = shallow(<SearchGifCard title={'title'} imgUrl={'url'} id={'id'} toggleFavorite={clickFn} isFave={false} />);
        expect(component).toMatchSnapshot();
        component.find('#gifcard').simulate('click');
        expect(clickFn).toHaveBeenCalled();
        expect(component.find('.favActive').length).toBe(0);
    });

    it('should render the activated favorite icon correctly if isFave true', () => {
        const component = shallow(<SearchGifCard title={'title'} imgUrl={'url'} id={'id'} toggleFavorite={clickFn} isFave />);
        expect(component.find('.favActive').length).toBe(1);
    });
});
