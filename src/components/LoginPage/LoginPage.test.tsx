import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('login page', () => {
  render(<LoginPage />);
});
