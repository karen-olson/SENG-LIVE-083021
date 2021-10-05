import {Link} from 'react-router-dom';
import CardWrapper from '../styled/CardWapper';
import Button from '../styled/Button';

import {useContext} from 'react';
import {RoseContext} from '../context/user';

function BookCard({book, updateBook}) {
//TODO: add 'username likes this book' when a book is liked
const user = useContext(RoseContext) 
    return (
        <CardWrapper >
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author} </p>
            <p>Author: {book.genre} </p>
            <div onClick={(e) => updateBook(e,book)}>{book.liked?`❤️ ${user.username} likes this book!` : "♡"}</div>
            <Button primary='primary'><Link to={`/books/${book.id}`}>View Detail</Link></Button>
        </CardWrapper>
    );
  }
export default BookCard; 
