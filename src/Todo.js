
import React from 'react';
import { IconButton,  ListItemSecondaryAction, ListItem, ListItemText, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo({task, completed}) {
    return (
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                        {task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label="Edit">
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
        </ListItem>
    )
}
