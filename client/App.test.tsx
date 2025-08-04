import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-native-web's useColorScheme
jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  useColorScheme: () => 'light',
}));

describe('App', () => {
  test('renders DiagnostiX title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DiagnostiX/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Hello World message', () => {
    render(<App />);
    const helloElement = screen.getByText(/Hello World!/i);
    expect(helloElement).toBeInTheDocument();
  });
});
