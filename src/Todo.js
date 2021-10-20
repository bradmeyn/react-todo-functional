
import React from 'react';
import { IconButton,  ListItemSecondaryAction, ListItem, ListItemText, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo({task, completed, removeTodo, id, toggleTodo}) {
    return (
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                        {task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label="Edit">
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
        </ListItem>
    )
}
