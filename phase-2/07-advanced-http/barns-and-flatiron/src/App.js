//NPM
import {useState, useEffect} from 'react'
//CSS
import './App.css'
//Components
import Header from './components/Header'
import Form from './components/Form'
import Filter from './components/Filter'
import BookCard from './components/BookCard'
import BookDetail from './components/BookDetail'

function App() {
  //What does useState return? It returns a pair of values: the current state and a function that updates it. 
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState('not-dark-mode')
  const [selectedBook, setSelectedBook] = useState(null)
  const [genreList, setGenres] = useState([])
  const [bookList, setBookList] = useState([])
  const [fullBookList, setFullBookList] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(data => {
      setBookList(data)
      setFullBookList(data)
    })
    fetch('http://localhost:4000/genres')
    .then(res => res.json())
    .then(data => setGenres(data))
  },[])
  
  //Adds new book to state
  //TODO: Persists book with db.json
  function addBook(newBook){
    fetch('http://localhost:4000/books',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(dbBook => {
      setBookList([dbBook, ...bookList])
    });
  
  };

  //TODO: Updates Book
  function updateBook(e,book){
    e.stopPropagation()
    fetch(`http://localhost:4000/books/${book.id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({liked: !book.liked})
    })
    .then(res => res.json())
    .then(updatedBook => {
      //map through our bookList
      //find our book
      //and if we find our book replace it with the updated book
      const updateBookList = bookList.map(blBook => {
        if(blBook.id === updatedBook.id){
          return updatedBook
        } else {
          return blBook
        }
      });
      setBookList(updateBookList)
      setFullBookList(updateBookList)
    });
  };

  //TODO: Deletes Book
  function handleDelete(book){
    fetch(`http://localhost:4000/books/${book.id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      const filteredList = bookList.filter(blBook => blBook.id !== book.id)
      setBookList(filteredList)
      setSelectedBook(null)
    })
  }
  
  //Handles Dark Mode
  function handleDarkMode(){
    if(darkMode === 'not-dark-mode'){
      setDarkMode('dark-mode')
    }else {
      setDarkMode('not-dark-mode')
    }
  }

  //Sets selected book to state 
  function handleSelectBook(book){
    setSelectedBook(book)
  }
  //Sets selected genre and filters books
  function handleFilterBooks(genre){
    const filteredBooks = fullBookList.filter(book => book.genre.toLowerCase() === genre.toLowerCase() )
    setBookList(filteredBooks)
  }

  return (
    <div className={darkMode}>
        <Header handleDarkMode={handleDarkMode} storeName={"Barns and Flatiron"} />
        {/* If is isVisible is true we will render our form */}
        {isVisible? <Form addBook={addBook}/> : null }
        {/* toggles if isVisible onClick */}
        <button onClick={() => setIsVisible(!isVisible)}>{isVisible?'Hide Form':'Add Book'}</button>
        <Filter genres={genreList} handleFilterBooks={handleFilterBooks}/>
        {selectedBook?<BookDetail book={selectedBook} handleDelete={handleDelete} />:null}
        {/* renders a BookCard for every book in our books array */}
        {bookList.map((book) => <BookCard key={book.title} book={book} handleSelectBook={handleSelectBook} updateBook={updateBook}/>)}
    </div>
  );
}

export default App;



