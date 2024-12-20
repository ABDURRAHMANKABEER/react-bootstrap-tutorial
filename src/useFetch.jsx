import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw new Error("Fetch Error");
                } else {
                  return  res.json();
                }
            }).then(data => {
                setData(data);
                setError(null);
            }).catch(err=> {
                if(err.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    console.log(err.message);
                    setError(err);
                }
                
            })
    }, [])

    return {data, error};
}
 
export default useFetch;