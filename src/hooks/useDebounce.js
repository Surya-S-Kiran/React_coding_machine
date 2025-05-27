import { useEffect, useState } from "react";

export default function useDebounce(value, delay=500){

    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        },delay);
        return () => clearInterval(timeout);
    },[value,delay]);

    return debounceValue;
};

// export default useDebounce;