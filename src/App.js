import { func } from 'prop-types';
import React from 'react'
import TodoList from './Todo/TodoList'
//import logo from './logo.svg';
//import './App.css';

function App() {
   let todos = [
     { id: 1, completed: false, title: 'Купить хлеб'},
     { id: 2, completed: false, title: 'Купить масло'},
     { id: 3, completed: false, title: 'Купить молоко'}
   ]
  
  function toggleTodo(id) {
    todo = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
