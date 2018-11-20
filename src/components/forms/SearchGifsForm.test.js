import React from 'react';
import { shallow } from 'enzyme';
import SearchGifsForm from './SearchGifsForm';

const clickFn = jest.fn();
describe('SearchGifsForm', () => {
    it('should render input form correctly with given function', () => {
        const component = shallow(<SearchGifsForm submit={clickFn} />);
        expect(component).toMatchSnapshot();
    });
    it('should fail if no input is provided', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        const component = shallow(<SearchGifsForm submit={clickFn} />);
        component
            .find('#searchForm')
            .simulate('submit', fakeEvent);
        expect(component.find('InlineError').length).toBe(1)
    });

    it('should submit form', () => {
        let called = false;
        const fakeEvent = { preventDefault: () => called = true };
        const component = shallow(<SearchGifsForm submit={clickFn} />);
        component
            .find('#searchForm')
            .simulate('submit', fakeEvent);
        expect(called).toBe(true);
    });
});

