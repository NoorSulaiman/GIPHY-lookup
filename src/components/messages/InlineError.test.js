import React from 'react';
import { shallow } from 'enzyme';
import InlineError from './InlineError';

it('should render InlineError correctly with given strings', () => {
    const strings = 'error';
    const component = shallow(<InlineError text={strings} />);
    expect(component).toMatchSnapshot();
});