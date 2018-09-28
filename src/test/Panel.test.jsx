import React from 'react';
import ReactDOM from 'react-dom';
import Panel from '../js/containers/Panel';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Panel', () => {
  it('renders without crashing', () => {
    let squares = Array(9).fill(null)
    shallow(
      <Panel
        delete={{mode:true}}
        add={{mode:true}}
      />
    );
  });
});
