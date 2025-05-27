import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
    </div>
  );
};

export default TodoItem;
