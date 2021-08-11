import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import axios from 'axios';

jest.mock('axios');
describe('App Acceptance', () => {
  test('should display the added todo in the todo list', async () => {
    const res = {
      data: [
        {
          title: 'task 1',
          completed: false,
        },
      ],
    };
    axios.get.mockResovedValue(res);
    render(<App />);
    // add form component
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'New task');
    const submit = screen.getByRole('button', { type: 'submit' });
    await act(() => {
      fireEvent.click(submit);
      expect(screen.getByText('New Task')).toBeTruthy();
    });
  });
});
