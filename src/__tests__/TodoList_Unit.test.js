import { act, render, screen } from '@testing-library/react';
import { json } from 'body-parser';
import TodoList from '../components/TodoList';
import axios from 'axios';

jest.mock('axios');
describe('Todo Unit Test:', () => {
  test('Should display details from props on the screen', async () => {
    const newTasks = [
      {
        title: 'todo',
        completed: true,
      },
      {
        title: 'todo 2',
        completed: false,
      },
    ];
    const res = {
      data: [
        {
          title: 'todo json',
          completed: true,
        },
      ],
    };
    axios.get.mockResolvedValue(res);
    await act(() => {
      render(<TodoList newTasks={newTasks} />);
      (async () => {
        const items = await screen.findAllByTestId('listitems');
        expect(items.length).toBe(3);
      })();
    });
  });
});
