import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem('todoList');
    return storedList ? JSON.parse(storedList) : [
      { id: 1, text: '学习 Vue React 框架', completed: false, createdAt: new Date().toISOString() },
    ];
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

  function addTodo(text) {
    const id = `${list.length + 1}`;
    const newTodo = {
      id,
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    const updatedList = [...list, newTodo];
    setList(updatedList);
  }

  function deleteTodo(id) {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  function toggleCompleted(id) {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(updatedList);
  }

  return (
    <div className="flex justify-center mt-6">
      <div className="w-500">
        <h1 className="text-4xl font-bold text-center">Todo List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList
          list={list}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
