import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'

import CardWrapper from '../styled/CardWapper';
import Button from '../styled/Button';

function BookDetail({handleDelete}){
    const [book, setBook] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(useParams())
    const id = useParams().id
    useEffect(() => {
        fetch(`http://localhost:4000/books/${id}`)
        .then(res => res.json())
        .then(book => {
            setBook(book)
            setIsLoaded(true);
        });
    },[]);

    if (!isLoaded) return <h2>Loading...</h2>;

    return(
        <CardWrapper>
            <img src={book.image} style={{width:"200px"}}/>
            <h3>{book.title}</h3>
            <p>{book.genre}</p>
            <p>{book.description}</p>
            <ul>
            {book.reviews.map(review => <li key={review.user_id}>{review.rating}/5: {review.content}</li>)}
            </ul>
            <Button onClick={() => handleDelete(book)} >Delete</Button>

        </CardWrapper>
    );
};
export default BookDetail