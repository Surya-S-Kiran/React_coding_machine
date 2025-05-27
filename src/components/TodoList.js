import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  if (todos.length === 0) return <p>No tasks available.</p>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
