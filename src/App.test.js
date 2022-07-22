import { render, screen } from '@testing-library/react';
import App from './App';

test('renders practice title', () => {
  render(<App />);
  const linkElement = screen.getByText(/TUP - UTN - Laboratorio de computación 3 - Práctica/i);
  expect(linkElement).toBeInTheDocument();
});
