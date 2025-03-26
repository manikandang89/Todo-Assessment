import React from 'react';
import {TodosData} from '../inputType';
import { Card , CardActions, CardContent , IconButton, Typography, Checkbox} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem: React.FC<{
  todo: TodosData;
  id: number;
  isCompleted: boolean;
  toggleComplete: (id: number) => void;
  removeTodoList: (id: number) => void;
}> = ({ todo, id, isCompleted, toggleComplete, removeTodoList }) => {
  return (
    <div className="todo-item py-2.5">
      <Card sx={{ display: 'flex', justifyContent: 'space-between',height: `60px` }} variant="outlined">
        <CardContent className={`max-w-full flex flex-grow justify-between ${isCompleted ? 'line-through text-green-600' : ''}`}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
          >
            {todo.taskName}
          </Typography>
          <Checkbox checked={isCompleted} color="success" onClick={() => toggleComplete(id)}/>
        </CardContent>
        <CardActions>
          <IconButton size="small">
            <DeleteIcon onClick={() => removeTodoList(id)} color="error"/>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default TodoItem