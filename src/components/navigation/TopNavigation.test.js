import React from 'react';
import { shallow } from 'enzyme';
import TopNavigation from './TopNavigation';

it('should render TopNavigation correctly with given strings', () => {
    const component = shallow(<TopNavigation />);
    expect(component).toMatchSnapshot();
});