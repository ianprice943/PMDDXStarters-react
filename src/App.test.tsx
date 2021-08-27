import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header, main, and footer', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const headerElement: HTMLElement = document.getElementsByTagName('header')[0];
  expect(headerElement).toBeInTheDocument();
  const mainElement: HTMLElement = document.getElementsByTagName('main')[0];
  expect(mainElement).toBeInTheDocument();
  const footerElement: HTMLElement = document.getElementsByTagName('footer')[0];
  expect(footerElement).toBeInTheDocument();
});
