import Filter from './Filter'
import BookCard from './BookCard'
import styled from "styled-components";


function BooksContainer({bookList, genreList, updateBook, handleFilterBooks}){

    return(
      <>
            <Filter genres={genreList} handleFilterBooks={handleFilterBooks}/>
            <BookContainer>
            {bookList.map((book) => <BookCard key={book.title} book={book} updateBook={updateBook}/>)}
            </BookContainer>
      </>
    )
  }
  export default BooksContainer;
  
  const BookContainer = styled.div `
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
  `
