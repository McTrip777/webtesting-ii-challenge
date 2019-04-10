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

const { getByText } = render(<App />);

it('adds a strike', () => {

  const strike = getByText('Strike');

  // fireEvent.click(strike);
  fireEvent.click(strike);
  
  // getByText(/Strikes: 1/i);
  getByText(`Strikes: ${1}`);
});

it('adds a ball', () => {
  const ball = getByText('Ball');

  fireEvent.click(ball);
  fireEvent.click(ball);
  fireEvent.click(ball);
  
  getByText(`Balls: ${3}`);
});

it('adds a foul/strike', () => {
  const foul = getByText('Foul');

  // This reads two fouls because 
  // Strikes are clicked in the above function.
  fireEvent.click(foul);

  getByText(`Strikes: ${2}`);
});

it('adds a hit', () => {
  const hit = getByText('Hit');

  fireEvent.click(hit);
  fireEvent.click(hit);
  
  getByText(
    `Outs: ${0}`,
    `Balls: ${0}`,
    `Strikes: ${0}`
  );
});