import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

it('should render NavBar correctly with given strings', () => {
    const component = shallow(<NavBar />);
    expect(component).toMatchSnapshot();
});