function BookDetail({book,handleDelete}){
    return(
        <div>
            <img src={book.image} style={{width:"200px"}}/>
            <h3>{book.title}</h3>
            <p>{book.genre}</p>
            <p>{book.description}</p>
            <ul>
            {book.reviews.map(review => <li key={review.user_id}>{review.rating}/5: {review.content}</li>)}
            </ul>
            <button onClick={() => handleDelete(book)} >Delete</button>

        </div>
    )
}
export default BookDetail