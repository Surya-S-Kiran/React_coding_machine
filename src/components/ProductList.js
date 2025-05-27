import React, { useState } from 'react';

const ProductList = () => {
    const [search, setSearch] = useState("");
  return (
    <div style={{margin:'2rem'}}>
    <h1>ProductList</h1>
     <input
      type='text'
      placeholder='Enter product name...'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
     />
    
    </div>
    
  );
}

export default ProductList;