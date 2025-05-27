import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const PaginationPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const skip = (currentPage - 1) * pageSize;
                const res = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`);
                const data = await res.json();
                setProducts(data.products);
                setTotal(data.total);
            }catch(err){
                console.error("Failed to fetch products", err);
            }finally{
                setIsLoading(false);
            }
        };

        fetchProducts();
    },[currentPage])

    return (
     <div style={{padding: '2rem' , fontFamily: 'Arial'}} >
     <h1>Pagination Product list</h1>
     
      {isLoading ? (
        <p>loading...</p>
      ):
      <>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <strong>{product.title}</strong> -${product.price}
                </li>   
            ))}
        </ul>
        <Pagination
          totalItems={total}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage}
         />
      </>
      }

     </div>

    );

};

export default PaginationPage;