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
    axios.get.mockResolvedValue(res);
    act(() => {
      render(<App />);
    });
    // add form component
    const myInput = 'New task';
    const input = screen.getByRole('textbox');
    userEvent.type(input, myInput);
    const submit = screen.getByRole('button', { type: 'submit' });
    act(() => {
      fireEvent.click(submit);
    });
    expect(screen.getByText(myInput)).toBeTruthy();
  });
});
