import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../js/containers/Header';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders without crashing', () => {
    let squares = Array(9).fill(null)
    shallow(
      <Header
        details={[]}
        show={0}
      />
    );
  });
});
