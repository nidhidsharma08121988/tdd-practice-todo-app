import AddTodoForm from '../components/AddTodoForm';
import { fireEvent, render, screen } from '@testing-library/react';

describe('AddTodoForm Acceptance test', () => {
  test('should have a input for user to input todo task', () => {
    render(<AddTodoForm />);
    expect(screen.queryByRole('textbox')).toBeTruthy();
  });

  test('should have a checkbox to select if the todo task is completed', () => {
    render(<AddTodoForm />);
    expect(screen.queryByRole('checkbox')).toBeTruthy();
  });

  test('should have a button to submit the added task', () => {
    render(<AddTodoForm />);
    expect(screen.query('.submit')).toBeTruthy();
  });

  test('should call actions when the submit button is clicked', () => {
    const addTodo = jest.fn();
    render(<AddTodoForm addTodo={addTodo} />);
    const submit = screen.get('.submit');
    fireEvent.click(submit);
    expect(addTodo).toBeCalledTimes(1);
  });
});
