//NPM
import {useState} from 'react'
//CSS
import './App.css'
//Components
import Header from './components/Header'
import Form from './components/Form'
import Filter from './components/Filter'
import BookCard from './components/BookCard'
import BookDetail from './components/BookDetail'
import {books, genres} from './data.js'

function App() {
  //What does useState return? It returns a pair of values: the current state and a function that updates it. 
  const [isVisible, setIsVisible] = useState(false)
  const [darkMode, setDarkMode] = useState('not-dark-mode')
  const [selectedBook, setSelectedBook] = useState(null)
  const [bookList, setBookList] = useState(books)
  //TODO: Toggle Dark mode
  function handleDarkMode(){
    if(darkMode === 'not-dark-mode'){
      setDarkMode('dark-mode')
    }else {
      setDarkMode('not-dark-mode')
    }
    
  }
  //TODO: Show book detail onClick of BookCard
  function handleSelectBook(book){
    setSelectedBook(book)
    const filteredBooks = books.filter(arrBook => arrBook !== book)
    setBookList(filteredBooks)
  }


  return (
    <div className={darkMode}>
        <Header handleDarkMode={handleDarkMode} storeName={"Barns and Flatiron"} />
        {/* If is isVisible is true we will render our form */}
        {isVisible? <Form /> : null }
        {/* toggles if isVisible onClick */}
        <button onClick={() => setIsVisible(!isVisible)}>{isVisible?'Hide Form':'Add Book'}</button>
        <Filter genres={genres} />
        {selectedBook?<BookDetail book={selectedBook} />:null}
        {/* renders a BookCard for every book in our books array */}
        {bookList.map((book) => <BookCard key={book.title} book={book} handleSelectBook={handleSelectBook}/>)}
    </div>
  );
}

export default App;



