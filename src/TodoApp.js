import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';


function TodoApp() {
    const initialTodos = [
        {id: 1, task: 'Clean house', completed: false},
        {id: 2, task: 'Wash car', completed: true},
        {id: 3, task: 'Shave beard', completed: false},
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
    }
    return (
        <Paper
        style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColour: '#fafafa'
        }}
        elevation={0}
        >
        <AppBar color='primary' position='static' style={{height: '64px'}}>  
        <Toolbar>
            <Typography color='inherit'>Todo with Hooks</Typography>
        </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
            <Grid item xs={11} md={8} lg={6}>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos}/>
            </Grid>
        </Grid>
        
        </Paper>
    );
}

export default TodoApp;

