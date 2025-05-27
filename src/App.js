// import React from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter, setSortOrder } from './redux/todoSlice';

// const App = () => {
//   // const [todos, setTodos] = useState([]);
//   // const [filter, setFilter] = useState('all'); //all, active, completed
//   // const [sortOrder, setSortOrder] = useState('newest'); //asc, desc

//   const dispatch = useDispatch();
//   const { items, filter, sortOrder } = useSelector((state) => state.todos);

//   // const addTodo = (text) =>{
//   //   const newTodo = {
//   //     id: Date.now(),
//   //     text,
//   //     completed: false,
//   //   }
//   //   setTodos([...todos, newTodo]);
//   // }

//   // const toggleCompleted = (id) => {
//   //   const updatedTodos = todos.map((todo) => 
//   //     todo.id === id ? {...todo, completed: !todo.completed} : todo
//   //   );
//   //   setTodos(updatedTodos);
//   // }

//   // const deleteTodo = (id) => {
//   //   const updatedTodos = todos.filter((todo) => todo.id !== id);
//   //   setTodos(updatedTodos);
//   // }

//   const filteredTodos = items.filter((todo) => {
//     if (filter === 'active') return !todo.completed;
//     if (filter === 'completed') return todo.completed;
//     return true;
//   });

//   const sortedTodos = filteredTodos.sort((a,b) => {
//     if (sortOrder === 'newest') return b.id - a.id;
//     return a.id - b.id;
//   });
//   return (
//      <div style={{padding: '2rem', maxWidth: '600px', margin: 'auto'}} >

//        <h1> Todo App</h1>
//        <TodoForm />
//        <div style={{marginBottom: '2rem'}} >
//        <button onClick={() => dispatch(setFilter('all'))} >All</button>
//        <button onClick={() => dispatch(setFilter('active'))} >Active</button>
//        <button onClick={() => dispatch(setFilter('completed'))} >completed</button>
//        <button onClick={() => dispatch(setSortOrder('newest'))} >newest</button>
//        <button onClick={() => dispatch(setSortOrder('oldest'))} >oldest</button>
//        </div>

//        {/* <TodoList
//         todos={sortedTodos}
//         toggleCompleted={toggleCompleted}
//         deleteTodo={deleteTodo}
//         /> */}
//         <TodoList todos={sortedTodos} />

//      </div>
//   );
// };

// export default App;

// custom dropdown

// import React from 'react';
// import CustomDropdown from './components/CustomDropdown';
// const App = () => {
//   const options = ["React", "Next", "Javascript", "TypeScript"];
//   const handleSelect = (value) => {
//     console.log("selected", value);
//   }

//   return (
//     <div style={{padding: '2rem'}}>
//       <h1> Custom dropdown</h1>
//       <CustomDropdown
//         options={options}
//         onSelect={handleSelect}
//       />
//     </div>
//   );
// };

// export default App;
// import ProductList from './components/ProductList';
// import KanbanBoard from './components/KanbanBoard';
// import PaginationPage from './components/PaginationPage';
// const App = () => {
//   return (
//     <div>
//       {/* <ProductList /> */}
//       {/* <KanbanBoard /> */}
//       <PaginationPage />
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import Pagination from './components/Pagination';

// const App = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [products, setProducts] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1);
//     const pageSize = 10;

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 setIsLoading(true);
//                 // const skip = (currentPage - 1) * pageSize;
//                 const res = await fetch(`https://dummyjson.com/products`);
//                 const data = await res.json();
//                 setProducts(data.products);
//                 setTotal(data.total);
//             }catch(err){
//                 console.error("Failed to fetch products", err);
//             }finally{
//                 setIsLoading(false);
//             }
//         };

//         fetchProducts();
//     },[currentPage])

//     return (
//      <div style={{padding: '2rem' , fontFamily: 'Arial'}} >
//      <h1>Pagination Product list</h1>
     
//       {isLoading ? (
//         <p>loading...</p>
//       ):
//       <>
//         <ul>
//             {products.map((product) => (
//                 <li key={product.id}>
//                     <strong>{product.title}</strong> -${product.price}
//                 </li>   
//             ))}
//         </ul>
//         <Pagination
//           className="pagination-bar"
//           totalItems={total}
//           pageSize={pageSize}
//           currentPage={currentPage}
//           onPageChange={(page) => setCurrentPage(page)}
//          />
//       </>
//       }

//      </div>

//     );

// };

// export default App;

/*

import { useState } from 'react';
import {ThemeProvider} from './components/DebounceSearch_and_theme_swithcer/ThemeContext';
import ThemeToggle from './components/DebounceSearch_and_theme_swithcer/ThemeToggle';
import SearchInput from './components/DebounceSearch_and_theme_swithcer/SearchInput';
import SearchResults from './components/DebounceSearch_and_theme_swithcer/SearchResults';
import './App.css';

const App = () => {
    const [results, setResults] = useState([]);

    return (
     <ThemeProvider>
     <div className='App'>
      <ThemeToggle />
      <h2> Search Debounce</h2>
      <SearchInput onResults={setResults} />
      <SearchResults results={results} />
     </div>

     </ThemeProvider>
    );
};

export default App;

*/

//-----------------------------------------------AutoComplete typeahead--------------------------

import React from "react";
import AutoComplete from "./autocomplete_typeahead/components/AutoComplete";

const App = () => {
    

    return (
       <div>
        <h2> AutoComplete Typeahead with debounce</h2>
        <AutoComplete />
       </div>
    );
};

export default App;