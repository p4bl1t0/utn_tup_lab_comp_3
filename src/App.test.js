import { render, screen } from '@testing-library/react';
import App from './App';
import Practica1 from './practica_1/Practica1';
import Practica2 from './practica_2/Practica2';

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
  const avatar = screen.queryByText(/Avatar/i);
  expect(avatar).not.toBeInTheDocument();
  const interstellar = screen.queryByText(/Interstellar/i);
  expect(interstellar).not.toBeInTheDocument();
});
test('test practica 2', () => {
  render(<Practica2 />);
  const headings = screen.queryAllByRole('heading');
  expect(headings.length).toBe(2);
  expect(headings[0].textContent).toMatch(/Unidad 1.2 - Práctica/gi);
  const navigation = screen.getByRole('navigation');
  expect(navigation).toBeInTheDocument();
  const body = screen.getByText('Implementación de árbol de componentes y propiedades en React.');
  expect(body).toBeInTheDocument();
  const links = screen.queryAllByRole('link');
  expect(links.length).toBe(2);
});
