import {Link} from 'react-router-dom'

import CardWrapper from '../styled/CardWapper';
import Button from '../styled/Button';

function BookCard({book, updateBook}) {

    return (
        <CardWrapper >
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author} </p>
            <p>Author: {book.genre} </p>
            <div onClick={(e) => updateBook(e,book)}>{book.liked?"❤️" : "♡"}</div>
            <Button primary='primary'><Link to={`/books/${book.id}`}>View Detail</Link></Button>
        </CardWrapper>
    );
  }
export default BookCard; 

// const CardWrapper = styled.div `
//     width: 250px;
//     margin: 10px;
//     padding: 25px;
//     box-shadow:  0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
//     border-radius: 5px;

// `

// const Button = styled.div `
//     background: #5cbded;
//     padding: 0.5em 2em;
//     margin: 0 0.3em 0.3em 0;
//     text-transform: uppercase;
//     font-family: 'Roboto', sans-serif;
//     font-weight:400;
//     color:white;
//     & a{
//         text-decoration:none;
//         color:inherit;
//     }
//     &:hover{
//         border-style: solid;
//         border-color: black;
//         }
  
// `