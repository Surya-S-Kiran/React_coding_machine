import React from 'react';

const SearchResults = ({results}) => {
    if(!results.length) return <p> No results found...</p>

    return (
        <ul>
      {
        results.map((result,index) => (
            <li key={index}>{result}</li>
        ))
      }
      </ul>
    );
};

export default React.memo(SearchResults);