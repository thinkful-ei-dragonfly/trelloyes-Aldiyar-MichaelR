import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe('List Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key='a' header='header' cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correct', () => {
    const tree = renderer.create(<List key='a' title='test' cards={[]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });



});