import React from 'react';
import formatDate from '../utils/dateUtils';

function TodoItem({ todo, deleteTodo, toggleCompleted }) {
  const { id, text, completed, createdAt } = todo;

  return (
    <div className="text-left">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <span className={completed ? 'line-through ml-2' : 'ml-2'}>{id}.</span>
      <span className={completed ? 'line-through ml-2' : 'ml-2'}>{text}</span>
      <span className="ml-2 text-gray-500 dark:text-gray-400">{formatDate(new Date(createdAt))}</span>
      <button
        className="ml-2 text-blue-500"
        title="删除"
        onClick={() => deleteTodo(id)}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
