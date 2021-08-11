import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
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
    await axios.get.mockResolvedValue(res);
    let container;

    // add form component
    const myInput = 'New task';
    //replace act with waitFor in case the changes affect the state plus you want to wait for the changes
    await waitFor(() => {
      container = render(<App />);
      const input = container.getByRole('textbox');
      userEvent.type(input, myInput);
      const submit = container.getByRole('button', { type: 'submit' });
      fireEvent.click(submit);
    });

    //change this to spyon later
    setTimeout(() => {
      expect(container.getByText(myInput)).toBeTruthy();
    }, 10000);
  });
});
