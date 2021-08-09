import TodoList from '../components/TodoList';
import { render, screen } from '@testing-library/react';
import axios from 'axios';

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

  test('should have todo title displayed on the page', async () => {
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
    const title1 = await screen.findByText('delectus aut autem');
    expect(title1).toBeInTheDocument();
    const title2 = await await screen.findByText(
      'quis ut nam facilis et officia qui'
    );
    expect(title2).toBeInTheDocument();
  });

  test('Should display error message when fetch request fails', async () => {
    axios.get.mockImplementationOnce(() => {
      Promise.reject(new Error());
    });
    render(<TodoList />);
    const error = await screen.findByText(/something went wrong/i);
    expect(error).toBeInTheDocument();
  });
});
