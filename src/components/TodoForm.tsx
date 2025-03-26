import { useState } from "react";
import {TodosData} from '../inputType';

interface TodoFormProps {
    addTodo: (todo: TodosData) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
    const [inputValue, setInputValue] = useState<any>({
        task: ''
    });
    const [inputError, setInputError] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.task.trim() === '') {
            setInputError(true);
            return null;
        } 
        const newtodo = {id: Date.now(), taskName: inputValue.task , isCompleted: false}
        addTodo(newtodo);
        setInputValue({task: ''});
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 py-3">
            <div className="flex-1/2">
            <input
                type="text"
                value={inputValue.task}
                onChange={(e) => { setInputValue({task: e.currentTarget.value}) 
                setInputError(false);}}
                placeholder="New Todo"
                className={`py-2 px-2 w-full rounded-sm text-sm border focus:outline-none focus:border-blue-400 ${inputError ? 'border-red-500' : ''}`}
            />
            {inputError && <p className="text-red-500">Todo task name is required</p>}
             </div>
            <button type="submit" className="px-2 py-2 text-white bg-blue-500 hover:bg-blue-700
            rounded-sm border-none">Add Task</button>
           
        </form>
    )
}

export default TodoForm
