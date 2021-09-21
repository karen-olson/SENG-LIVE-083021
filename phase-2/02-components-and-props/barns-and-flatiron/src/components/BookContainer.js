import Book from './Book'

function BookContainer({books}){
    return(
        <div className="book-container">
            {books.map(book => <Book key={book.title} title={book.title} author={book.author} likes={book.likes}/>)}
        </div>
    )
}
export default BookContainer