import {useState, useEffect} from 'react'

function BookCard({book, handleSelectBook, updateBook}) {

    return (
        <div onClick={() => handleSelectBook(book)} style={{border: "1px solid black"}}>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author} </p>
            <p>Author: {book.genre} </p>
            <button onClick={(e) => updateBook(e,book)}>{book.liked?"❤️" : "♡"}</button>
        </div>
    );
  }
export default BookCard; 