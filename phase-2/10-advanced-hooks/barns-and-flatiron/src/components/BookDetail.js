import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import CardWrapper from '../styled/CardWapper';
import Button from '../styled/Button';
import useBook from "../hooks/useBook";

function BookDetail({handleDelete}){
//TODO:Create a custom hook that will fetch our book and save it to state
    const id = useParams().id
    const {book, isLoaded} = useBook(id)



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
