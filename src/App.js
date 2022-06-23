import React from 'react';
import { useState } from 'react';
import './App.css';
import { TaskRoute } from './TaskRoute/TaskRoute';

export const TodoListContext = React.createContext([])

function App() {
  const [todoList, setTodoList ] = useState([])
  const [searchTask, setSearchTask] = useState([])
  return (
    <TodoListContext.Provider value={[
      todoList,
      setTodoList,
      searchTask,
      setSearchTask
    ]}>
      <TaskRoute></TaskRoute>
    </TodoListContext.Provider>
  );
}

export default App;
