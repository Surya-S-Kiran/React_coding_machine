import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
   e.preventDefault();
   if(!text.trim()) return;
   dispatch(addTodo(text));
   setText('');

  };

    return (
        <form onSubmit={handleSubmit} >
            <input 
            value={text}
            placeholder='Enter todo...'
            onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'> Add</button>
        </form>

    );
};

export default TodoForm;