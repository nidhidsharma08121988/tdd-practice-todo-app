import TodoList from '../../components/TodoList';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('TodoList acceptance', () => {
  test('fetches todoList from API and renders it', async () => {
    const todoList = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
    ];

    axios.get.mockImplementationOnce(() => {
      Promise.resolve({
        data: todoList,
      });
    });

    render(<TodoList />);

    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
  });
});
