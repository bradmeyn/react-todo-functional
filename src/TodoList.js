import React from 'react';
import Todo from './Todo';

import { Paper, List, Divider } from '@mui/material';

function TodoList({todos, removeTodo, toggleTodo}) {
    return (
        <Paper>
            <List>
            {todos.map(todo => (
                <>
                <Todo
                id={todo.id} 
                task={todo.task} 
                key={todo.id} 
                completed={todo.completed}
                removeTodo = {removeTodo}
                toggleTodo={toggleTodo}
                />
                <Divider/>
                </>
            ))}
            </List>
        </Paper>
      );
}

export default TodoList;