import AddTodoForm from '../components/AddTodoForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AddTodoForm Unit test', () => {
  test('Input box: must accept and display input', () => {
    render(<AddTodoForm />);
    const input = screen.getByTestId('input-todo');
    userEvent.type(input, 'New to do');
    expect(input.value).toBe('New to do');
  });
});
