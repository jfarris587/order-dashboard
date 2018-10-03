import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Settings from '../redux/settings.js';
import { Order } from '../js/components/Order';
configure({ adapter: new Adapter() });

const order = Settings[0];
const wrapper = shallow(<Order data={order}/>);

describe('Order Component', () => {
  test('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
});

describe('expandOrder', () => {
  test('expands the information for the order', () => {
    expect(wrapper.state('expanded')).toBe(false);

    //Clicking to expand and close the info about an order
    wrapper.find('.order').simulate('click')
    expect(wrapper.state('expanded')).toBe(true);
    wrapper.find('.order').simulate('click')
    expect(wrapper.state('expanded')).toBe(false);
  })
});
