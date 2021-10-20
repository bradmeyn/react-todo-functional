import React from 'react';
import useInputState from './hooks/useInputState';
import {TextField} from '@mui/material';

export default function EditTodoForm({editTodo, id, task, toggle}) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggle();
        }}
        style={{marginLeft: '1rem', width: '100%'}}
        >
        <TextField 
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
        />
        </form>
    )
}
