import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// import { render } from '@testing-library/react';
import Home from '../pages/home/index';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render(<Router history={ history }>{component}</Router>),
    history,
  };
};

describe('routes', () => {
  test('render a h1 with text `Tarefas`', () => {
    const { getByRole } = renderWithRouter(<Home />);

    const heading = getByRole('heading', {
      level: 1,
      name: 'Tarefas',
    });
    expect(heading).toBeInTheDocument();
  });
});
