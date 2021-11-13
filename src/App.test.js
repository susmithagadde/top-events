import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Trade and bet on a variety of football betting markets, including those on the Premier League, Champions League, La Liga, Bundesliga and MLS./i);
  expect(linkElement).toBeInTheDocument();
});
