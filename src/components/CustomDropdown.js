import { useState, useRef, useEffect } from "react";
const CustomDropdown = ({ options, onSelect, placeholder= "Select an option" }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(0);
    const dropdownRef = useRef();

    const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option, index) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    setHighlightIndex(index);
  };

    const handleKeyDown = (e) => {
        if(e.key === "ArrowDown") {
        setHighlightIndex((prev) => (prev + 1) % options.length);
        }else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev - 1 + options.length) % options.length);
    } else if (e.key === "Enter") {
      const selected = options[highlightIndex];
      handleOptionClick(selected, highlightIndex);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
    }
     const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
    tabIndex={0}
    onKeyDown={handleKeyDown}
    ref={dropdownRef}
    >
    <div onClick={toggleDropdown}>
      {selectedOption || placeholder}
      <span >{isOpen ? "<" : "<" }</span>
    </div>
     {isOpen  && (
        <ul>
            {options.map((option,index) => (
                <li key={index}>{option} </li>
           ))}
        </ul>
     )}

    </div>
  );
};

export default CustomDropdown;