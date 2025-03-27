import { render, fireEvent, waitFor, RenderResult } from '@testing-library/react';
import TodoList from './TodoList';


function addTodo(component:RenderResult) {
  const { getByText, getByPlaceholderText} = component;
  const todoInput = getByPlaceholderText('New Todo');
  fireEvent.change(todoInput, { target: { value: 'New Todo' } });
  fireEvent.click(getByText('Add Task'));
}

describe('TodoList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render initial state correctly', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('No todos for today')).toBeInTheDocument();
  });

  it('should add a new todo correctly', () => {
    const component = render(<TodoList />);
    const { getByText } = component;
    addTodo(component);
    expect(getByText('New Todo')).toBeInTheDocument();
  });

  it('should remove a todo correctly', () => {
    const component = render(<TodoList />);
    const { getByText, getAllByRole } = component;
    addTodo(component);
    expect(getByText('New Todo')).toBeInTheDocument();

    const deleteButton = getAllByRole('button')[1];
    fireEvent.click(deleteButton);
    waitFor(() => {
      expect(getByText('New Todo')).not.toBeInTheDocument();
    })
  });

  it('New Todo list should be in active status', () => {
   
    const component = render(<TodoList />);
    addTodo(component);
   

    const {getByText,  container } = component;
    expect(getByText('New Todo')).toBeInTheDocument();
    expect(container.querySelectorAll("div.line-through")[0]).toBeUndefined();

  });

  it('should toggle a todo\'s completion status correctly', () => {
   
    const component = render(<TodoList />);
    addTodo(component);
    const {  container } = component;

    expect(container.querySelectorAll("div.line-through")[0]).toBeUndefined();
    const checkBox = container.querySelectorAll("input[type='checkbox']")[0];
    fireEvent.click(checkBox);
    waitFor(() => {
      expect(container.querySelectorAll("div.line-through")[0]).toBeDefined();
    });

  });
});