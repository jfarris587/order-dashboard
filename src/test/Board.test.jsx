import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Board } from '../js/containers/Board';
import Settings from '../redux/settings.js';

configure({ adapter: new Adapter() });

describe('filterOrders', () => {
  it('filters through the orders and to display specific types only', () => {
    var data;
    const orders = Settings;
    const wrapper = shallow(<Board orders={orders}/>);
    const instance = wrapper.instance();

    //page total for all-orders
    data = instance.filterOrders(orders, 0).length;
    expect(data).toBe(2);

    //order total on first page for all-orders
    data = instance.filterOrders(orders, 0)[0].length;
    expect(data).toBe(8);

    //page total for closed-orders
    data = instance.filterOrders(orders, 3).length;
    expect(data).toBe(1);

    //order total on first page for closed-orders
    data = instance.filterOrders(orders, 3)[0].length;
    expect(data).toBe(7);
  });
});

describe('splitOrders', () => {
  it('splits orders into array of pages', () => {
    var data;
    const orders = Settings;
    const wrapper = shallow(<Board orders={orders}/>);
    const instance = wrapper.instance();

    //splitting orders into pages array
    data = instance.splitOrders(orders, 5).length;
    expect(data).toBe(3);
    data = instance.splitOrders(orders, 12).length;
    expect(data).toBe(1);
    data = instance.splitOrders([], 4).length;
    expect(data).toBe(0);
  });
});

describe('nextPage/prevPage', () => {
  it('goes to the next/prev page of orders', () => {
    const orders = Settings;
    const wrapper = shallow(<Board orders={orders}/>);
    const instance = wrapper.instance();

    //on nextPage click
    instance.nextPage();
    expect(wrapper.state('page')).toBe(1);
    //on nextPage click at end
    instance.nextPage();
    expect(wrapper.state('page')).toBe(1);
    //on prevPage click
    instance.prevPage();
    expect(wrapper.state('page')).toBe(0);
    //on prevPage click at beginning
    instance.prevPage();
    expect(wrapper.state('page')).toBe(0);
  });
});
