import React from 'react';

export const TodoCard = React.memo(function TodoCard({ 
  todo, 
  handleDeleteTodo, 
  todoIndex, 
  handleCompleteTodo 
}) {
  const handleComplete = React.useCallback(() => {
    handleCompleteTodo(todoIndex);
  }, [handleCompleteTodo, todoIndex]);

  const handleDelete = React.useCallback(() => {
    handleDeleteTodo(todoIndex);
  }, [handleDeleteTodo, todoIndex]);

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.complete}
          onClick={handleComplete}
        >
          Complete
        </button>
        <button onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
});
