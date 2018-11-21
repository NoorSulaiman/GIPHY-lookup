import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

const clickFn = jest.fn();

it('should render HomePage correctly with given props & with no SearchGifCard', () => {
    const component = shallow(<HomePage
        searchGifs={clickFn}
        searchResult={[]}
        searchError={{}}
        clearSearch={clickFn}
        addToFavorites={clickFn}
        removeFromFavorites={clickFn}
        pagination={0} />);
    expect(component).toMatchSnapshot();
    expect(component.find('SearchGifsForm').length).toBe(1);
    expect(component.find('SearchGifCard').length).toBe(0);
    expect(component.find('Message').length).toBe(0);
});

