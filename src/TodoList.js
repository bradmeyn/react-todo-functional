import React from 'react';
import Todo from './Todo';

import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

function TodoList(props) {
    return (
        <Paper>
            <List>
            {props.todos.map(todo => (
                <>
                <Todo task={todo.task} key={todo.id} completed={todo.completed}/>
                <Divider/>
                </>
            ))}
            </List>
        </Paper>
      );
}

export default TodoList;