import { render, screen } from '@testing-library/react';
import App from './App';
import Practica1 from './practica_1/Practica1'

test('renders practice title', () => {
  render(<App />);
  const linkElement = screen.getByText(/TUP - UTN - Laboratorio de computación 3 - Práctica/i);
  expect(linkElement).toBeInTheDocument();
});
test('maps Nolan well', () => {
  render(<Practica1 />);
  //Inception, The Dark Knight, Batman Begins
  const inception = screen.getByText(/Inception/i);
  expect(inception).toBeInTheDocument();
  const darkNight = screen.getByText(/The Dark Knight/i);
  expect(darkNight).toBeInTheDocument();
  const begins = screen.getByText(/Batman Begins/i);
  expect(begins).toBeInTheDocument();
  const avatar = screen.getByText(/Avatar/i);
  expect(avatar).not.toBeInTheDocument();
  const interstellar = screen.getByText(/Interstellar/i);
  expect(interstellar).not.toBeInTheDocument();
});
