//NPM
import {useState, useEffect} from 'react';
import{Route, Switch, useHistory} from 'react-router-dom'
//CSS
import './App.css';
//Context 
import { UserProvider } from './context/user';
//Components
import Header from './components/Header';
import Form from './components/Form';
import BookDetail from './components/BookDetail';
import BooksContainer from './components/BooksContainer';


function App() {
  const [genreList, setGenres] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [fullBookList, setFullBookList] = useState([]);

  const history = useHistory();
  console.log(history)


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
  

  //Persists book with db.json
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

  //Updates Book
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

  //Deletes Book
  function handleDelete(book){
    fetch(`http://localhost:4000/books/${book.id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      const filteredList = bookList.filter(blBook => blBook.id !== book.id)
      setBookList(filteredList)
      history.push("/books")
    })
  }

  //Sets selected genre and filters books
  function handleFilterBooks(genre){
    const filteredBooks = fullBookList.filter(book => book.genre.toLowerCase() === genre.toLowerCase() )
    setBookList(filteredBooks)
  }

  function renderForm(){
    return <Form addBook={addBook}/>
  }
  return (
    <div>
      <UserProvider>
        <Header storeName={"Barns and Flatiron"} />

        <Switch>
  
          <Route path="/books/new" component={renderForm}/>
        
          <Route path="/books/:id">
            <BookDetail handleDelete={handleDelete} />
          </Route>

          <Route path="/books">
            <BooksContainer bookList={bookList} genreList={genreList} updateBook={updateBook} handleFilterBooks={handleFilterBooks}/>
          </Route>

          </Switch>
      </UserProvider>
    </div>
  );
}

export default App;



