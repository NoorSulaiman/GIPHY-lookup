import React from 'react';
import { shallow } from 'enzyme';
import FavoritesGifCard from './FavoritesGifCard';

const clickFn = jest.fn();
const title = 'title';
const imgUrl = 'url';
const id = 'id';

it('should render FavoritesGifCard correctly with given props', () => {
    const component = shallow(<FavoritesGifCard title={title} imgUrl={imgUrl} id={id} removeFunc={clickFn} />);
    expect(component).toMatchSnapshot();
    component
        .find('#deleteIcon')
        .simulate('click');
    expect(clickFn).toHaveBeenCalled();
});
