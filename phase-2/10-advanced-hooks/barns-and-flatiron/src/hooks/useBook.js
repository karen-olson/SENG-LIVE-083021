import {useState, useEffect} from 'react'

function useBook(id){
    const [book, setBook] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        fetch(`http://localhost:4000/books/${id}`)
        .then(res => res.json())
        .then(book => {
            setBook(book);
            setIsLoaded(true);
        });
    },[]);
    return {book, isLoaded}
};

export default useBook