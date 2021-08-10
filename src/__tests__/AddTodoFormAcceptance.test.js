import AddTodoForm from '../components/AddTodoForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe('AddTodoForm Acceptance test', () => {
  test('should have a input for user to input todo task', () => {
    render(<AddTodoForm />);
    expect(screen.query('.input-todo')).toBeTruthy();
  });

  test.skip('should have a checkbox to select if the todo task is completed', () => {
    render(<AddTodoForm />);
    expect(screen.queryByRole('checkbox')).toBeTruthy();
  });

  test.skip('should have a button to submit the added task', () => {
    render(<AddTodoForm />);
    expect(screen.query('.submit')).toBeTruthy();
  });

  test.skip('should call actions when the submit button is clicked', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);
    const submit = screen.get('.submit');
    fireEvent.click(submit);
    expect(mockAddTodo).toBeCalledTimes(1);
  });
});
