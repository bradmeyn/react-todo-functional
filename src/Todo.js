
import React from 'react';
import { IconButton,  ListItemSecondaryAction, ListItem, ListItemText, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

export default function Todo({task, completed, removeTodo, id, toggleTodo, editTodo}) {
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle}/> :
            <>
            <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                        {task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                    </>
                    }
        </ListItem>
    )
}
