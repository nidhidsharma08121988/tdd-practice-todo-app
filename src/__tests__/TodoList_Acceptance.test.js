import { render, screen } from '@testing-library/react';
import axios from 'axios';
import TodoList from '../components/TodoList';

jest.mock('axios');

describe('TodoList acceptance', () => {
  test('Should fetch todoList from API and renders it', async () => {
    const todoList = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ];
    const res = {
      data: todoList,
    };

    axios.get.mockResolvedValue(res);

    render(<TodoList />);

    const items = await screen.findAllByTestId('listitem');
    expect(items.length).toBe(1);
  });

  test('should have todo title displayed on the page', async () => {
    const todoList = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ];
    const res = {
      data: todoList,
    };
    axios.get.mockResolvedValue(res);
    render(<TodoList />);

    const title1 = await screen.findByText('delectus aut autem');
    expect(title1).toBeTruthy();
  });

  test('Should display error message when fetch request fails', async () => {
    axios.get.mockResolvedValue(Promise.reject('Wrong'));
    render(<TodoList />);
    const error = await screen.findByText(/something went wrong/i);
    expect(error).toBeTruthy();
  });
});
