import React from 'react';
import { render } from './test-utils';
import Home from './Home';

const state = {
  campaigns: {},
  categories: {},
  products: {}
};

test('renders title & button', () => {
  const { getByText } = render(<Home />, { initialState: state });
  const title = getByText(/Home/);
  expect(title).toBeInTheDocument();
  const button = getByText(/Load Campaigns data/i);
  expect(button).toBeInTheDocument();
});
