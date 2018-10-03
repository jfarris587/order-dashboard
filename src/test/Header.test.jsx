import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from '../js/containers/Header';
import Settings from '../redux/settings.js';
configure({ adapter: new Adapter() });

const orders = Settings;
const wrapper = shallow(<Header orders={orders}/>);

describe('Header Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  });
});
