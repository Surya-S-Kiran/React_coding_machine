import React,{ useEffect, useState, useCallback } from "react";
import  useDebounce  from "../../hooks/useDebounce";

const mockSearch = (query) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(["React", "Redux", "Next.js", "Node.js", "MongoDB", "Firebase"]
                .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            )
        },300);
    });
};

const githubSearch = async (query) => {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    return data.items?.map((user) => user.login ) || [];
}

const SearchInput = ({onResults}) => {
    const [input,setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const debounceInput = useDebounce(input);

    const search = useCallback(async () => {
        setLoading(true);
        setErrors(null);
        try{
        const results = await githubSearch(debounceInput);
        onResults(results);
        }catch(err){
            setErrors("Failed to Search.Please try again.")
        }finally{
            setLoading(false);
        }
    },[debounceInput,onResults]);

    useEffect(() => {
        if (debounceInput) search();
        else onResults([]);
    },[debounceInput, search, onResults]);


    return (
        <label htmlFor="search-input" style={{display: "block", marginBottom: '8px'}}>
        Search : 
        <input
          type="text"
          placeholder="Search something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}  
          aria-label="Search topics" 
         />
         </label>
    );

};
export default React.memo(SearchInput);