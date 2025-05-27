
// const Pagination = ({totalItems, pageSize, currentPage, onPageChange}) => {
//     const totalPages = Math.ceil(totalItems/pageSize);

//     if(totalPages <= 1) return null;
    
//     const pages = Array.from({ length: totalPages }, (_, i) => i + 1 );

//     return (
//         <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
//             <button 
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//             >
//                 Prev
//             </button>

//             {pages.map((page) => (
//                 <button
//                     key={page}
//                     onClick={() => onPageChange(page)}
//                     style={{
//                         fontWeight: page === currentPage ? "bold" : "normal",
//                         border: "1px solid #ccc",
//                         padding: "5px 10px",
//                         backgroundColor: page === currentPage ? "#007bff" : "white",
//                         color: page === currentPage ? "white" : "black",
//                         borderRadius: "4px"

//                     }}
//                 >
//                  {page}
//                 </button>
//             ))}

//             <button
//                 onClick={() => onPageChange(currentPage+1)}
//                 disabled={currentPage === totalPages}
//             >
//                 Next
//             </button>


//         </div>
//     );
// };

// export default Pagination;


import React from 'react';
import {usePagination, DOTS} from './../Effects/usePagination';
import classnames from 'classnames';
import './../scss/pagination.scss';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (!paginationRange || paginationRange.length < 2) return null;

    const onNext = () => {
        onPageChange(currentPage + 1);
    }

    const onPrev = () => {
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (

        <ul
         className={classnames('pagination-container', className)}      
        >
            <li
              className= {className('pagination-item', {
              disabled : currentPage === 1
              })}  
              onClick={onPrev}
                >
                <div className='arrow left' />
            </li>
            {paginationRange.map((pageNumber) => {
                if(pageNumber === DOTS)
                return <li key={`dots-${pageNumber}`} className="pagination-item dots">&#8230;</li>;

                return (
                    <li
                    key={pageNumber}
                    className={className('pagination-item',{
                        selected: pageNumber === currentPage
                    })}
                    onClick={() => onPageChange(pageNumber)}
                    >
                    {pageNumber}
                    </li>
                );
            })}

            <li
            className={className('pagination-item',{
                disabled: currentPage === lastPage
            })}
            onClick={onNext}
            >
            <div className='arrow right' />

            </li>
        </ul>
    );
};

export default Pagination;

