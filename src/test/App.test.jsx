import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../js/containers/App';
configure({ adapter: new Adapter() });

const wrapper = shallow(<App login={true}/>);

describe('App', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});
