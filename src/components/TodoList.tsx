import React,{useState,useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import {TodosData, TodosFilterType} from '../inputType';
import {InputLabel, MenuItem , FormControl, Box, Typography} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodosData[]>(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : []);
   
  
  const [filter, setFilter] = useState<string>(TodosFilterType.all);

  const filterInputData = [
    { value: TodosFilterType.all, label: 'All' },
    { value: TodosFilterType.active, label: 'Active' },
    { value: TodosFilterType.completed, label: 'Completed' },
  ];

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: TodosData) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleFilterChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === TodosFilterType.all) {
      return true;
    }
    if (filter === TodosFilterType.active) {
      return !todo.isCompleted;
    }
    if (filter === TodosFilterType.completed) {
      return todo.isCompleted;
    }
    return true;
  })


  return (
    <div className="todo-list pt-15 px-6 mx-auto max-w-3xl">
      <TodoForm addTodo={addTodo} />

        <FormControl size="small" className='w-full py-3'>
            <InputLabel id="todo-select-small-label">Filter</InputLabel>
            <Select
            labelId="todo-select-small-label"
            id="todo-select-small"
            value={filter}
            label="Filter"
            onChange={handleFilterChange}
            >
                {filterInputData.map((data, index) => (<MenuItem key={index} value={data.value}>{data.label}</MenuItem>))}
            </Select>
        </FormControl>
        
      {filteredTodos.length > 0 ? (
       
        <Box sx={{ width: '100%', bgcolor: '#f5f5f5',  }} className='pb-2'>
          <Typography sx={{fontSize: '1.1rem', fontWeight: 'semibold', py: .5}} component="div"> Todo List </Typography>
          <Typography sx={{fontSize: '0.8rem', fontWeight: 'semibold', pb: .5}} component="div" className='text-sm'> To manage tasks, toggle a checkbox to mark them as completed or active, and use a delete button to remove them</Typography>
        <>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              id={todo.id}
              isCompleted={todo.isCompleted}
              toggleComplete={toggleTodoComplete}
              removeTodoList={removeTodo}
            />
          ))
        }
       </>
        </Box>
       
      ) : (
        <>
        {todos.length === 0 && 
            <div className="text">No todos for today</div>
        }
        </>
       
      )}
    </div>
  );
};

export default TodoList
      {/* <div className="py-1">
        <label htmlFor="filter">Filter:</label>
        <select name="filter" id="filter" value={filter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div> */}