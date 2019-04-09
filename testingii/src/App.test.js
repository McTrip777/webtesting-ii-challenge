import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Dashboard from './dashboard/Dashboard.js';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders successfully', () => {
  render(<App />);
});

it('adds a strike', () => {
  const { getByText } = render(<App />);

  const button = getByText('Strike');

  fireEvent.click(button);
  fireEvent.click(button);
  
  // getByText(/Strikes: 1/i);
  getByText(/Strikes: 2/i);
});

it('adds a ball', () => {
  const { getByText } = render(<App />);

  const button = getByText('Ball');

  fireEvent.click(button);
  // fireEvent.click(button);
  // fireEvent.click(button);
  
  getByText('Balls: 2');
});
