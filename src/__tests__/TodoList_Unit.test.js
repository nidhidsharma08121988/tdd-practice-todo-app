import { act, render, screen, waitFor } from '@testing-library/react';
import TodoList from '../components/TodoList';
import axios from 'axios';

jest.mock('axios');
describe('Todo Unit Test:', () => {
  test('Should display details from props on the screen', async () => {
    const newTask = {
      title: 'todo 2',
      completed: false,
    };
    const res = {
      data: [
        {
          title: 'todo json',
          completed: true,
        },
      ],
    };
    axios.get.mockResolvedValue(res);
    let items;
    await waitFor(async () => {
      let container = await render(<TodoList newTask={newTask} />);
      items = await container.findAllByTestId('listitem');
    });
    // use spyon instead of this
    setTimeout(() => {
      expect(items.length).toBe(2);
    }, 10000);
  });
});
