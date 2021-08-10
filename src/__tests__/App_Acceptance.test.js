import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Acceptance', () => {
  test('should display the added todo in the todo list', () => {
    render(<App />);

    // add form component
    const input = screen.getByRole('textbox');
  });
});
