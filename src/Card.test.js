import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe('card tests', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key='a' title='title' content='content' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Card key='a' title='title' content='content' />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
