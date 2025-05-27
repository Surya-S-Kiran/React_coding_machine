import React, { useState, useRef, useEffect, useCallback } from 'react';
const cityNames = [
  "Amsterdam",
  "Berlin",
  "London",
  "New York",
  "Paris",
  "Rome",
  "San Francisco",
  "Tokyo",
  "Washington DC",
  "Zurich",
  "Copenhagen",
  "Helsinki",
  "Madrid",
  "Reykjavik",
  "Stockholm",
  "Vancouver",
  "Vienna",
  "Zagreb",
  "Budapest",
  "Dublin",
  "Hamburg",
  "Krakow",
  "Lisbon",
  "Ljubljana"
];

const AutoComplete = () => {
  const [data, setData] = useState(cityNames);
  const [filteredData, setFilteredData] = useState(cityNames);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const autocompleteRef = useRef(null);
  const debounceRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
        if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) setShow(false);
    };
    document.addEventListener('click', handleClick);
    return () => {
        document.removeEventListener('click',handleClick);
    }
  });

  //stable debounce function
  const debounce = useCallback((fun) => {
    let  timer;
    return (...args) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...args)
        },500);
    };
  },[]);

  useEffect(() => {
    debounceRef.current = debounce((inputval) => {
        const filterTheData = data.filter((item) => item.toLowerCase().includes(inputval.toLowerCase())  
    );
    setFilteredData(filterTheData);
});
  
  },[debounce,data])


  const handleChange = (Value) => {
    setValue(Value);
    debounceRef.current(Value);
  }
 
  const handleClick = (Value) => {
    setValue(Value);
    setShow(false);
  };

  return (
    <div class='autocomplete' ref={autocompleteRef}>
    <input 
        type="text"
        placeholder='type something...'
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        onFocus={() => setShow(true)}
    /> 
    {
        show && (
            <ul>
                {filteredData.map((item,id) => (
                    <li key={id} onClick={ () => handleClick(item)}>{item} </li>
               ))}
            </ul>
        )
    }
    </div>
  )
}

export default AutoComplete;