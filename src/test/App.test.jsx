import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/App';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Add Test', () => {
  it('testAdd', () => {
    const wrapper = shallow(
      <App />
    );
    const instance = wrapper.instance();
    expect(instance.testAdd(2,2)).toEqual(4);

  });
});
