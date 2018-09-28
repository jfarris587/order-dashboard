import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../js/containers/Board';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Board', () => {
  it('renders without crashing', () => {
    let squares = Array(9).fill(null)
    shallow(
      <Board
        orders={[]}
        add={{mode:true}}
        page={0}
        show={0}
      />
    );
  });
});
